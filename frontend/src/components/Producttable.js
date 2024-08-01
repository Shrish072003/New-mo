import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BigImage from './Onclickimage';
import { IoCaretDown } from "react-icons/io5";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdEdit } from "react-icons/md";
import { FcRules } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { MdCloudUpload } from "react-icons/md";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [showUpcoming, setShowUpcoming] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const productsPerPage = 50;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const parseList = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const items = doc.querySelectorAll('li');
    return Array.from(items).map(item => item.textContent).join(', ');
  };

  const calculateSerialNumber = (index) => {
    return (currentPage - 1) * productsPerPage + index + 1;
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      let productsUrl = showUpcoming
        ? `${process.env.REACT_APP_API}/api/cars/upcoming`
        : `${process.env.REACT_APP_API}/api/allproducts/mo`;

      if (selectedBrand && !showUpcoming) {
        productsUrl = `${process.env.REACT_APP_API}/api/cars/brand/${selectedBrand}`;
      }

      const response = await fetch(productsUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API}/brands`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const brandsData = await response.json();
        setBrands(brandsData);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    fetchBrands();
    fetchData();
  }, [selectedBrand, showUpcoming]);
  //CSV
  const [file, setFile] = useState(null);
  const [showSendButton, setShowSendButton] = useState(false);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const fileType = uploadedFile.name.split('.').pop().toLowerCase();
      if (fileType === 'csv') {
        setFile(uploadedFile);
        setShowSendButton(true);
      } else {
        // Show error toast for invalid file type
        toast.error("Please upload a .csv file.");
        // Reset file input field
        event.target.value = null;
        setFile(null);
        setShowSendButton(false);
      }
    }
  };



  const addCsv = async () => {
    let formData = new FormData();
    formData.append("csvFile", file);
    try {
      let result = await fetch(`${process.env.REACT_APP_API}/api/v1/upload-product-csv`, {
        method: "POST",
        body: formData,
      });

      if (result.ok) {
        toast.success("File uploaded successfully!", {
          autoClose: 4000, // Close the toast after 3 seconds
          onClose: () => {
            window.location.reload();
          }
        });
      } else {
        // Show error toast
        toast.error("Failed to upload file. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      // Show error toast
      toast.error("An error occurred. Please try again later.");
    }
  };


  //CSV-CLOSED

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setCurrentPage(1);
  };

  const handleUpcomingChange = () => {
    setShowUpcoming(!showUpcoming);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const deleteProduct = async (productId) => {
    try {
      let result = await fetch(`${process.env.REACT_APP_API}/api/delete-product/${productId}`, {
        method: 'DELETE',
      });

      if (!result.ok) {
        throw new Error('Failed to delete product');
      }

      const data = await result.json();

      if (data) {
        toast.success('Product has been deleted', { position: toast.POSITION.TOP_RIGHT });
        fetchData();
      }

    } catch (error) {
      console.error('Error deleting product:', error.message);
      toast.error('Failed to delete product', { position: toast.POSITION.TOP_RIGHT });
    }
  };

  if (loading) {
    return <div className="d-flex align-items-center justify-content-center main-container-full"><div className='loader'></div></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }



  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`Copied Product Id: ${text}`);
    } catch (err) {
      toast.error('Failed to copy:', err);
    }
  };


  return (
    <section className='main-container-full'>
      <div className='d-flex justify-content-between mb-3 p-3'>
        <div className='d-flex align-items-center justify-content-center'>
          <select
            value={selectedBrand}
            onChange={handleBrandChange}
            className="form-select"
            style={{ width: "250px" }}
          >
            <option value="">All Brands</option>
            {brands.map(brand => (
              <option key={brand._id} value={brand._id}>{brand.name}</option>
            ))}
          </select>
          <IoCaretDown className='drop-icon' />

        </div>
        <div className='d-flex gap-3' style={{ height: '43px' }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px 0' }}>
            <div className="form-check form-switch">

              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                checked={showUpcoming}
                onChange={handleUpcomingChange}

              />
            </div>
            <label style={{
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '16px',
              marginLeft: '10px'
            }}>
              Show Upcoming Cars
            </label>
          </div>
          <Link
            to={"/addproduct"}
            className="btn btn-lg active bg-danger-new text-white add-brand"
            role="button"
            aria-pressed="true"
          >
            Add Product
          </Link>
        </div>
      </div>

      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">Sr no</th>
            <th scope="col">Car Name</th>
            <th scope="col">Brand</th>
            <th scope="col">Selling Since</th>
            <th scope="col">Mo Rating</th>
            <th scope="col">Seater Info</th>
            <th scope="col">Fuel Type</th>
            <th scope="col">Transmission Type</th>
            <th scope="col">NCAP</th>
            <th scope="col">Product Id</th>
            <th scope="col">Active</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage).map((product, index) => (
            <tr key={product._id}>
              <th scope="row">{calculateSerialNumber(index)}</th>

              <td>{product.carname}</td>
              <td>{product.brand.name}</td>
              <td>{product.sellingsince}</td>
              <td>{product.movrating}</td>
              <td>{parseList(product.seater)}</td>
              <td>{parseList(product.fueltype)}</td>
              <td>{parseList(product.transmissiontype)}</td>
              <td>{product.NCAP}</td>
              <td onClick={() => copyToClipboard(product._id)} style={{ cursor: 'pointer' }} title="Click to copy">{product._id}</td>
              <td>
  <div className='d-flex justify-content-center'>
    {product.active != null && (
      product.active === "true" ? <div className='fhfgfg'><FcOk /></div> : <div className='disable-btn'><RxCross2 /></div>
    )}
  </div>
</td>

              <td>
                <div className="d-flex gap-2 align-items-center justify-content-center" style={{ height: '100%' }}>
                  <Link to={`/editproduct/${product._id}`} style={{ textDecoration: 'none' }}>
                    <div className='editbtn'>
                      <MdEdit />
                    </div>
                  </Link>
                  <Link to={`/viewproduct/${product._id}`} style={{ textDecoration: 'none' }}>

                  </Link>

                  <div className="trashbtn">
                    <ion-icon name="trash-outline" onClick={() => deleteProduct(product._id)}></ion-icon>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='pagination-numbers'>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <div
            key={page}
            onClick={() => handlePageChange(page)}
            className={page === currentPage ? 'active-imp' : ''}
          >
            {page}
          </div>
        ))}
      </div>
      <div className="App">
        <div className="upload-container">
          <MdCloudUpload className='MdCloudUpload' />
          <input class="input-hidden" type="file" onChange={handleFileChange} />

        </div>

      </div>
      {showSendButton && (
        <div className='savebuton' style={{ right: file ? '90px' : '0' }} onClick={addCsv}>
          Save
        </div>
      )}
      <ToastContainer />

    </section>
  );
};

export default ProductTable;
