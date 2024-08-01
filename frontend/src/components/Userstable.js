import React, { useState, useEffect, useRef } from 'react';
import { MdFileDownload } from "react-icons/md";
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { FaChevronDown } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { CSVLink } from 'react-csv';
import BigImage from './Onclickimage';


const Usertable = () => {
  const [allUsers, setAllUsers] = useState([]); 
  const [rusers, setRusers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(50);
  const [dateRange, setDateRange] = useState([{ startDate: new Date(), endDate: new Date(), key: 'selection' }]);
  const [filtered, setFiltered] = useState(false);
  const csvLinkRef = useRef();
  const [csvData, setCsvData] = useState([]);
  const [isAdvancedSearchVisible, setAdvancedSearchVisible] = useState(false);


  useEffect(() => {
    getRegusers();
  }, []);

  useEffect(() => {
    if (filtered) {
      handleDateFilter();
    }
  }, [dateRange, filtered]);


  const getRegusers = async () => {
    let url = `${process.env.REACT_APP_API}/enduser`;
    try {
      let result = await fetch(url);
      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }
      let data = await result.json();
      setAllUsers([...data]);
      setRusers([...data]);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  const getFilteredUsersByDate = async () => {
    const { startDate, endDate } = dateRange[0];
    if (startDate && endDate) {
      const formattedStartDate = startDate.toISOString().split('T')[0];
      const formattedEndDate = endDate.toISOString().split('T')[0];
      let url = `${process.env.REACT_APP_API}/api/enduser/filterByDate?startDate=${formattedStartDate}&endDate=${formattedEndDate}`;
      try {
        let result = await fetch(url);
        if (!result.ok) {
          throw new Error(`HTTP error! status: ${result.status}`);
        }
        const data = await result.json();
        setRusers(data.reverse());
      } catch (error) {
        console.error('Error fetching filtered users:', error);
      }
    }
  };
  const handleDateFilter = () => {
    const { startDate, endDate } = dateRange[0];
    const filteredUsers = allUsers.filter(user => {
      const userDate = new Date(user.createdAt);
      return userDate >= startDate && userDate <= endDate;
    });
    setRusers(filteredUsers);

    // shirish isko mat chhedna
    const formattedCsvData = filteredUsers.map(user => ({
      Name: `${user.fname} ${user.lname}`,
      Mobile: user.mobile,
      Email: user.email,
      Pin: user.pin,
      DOB: user.DOB,
      Gender: user.gender,
      Profession: user.profession,
      Where: user.wheredidyouhearus
    }));
    setCsvData(formattedCsvData);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = rusers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const csvDownloadEndUser = async () => {
    const result = await fetch(`${process.env.REACT_APP_API}/api/exportUser`);
    const csvData = await result.text();
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'users.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };
  const csvDownloadDateWise = () => {
    const { startDate, endDate } = dateRange[0];
    if (!startDate || !endDate) {
      alert('Please select both start and end dates');
      return;
    }

    const filteredData = rusers.filter(user => {
      const userDate = new Date(user.createdAt); // samajh na aye to chhod dena
      return userDate >= startDate && userDate <= endDate;
    });

    const csvData = filteredData.map(user => ({
      // Baba ji ka ghanta
      Name: `${user.fname} ${user.lname}`,
      Mobile: user.mobile,
      Email: user.email,
      Pin: user.pin,
      DOB: user.DOB,
      Gender: user.gender,
      Proffession: user.profession,
      Where: user.wheredidyouhearus
      // ghanta hi hai
    }));

    if (csvLinkRef.current && csvData.length > 0) {
      csvLinkRef.current.link.click(); // yhi download karta hai
    } else {
      alert('No data available for the selected date range');
    }
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`${process.env.REACT_APP_API}/search/${key}`);
      result = await result.json();
      if (result) {
        setRusers(result);
      }
    } else {
      getRegusers();
    }
  };

  const removeTextBeforeComma = (dateString) => {
    const parts = dateString.split(',');
    return parts.length > 1 ? parts[1].trim() : dateString;
  };

  const removeTextAfterComma = (dateString) => {
    const parts = dateString.split(',');
    return parts.length > 0 ? parts[0].trim() : dateString;
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const totalPages = Math.ceil(rusers.length / usersPerPage);

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };
  const handleAdvanceSearchClick = () => {
    setAdvancedSearchVisible(!isAdvancedSearchVisible);
  };

  return (
    <section className='main-container-full'>
      <div className='d-flex justify-content-between mb-3 p-3'>
        <div className="h2">Users</div>
        <div className='d-flex justify-content-center align-items-center gap-3'>
          <div className="active-pink-3 active-pink-4">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
              onChange={searchHandle}
            />
          </div>
          <a
            className="btn btn-lg active bg-danger-new text-white add-brand"
            role="button"
            aria-pressed={isAdvancedSearchVisible}
        onClick={handleAdvanceSearchClick}
          >Filter
            <FaChevronDown className={`icon-expo-new dghdghg ${isAdvancedSearchVisible ? '-mfjgk rotated' : ''}`}/>
          </a>
          <a
            className="btn btn-lg active bg-danger-new text-white add-brand"
            role="button"
            aria-pressed="true"
            onClick={csvDownloadEndUser}
          >
            <MdFileDownload className='icon-expo '/>
            Export
          </a>
        </div>
      </div>
      {isAdvancedSearchVisible && (
      <div className='d-flex justify-content-center align-items-center gap-3 mb-3 flex-column pb-5'>
        <DateRangePicker
          ranges={dateRange}
          onChange={(item) => setDateRange([item.selection])}
        />
        <div className='d-flex gap-3 w-25'>
        <button className="btn btn-lg active bg-danger-new text-white add-brand w-50" onClick={handleDateFilter}>
        <FaFilter className='icon-expo-new' />
          Filter
        </button>

        <CSVLink
          data={csvData}
          filename={`users-${new Date().toLocaleDateString()}.csv`}
          className="btn btn-lg active bg-danger-new text-white add-brand w-50"
        >
          <MdFileDownload className='icon-expo'/>
          Export Date-wise
        </CSVLink></div>
      </div>
      )}

<div>
      <table className="table">
        <thead className="table-dark">
          <tr>
          <th scope="col">Sr no</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope="col">Pincode</th>
            {/* <th scope="col">City</th> */}
            <th scope="col">DOB</th>
            <th scope="col">Gender</th>
            <th scope="col">Profession</th>
            <th scope="col">Heard Us From</th>
            <th scope="col">Timestamp</th>
          </tr>
        </thead>

        {currentUsers.length > 0 ? (
          currentUsers.map((item, index) => (
            <tbody key={index}>
              <tr>
                <th scope="row">{index + 1 + indexOfFirstUser}</th>
                <td>
                  <div className='d-flex'>
                    <BigImage
                      className='brand-image'
                      src={`${process.env.REACT_APP_API}/userImages/${item.image}`}
                      alt={`${item.fname} ${item.lname}`}
                      crossorigin="anonymous"
                    />
                    <div className='image-left'>
                      {item.fname} {item.lname}
                      <br></br>
                      <span className='textgray'>{item.email}</span>
                    </div>
                  </div>
                </td>
                <td><div className='mt-1rem'>+91 {item.mobile}</div></td>
                <td><div className='mt-1rem'>{item.email}</div></td>
                <td><div className='mt-1rem textgray'>{item.pin}</div></td>
                {/* <td><div className='mt-1rem textgray'>{item.city}</div></td> */}
                <td><div className='mt-1rem textgray'>{item.DOB}</div></td>
                <td><div className='mt-1rem'>{item.gender}</div></td>
                <td><div className='mt-1rem'>{item.profession}</div></td>
                <td><div className='mt-1rem'>{item.wheredidyouhearus}</div></td>
                <td>{removeTextAfterComma(new Date(item.createdAt).toLocaleString())}<br></br>
                  <span className='textgray'>
                    {removeTextBeforeComma(new Date(item.createdAt).toLocaleString())}
                  </span>
                </td>
              </tr>
            </tbody>
            
          )) 
        ) : null}
        </table>
     
        {currentUsers.length > 0 ? null : (
    <div className="d-flex align-items-center justify-content-center main-container-full"><div className='loader'></div></div>
  )}
</div>

      <div className='pagination-numbers'>
        <ion-icon
          name="chevron-back-outline"
          onClick={() => {
            if (currentPage > 1) {
              paginate(currentPage - 1);
            }
          }}
        ></ion-icon>

        {renderPageNumbers().map((number, index) => (
          <div
            key={index}
            onClick={() => (number !== '...' ? paginate(number) : null)}
            className={currentPage === number ? 'active-imp' : ''}
          >
            {number}
          </div>
        ))}

        <ion-icon
          name="chevron-forward-outline"
          onClick={() => {
            if (currentPage < renderPageNumbers()[renderPageNumbers().length - 2]) {
              paginate(currentPage + 1);
            }
          }}
        ></ion-icon>
      </div>
    </section>
  );
};

export default Usertable;
