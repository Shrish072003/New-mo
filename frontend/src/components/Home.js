import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from 'react-icons/bs';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function Home() {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const [adata, setAdata] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.REACT_APP_API}/api/data-count`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API Response:', data);
        setAdata(data);
      } catch (error) {
        console.error('API request error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    getRegusers();
  }, []);
  
  const getRegusers = async () => {
    setIsLoading(true);
    let url = `${process.env.REACT_APP_API}/enduser`;
    try {
      let result = await fetch(url);
      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }
      let data = await result.json();
      setAllUsers([...data].reverse().slice(0, 5));
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <main className='main-container'>
      <div className='back_image'>
        <div className='main-title'>
          <h2>
            ADMIN <span>DASHBOARD</span>
          </h2>
        </div>

        <div className='main-cards'>
          <Link to={"/brand"}>
            <div className='card-dashboard cardf'>
              <div className='card-inner'>
                <h3>BRANDS</h3>
                <BsFillArchiveFill className='card_icon' />
              </div>
              <h1>{adata.data ? adata.data[0].brand : (isLoading ? 'Loading...' : 'Loading...')}</h1>
            </div>
          </Link>
          <Link to={"/product"}>
            <div className='card-dashboard cardg'>
              <div className='card-inner'>
                <h3>PRODUCTS</h3>
                <BsFillGrid3X3GapFill className='card_icon' />
              </div>
              <h1>{adata.data ? adata.data[0].car : (isLoading ? 'Loading...' : 'Loading...')}</h1>
            </div>
          </Link>
          <Link to={"/users"}>
            <div className='card-dashboard cardh'>
              <div className='card-inner'>
                <h3>CUSTOMERS</h3>
                <BsPeopleFill className='card_icon' />
              </div>
              <h1>{adata.data ? adata.data[0].user : (isLoading ? 'Loading...' : 'Loading...')}</h1>
            </div>
          </Link>
          <div className='card-dashboard cardk'>
            <div className='card-inner'>
              <h3>VARIANTS</h3>
              <BsFillBellFill className='card_icon' />
            </div>
            <h1>{adata.data ? adata.data[0].varient : (isLoading ? 'Loading...' : 'Loading...')}</h1>
          </div>
        </div>

        <div className='charts'>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='pv' fill='#8884d8' />
              <Bar dataKey='uv' fill='#82ca9d' />
            </BarChart>
          </ResponsiveContainer>

          <div style={{ width: '100%', height: 300 }}>
            <table className="table">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Sr no</th>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Email</th>
                  <th scope="col">Pincode</th>
                  <th scope="col">Gender</th>
                </tr>
              </thead>

              <tbody className='table_homepage'>
            {allUsers.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{`${user.fname} ${user.lname}`}</td>
                <td>+91 {user.mobile}</td>
                <td>{user.email}</td>
                <td>{user.pin}</td>
                <td>{user.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
