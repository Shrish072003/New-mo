import React, { useState, useEffect } from 'react';
import { Table, Button, Select, message } from 'antd';
import axios from 'axios';

const { Option } = Select;

const Analytics = () => {
  const [cars, setCars] = useState([]);

  const getAllCars = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/extra/get-all-cars-for-popularity`);
      if (response.data.success) {
        const carsWithSelection = response.data.data.map(car => ({
          ...car,
          selection: car.popularity !== undefined ? car.popularity : null, // Null for unranked
        }));
        setCars(carsWithSelection);
      }
    } catch (error) {
      console.error('Failed to fetch cars:', error);
      message.error('Failed to load cars from the server.');
    }
  };

  useEffect(() => {
    getAllCars();
  }, []);

  const handleSelectionChange = (value, carId) => {
    setCars(currentCars => currentCars.map(car => {
      if (car._id === carId) {
        return { ...car, selection: value !== 'null' ? parseInt(value, 10) : null };
      }
      return car;
    }));
  };

  const handleSave = async(carId, selection) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API}/api/extra/update-popularity/${carId}`, {
        
        popularity: selection,
      });
      console.log(response);
      if (response.data.success) {
        message.success('Popularity updated successfully');
        getAllCars(); // Refresh list to reflect changes
      } else {
        message.error('Failed to update popularity');
      }
    } catch (error) {
      console.error('Error updating popularity:', error);
      message.error('Error during popularity update');
      getAllCars(); // Refresh in case of error
    }
  };

  const sortCarsBySelection = () => {
    setCars(currentCars => [...currentCars].sort((a, b) => {
      
      if (a.selection === null && b.selection === null) return 0;
      if (a.selection === null) return 1;
      if (b.selection === null) return -1;
      return a.selection - b.selection;
    }));
  };

  const columns = [
    {
      title: 'Brand',
      dataIndex: 'brand',
      render: brand => brand.name,
    },
    {
      title: 'Name',
      dataIndex: 'carname',
    },
    {
      title: 'Popularity Index',
      dataIndex: 'selection',
      render: selection => selection === null ? 'Unranked' : selection,
    },
    {
      title: 'Selection',
      key: 'selection',
      render: record => (
        <Select value={record.selection === null ? 'null' : record.selection.toString()} style={{ width: 120 }} onChange={(value) => handleSelectionChange(value, record._id)}>
          <Option key="null" value="null">Unranked</Option>
          {Array.from({ length: 10 }, (_, i) => (
            <Option key={i + 1} value={(i + 1).toString()}>{i + 1}</Option>
          ))}
        </Select>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: record => (
        <Button type="primary" onClick={() => handleSave(record._id, record.selection)}>Save</Button>
      ),
    },
  ];

  return (
    <section className="main-container-full">
      <Button onClick={sortCarsBySelection} type="primary" style={{ marginBottom: 20 }}>Sort by Popularity</Button>
      <Table columns={columns} dataSource={cars} rowKey="_id" />
    </section>
  );
};

export default Analytics;
