import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const ImageUpload = ({ image, setImage, handleImageChange }) => {
  return (
    <div className='d-flex flex-column-reverse'>
      <div className="mb-3">
        <label htmlFor="imageInput" className="form-label">
          Choose Image
        </label>
        <input
          type="file"
          className="form-control"
          id="imageInput"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      {image && (
        <div className="mb-3 uploaded_file_view">
          <img src={URL.createObjectURL(image)} className="img-fluid" alt="Uploaded Image" />
        </div>
      )}
    </div>
  );
};

const Editbrand = () => {
  const [image, setImage] = useState(null);
  const [brandData, setBrandData] = useState({});
  const [name, setName] = useState('');
  const [selling, setSelling] = useState('');
  const [rating, setRating] = useState('');
  const [iButtonData, setiButtonData] = useState("");
  const [doYouKnow, setdoYouKnow] = useState("");
  const [salesRanking, setsalesRanking] = useState("");
  const [salesMonthAndYear, setsalesMonthAndYear] = useState("");

  // console.log(salesRanking)

  const params = useParams(); // Use useParams to get the brand ID from the URL
  const navigate = useNavigate(); // Use useNavigate to handle navigation

  useEffect(() => {
    // Fetch brand data by ID when the component mounts
    const fetchBrandData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API}/api/getbrand/${params.id}`);
        const data = await response.json();
        if (response.ok) {
          setImage(null); // Reset image state to prevent "createObjectURL" error
          setName(data.data.brand.name);
          setSelling(data.data.brand.selling);
          setRating(data.data.brand.rating);
          setsalesMonthAndYear(data.data.brand.salesMonthAndYear);
          setiButtonData(data.data.brand.iButtonData);
          setdoYouKnow(data.data.brand.doYouKnow);
          setsalesRanking(data.data.brand.salesRanking);


          var text = data?.data?.brand?.name; // Move this declaration here

        console.log(text);

        } else {
          // Handle error
          console.error('Failed to fetch brand data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching brand data:', error.message);
      }
    };

    fetchBrandData();
  }, [params.id]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file); // Set the file directly, not the URL
    }
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image); // Append the file directly to the FormData
      formData.append('name', name);
      formData.append('selling', selling);
      formData.append('rating', rating);
      formData.append("iButtonData", iButtonData);
      formData.append("doYouKnow", doYouKnow);
      formData.append("salesRanking", salesRanking);
      formData.append("salesMonthAndYear", salesMonthAndYear);



      const response = await fetch(`${process.env.REACT_APP_API}/api/editbrand/${params.id}`, {
        method: 'PUT',
        body: formData,
      });

      const data = await response.text();
      console.log('Response from server:', data);

      if (response.ok) {
        navigate("/brand");
      } else {
        console.error('Failed to update brand:', data);
      }
    } catch (error) {
      console.error('Error updating brand:', error.message);
    }
  };

  return (
    <section className="main-container-full">
      <div className="d-flex justify-content-center">
        <div className='w-50'>
          <ImageUpload image={image} setImage={setImage} handleImageChange={handleImageChange} />
          <div>
            <div className="form-group">
              <label htmlFor="brandName">Brand Name</label>
              <input
                type="text"
                className="form-control mb-3"
                id="brandName"
                placeholder="Brand name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="sellingSince">Selling since in India</label>
              <input
                type="number"
                className="form-control mb-3"
                id="sellingSince"
                placeholder="Selling since in India"
                value={selling}
                onChange={(e) => setSelling(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <input
                type="number"
                className="form-control mb-3"
                id="rating"
                placeholder="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
              <label htmlFor="rating">iButtonData</label>
          <textarea
            type="text"
            className="form-control mb-3"
            id="rating"
            placeholder="Rating"
            rows={4}
            value={iButtonData}
            onChange={(e) => setiButtonData(e.target.value)}
          />
          <label htmlFor="rating">Do You Know</label>
          <textarea
            type="text"
            className="form-control mb-3"
            id="rating"
            placeholder="Rating"
            rows={4}
            value={doYouKnow}
            onChange={(e) => setdoYouKnow(e.target.value)}
          />
          <label htmlFor="rating">Sales Ranking</label>
          <input
            type="text"
            className="form-control mb-3"
            id="rating"
            placeholder="Rating"
            value={salesRanking}
            onChange={(e) => setsalesRanking(e.target.value)}
          />
          <label htmlFor="rating">Sales Month And Year</label>
          <input
            type="text"
            className="form-control mb-3"
            id="rating"
            placeholder="Rating"
            value={salesMonthAndYear}
            onChange={(e) => setsalesMonthAndYear(e.target.value)}
          />
            </div>
          </div>
        </div>
      </div>
      <div className='w-100 d-flex justify-content-center'>
        <div className="d-flex gap-3 savesbtn align-items-center w-50">
          <button type="button" className="btn btn-success" onClick={handleSave}>
            Save
          </button>
          <button className='text-dark'>
            <Link to={"/brand"} className='text-dark'>Cancel</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Editbrand;