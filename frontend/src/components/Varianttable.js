import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdCloudUpload } from "react-icons/md";
import useSWR, { mutate } from 'swr';

// Helper function for data fetching
const fetcher = url => fetch(url).then(res => res.json());

const Variant = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [file, setFile] = useState(null);
  const [showSendButton, setShowSendButton] = useState(false);
  const itemsPerPage = 10;

  // Fetch variants using SWR
  const { data, error } = useSWR(`${process.env.REACT_APP_API}/api/get-all-varient`, fetcher, {
    revalidateOnFocus: false
  });

  if (error) {
    toast.error('Failed to fetch variants');
  }

  // Reverse and process the data as needed
  const variants = data ? data.data.reverse() : [];
  const totalPages = Math.ceil(variants.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = variants.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return; // Prevents out-of-range navigation
    setCurrentPage(page);
  };
  
  const deleteVariant = async (id) => {
    const isConfirmed = window.confirm(`Do you want to delete this variant?`);
    if (!isConfirmed) return;

    try {
      const result = await fetch(`${process.env.REACT_APP_API}/api/delete/${id}`, { method: 'DELETE' });
      if (result.ok) {
        toast.success('Variant has been deleted');
        mutate(`${process.env.REACT_APP_API}/api/get-all-varient`); // Re-fetch data
      } else {
        throw new Error('Failed to delete variant');
      }
    } catch (error) {
      toast.error('Error deleting variant');
    }
  };

  //DELETE ALL VARIENT
  const deleteAllVariant = async () => {
    const isConfirmed = window.confirm(`Do you want to delete all variants?`);
    if (!isConfirmed) return;

    try {
      const result = await fetch(`${process.env.REACT_APP_API}/api/delete-all-vatient`, { method: 'DELETE' });
      if (result.ok) {
        toast.success('All variants have been deleted');
        mutate(`${process.env.REACT_APP_API}/api/get-all-varient`); // Re-fetch data
      } else {
        throw new Error('Failed to delete all variants');
      }
    } catch (error) {
      toast.error('Error deleting all variants');
    }
  };

  const handleFileChange = event => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const fileType = uploadedFile.name.split('.').pop().toLowerCase();
      if (fileType === 'csv') {
        setFile(uploadedFile);
        setShowSendButton(true);
      } else {
        toast.error("Please upload a .csv file.");
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
      let result = await fetch(`${process.env.REACT_APP_API}/api/v1/import-varient-csv`, {
        method: "POST",
        body: formData,
      });
      if (result.ok) {
        toast.success("File uploaded successfully!", {
          onClose: () => window.location.reload(),
          autoClose: 4000,
        });
      } else {
        toast.error("Failed to upload file. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <section className='main-container-full'>
      <div className='d-flex justify-content-between mb-3 p-3'>
        <div className="h2">Variant</div>
        <div>
          <Link
            to={"/addvariant"}
            className="btn btn-lg active bg-danger-new text-white add-brand"
            role="button"
            aria-pressed="true"
          >
            Add Variant
          </Link>
        </div>
        {/* Delete all variant */}
        <div>
          <div
            onClick={deleteAllVariant}
            className="btn btn-lg active bg-danger-new text-white add-brand"
            role="button"
            aria-pressed="true"
          >
            Delete All Variants
          </div>
        </div>
      </div>

      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">Sr no</th>
            <th scope="col">Brand Name</th>
            <th scope="col">Car Name</th>
            <th scope="col">Variant Name</th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
            <th scope="col">Variant Id</th>
            <th scope="col">Active</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <th scope="row">{indexOfFirstItem + index + 1}</th>
              <td>{item.brand_id.name}</td>
              <td>{item.product_id.carname}</td>
              <td>{item.varientName}</td>
              <td>{new Date(item.createdAt).toLocaleString()}</td>
              <td>{new Date(item.updatedAt).toLocaleString()}</td>
              <td onClick={() => navigator.clipboard.writeText(item._id).then(() => toast.success(`Copied Variant Id: ${item._id}`))} style={{ cursor: 'pointer' }} title="Click to copy">{item._id}</td>
              <td>
                {item.active != null && (item.active === 'true' ? <div className='active-btn'>Active</div> : <div className='disable-btn'>Disabled</div>)}
              </td>
              <td>
                <div className="d-flex gap-2 align-items-center justify-content-center" style={{ height: '100%' }}>
                  <Link to={`/editvariant/${item._id}`} style={{ textDecoration: 'none' }}>
                    <div className='editbtn'>
                      <ion-icon name="pencil-outline"></ion-icon>
                    </div>
                  </Link>
                  <div className="trashbtn" onClick={() => deleteVariant(item._id)}>
                    <ion-icon name="trash-outline"></ion-icon>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
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

  {/* Show first page if range does not include it */}
  {currentPage > 3 && totalPages > 5 && (
    <>
      <div onClick={() => handlePageChange(1)}>1</div>
      {currentPage > 4 && <span>...</span>}
    </>
  )}

  {Array.from({ length: totalPages }).map((item, index) => {
    const pageNumber = index + 1;
    // Determine the range of page numbers to display
    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(startPage + 4, totalPages);

    return (
      pageNumber >= startPage &&
      pageNumber <= endPage && (
        <div
          key={index}
          onClick={() => handlePageChange(pageNumber)}
          className={currentPage === pageNumber ? 'active-imp' : ''}
        >
          {pageNumber}
        </div>
      )
    );
  })}

  {/* Show last page if range does not include it */}
  {currentPage < totalPages - 2 && totalPages > 5 && (
    <>
      {currentPage < totalPages - 3 && <span>...</span>}
      <div onClick={() => handlePageChange(totalPages)}>{totalPages}</div>
    </>
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
          <input className="input-hidden" type="file" onChange={handleFileChange} />
        </div>
        {showSendButton && (
          <div className='savebuton' style={{ right: file ? '90px' : '0' }} onClick={addCsv}>
            Save
          </div>
        )}
      </div>

      <ToastContainer />
    </section>
  );
};

export default Variant;
