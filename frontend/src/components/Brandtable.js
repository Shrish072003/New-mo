import React, { useState, useEffect } from 'react';
import Popup from './Addbrand';
import BigImage from './Onclickimage';
import { Link } from 'react-router-dom';
import { MdCloudUpload } from "react-icons/md";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Regtable = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [brands, setBrands] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    getBrands();
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(brands.length / itemsPerPage));
  }, [brands]);

  const getBrands = async () => {
    let result = await fetch(`${process.env.REACT_APP_API}/brands`);
    result = await result.json();
    result = result.reverse();
    setBrands(result);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = brands.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const deleteBrand = async (id) => {
    let result = await fetch(`${process.env.REACT_APP_API}/brands/${id}`, {
      method: 'DELETE',
    });
    result = await result.json();
    if (result) {
      alert('Brand has been deleted');
      getBrands();
    }
  };










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
    formData.append("file", file);
    try {
      let result = await fetch(`${process.env.REACT_APP_API}/api/v1/import-brand-csv`, {
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



  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`Copied Brand Id: ${text}`); 
    } catch (err) {
      toast.error('Failed to copy:', err);
    }
  };


  return (
    <section className="main-container-full">
      <Popup showPopup={showPopup} togglePopup={togglePopup} />
      <div className="d-flex justify-content-between mb-3 p-3">
        <div className="h2"> Brands</div>
        <div>
          <a
            className="btn btn-lg active add-brand"
            role="button"
            aria-pressed="true"
            onClick={togglePopup}
          >
            Add Brand
          </a>
        </div>
      </div>

      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">Sr no</th>
            <th scope="col">Brand logo</th>
            <th scope="col">Sales Ranking</th>
            <th scope="col">Year</th>
            <th scope="col">Name</th>
            <th scope="col">Selling since in India</th>
            <th scope="col">Rating</th>
            <th scope="col">Created At</th>
            <th scope="col">Edited At</th>
            <th scope="col">Brand Id</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        {currentItems.map((item, index) => (
          <tbody key={index}>
            <tr>
              <th scope="row">{indexOfFirstItem + index + 1}</th>
              <td>
                <BigImage
                  className="brand-image"
                  src={`${process.env.REACT_APP_API}/brandImages/${item.image}`}
                  alt={item.name}
                  crossorigin="anonymous"
                />
              </td>
              <td>{item.salesRanking}</td>
              <td>{item.salesMonthAndYear}</td>
              <td>{item.name}</td>
              <td>{item.selling}</td>
              <td>{item.rating}</td>
              <td>{new Date(item.createdAt).toLocaleString()}</td>
              <td>{new Date(item.updatedAt).toLocaleString()}</td>
              <td onClick={() => copyToClipboard(item._id)} style={{ cursor: 'pointer' }} title="Click to copy">{item._id}</td>
              <td>
                <div className="d-flex gap-2 align-items-center justify-content-center" style={{ height: '100%' }}>
                  <Link to={`/editbrand/${item._id}`} style={{ textDecoration: 'none' }}>
                    <div className='editbtn'>
                      <ion-icon name="pencil-outline"></ion-icon>
                    </div>
                  </Link>
                  <div className="trashbtn">
                    <ion-icon name="trash-outline" onClick={() => deleteBrand(item._id)}></ion-icon>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      <div className='pagination-numbers'>
        <ion-icon
          name="chevron-back-outline"
          onClick={() => {
            if (currentPage > 1) {
              handlePageChange(currentPage - 1);
            }
          }}
        ></ion-icon>
        {Array.from({ length: totalPages }).map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active-imp' : ''}
            >
              {index + 1}
            </div>
          )
        )}
        <ion-icon
          name="chevron-forward-outline"
          onClick={() => {
            if (currentPage < totalPages) {
              handlePageChange(currentPage + 1);
            }
          }}
        ></ion-icon>
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
      )}        <ToastContainer />

    </section>

  );
};

export default Regtable;
