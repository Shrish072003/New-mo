import React, { useState, useEffect, useCallback } from 'react';
import { Table, Button, message } from 'antd';
import { Link } from "react-router-dom";
import axios from 'axios';
import { MdCloudUpload } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Servicecentretable = () => {
  const [file, setFile] = useState(null);
  const [showSendButton, setShowSendButton] = useState(false);
  const [list, setList] = useState([]);

  const handleFileChange = useCallback(event => {
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
  }, []);

  const deleteServiceCentre = async (serviceCentreName) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_API}/api/v1/delete-servicecentre`, { data: { serviceCentreName } });
      if (response.status === 200) {
        toast.success(response.data.message);
        getAllList(); // Refresh the list after deletion
      } else {
        toast.error("Failed to delete service centre.");
      }
    } catch (error) {
      console.error('Delete operation failed:', error);
      message.error('Failed to delete service centre from the server.');
    }
  };
  const addCsv = async () => {
    let formData = new FormData();
    formData.append("csvFile", file);
    try {
      let result = await fetch(`${process.env.REACT_APP_API}/api/v1/upload-servicecentre-csv`, {
        method: "POST",
        body: formData,
      });
  
      if (result.ok) {
        toast.success("File uploaded successfully!", {
          autoClose: 4000,
          onClose: () => {
            window.location.reload();
          }
        });
      } else {
        toast.error("Failed to upload file. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };



  const getAllList = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/get-servicecentre-data-for-admin-panal`);
      setList(response.data.data);
    } catch (error) {
      console.error('Failed to fetch service centres:', error);
      message.error('Failed to load service centres from the server.');
    }
  };

  useEffect(() => {
    getAllList();
  }, []);

  const columns = [
    { title: 'Brand', dataIndex: 'brand', render: brand => brand.name },
    { title: 'Name', dataIndex: 'serviceCentreName' },
    { title: 'City', dataIndex: 'city' },
    { title: 'State', dataIndex: 'state' },
    { title: 'Contact', dataIndex: 'phone' },
    { title: 'Address', dataIndex: 'address' },
    { title: 'Website', dataIndex: 'website' },
    { title: 'Email', dataIndex: 'email' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button type="danger" className="btn btn-lg active bg-danger-new text-white add-brand" onClick={() => deleteServiceCentre(record.serviceCentreName)}>
          Delete
        </Button>
      )
    }
  ];

  return (
    <>
      <section className="main-container-full">
        <div className="h2"> Service Centres</div>
        <div className='d-flex justify-content-between mb-3 p-3'>
          <div>
            <Link to={"/dealership"} className="btn btn-lg active bg-danger-new text-white add-brand" role="button" aria-pressed="true">
              Dealers List
            </Link>
          </div>
        </div>
        <Table columns={columns} dataSource={list} rowKey="_id" />
      </section>
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
    </>
  )
}

export default Servicecentretable;
