import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Popup = ({ showPopup, togglePopup }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [name, setName] = useState("");
  const [selling, setSelling] = useState("");
  const [rating, setRating] = useState("");
  const [iButtonData, setiButtonData] = useState("");
  const [doYouKnow, setdoYouKnow] = useState("");
  const [salesRanking, setsalesRanking] = useState("");
  const [salesMonthAndYear, setsalesMonthAndYear] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessagePopUp, setErrorMessagePopUp] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const ext = file.name.split(".").pop().toLowerCase();

    if (["gif", "png", "jpg", "jpeg"].indexOf(ext) === -1) {
      setErrorMessage("Not an Image...");
    } else {
      setErrorMessage("");
      setIsUploading(true);

      setTimeout(() => {
        setIsUploaded(true);
        setUploadedFile(file); 
      }, 3000);
    }
  };

  const handleFileRemove = () => {
    setIsUploaded(false);
    setUploadedFile(null);
    setIsUploading(false);
  };

  const addBrand = async () => {
    console.warn(uploadedFile, name, selling, rating);
    let formData = new FormData();
    formData.append("image", uploadedFile);
    formData.append("name", name);
    formData.append("selling", selling);
    formData.append("rating", rating);
    formData.append("iButtonData", iButtonData);
    formData.append("doYouKnow", doYouKnow);
    formData.append("salesRanking", salesRanking);
    formData.append("salesMonthAndYear", salesMonthAndYear);

    try {
      let result = await fetch(`${process.env.REACT_APP_API}/api/addbrand`, {
        method: "POST",
        body: formData,
      });

      if (result.status === 200) {
        toast.success("Brand saved successfully!");
        window.location.reload(); // Reload the page on success
      } else if (result.status === 409) {
        toast.warn("Brand already exists in the database.");
      } else {
        toast.error("An error occurred while saving the brand.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessagePopUp("An error occurred while saving the brand.");
      toast.error("An error occurred while saving the brand.");
      window.location.reload(); // Reload the page on failure
    }
  };

  return showPopup ? (
    <div className="popup">
      <div className="popup-content">
        <main className="main_full maingiufull">
          <div className="container">
            <div className="panel">
              <div
                className={`button_outer ${
                  isUploading ? "file_uploading" : ""
                } ${isUploaded ? "file_uploaded" : ""}`}
              >
                <div className="btn_upload">
                  <input
                    type="file"
                    id="upload_file"
                    onChange={handleFileChange}
                  />
                  Upload Image
                </div>
                <div className="processing_bar"></div>
                <div className="success_box"></div>
              </div>
            </div>
            <div className="error_msg">{errorMessage}</div>
            <div className="uploaded_file_view" id="uploaded_view">
              {isUploaded && uploadedFile && (
                <img src={URL.createObjectURL(uploadedFile)} alt="Uploaded" />
              )}
              {isUploaded && (
                <span
                  className="file_remove text-dark"
                  onClick={handleFileRemove}
                >
                  X
                </span>
              )}
            </div>
          </div>
          <label htmlFor="brandName">Brand Name</label>
          <input
            type="text"
            className="form-control mb-3"
            id="brandName"
            placeholder="Brand name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="sellingSince">Selling Since</label>
          <input
            type="text"
            className="form-control mb-3"
            id="sellingSince"
            placeholder="Selling since"
            value={selling}
            onChange={(e) => setSelling(e.target.value)}
          />
          <label htmlFor="rating">Rating</label>
          <input
            type="text"
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
          <div className="d-flex gap-3 savesbtn">
            <button type="button" className="btn btn-success" onClick={addBrand}>
              Save
            </button>
            <button onClick={togglePopup}>Cancel</button>
          </div>
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          {errorMessagePopUp && (
            <div className="error-message">{errorMessagePopUp}</div>
          )}
        </main>
      </div>
      <ToastContainer />
    </div>
  ) : null;
};

export default Popup;
