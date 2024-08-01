import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Select, message } from 'antd';
import { Link } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;
const { Option } = Select;

const RtodataTable = () => {
    const [list, setList] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedFuel, setSelectedFuel] = useState(null);

    const getAllList = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/all-data-chart`);
            setList(response.data.data);
            setFilteredData(response.data.data); // Initialize filtered data
        } catch (error) {
            console.error('Failed to fetch data:', error);
            message.error('Failed to load data from the server.');
        }
    };

    useEffect(() => {
        getAllList();
    }, []);

    useEffect(() => {
        let data = list;
        if (selectedState) {
            data = data.filter(item => item.state === selectedState);
        }
        if (selectedFuel) {
            data = data.filter(item => item.fuelType === selectedFuel);
        }
        setFilteredData(data);
    }, [selectedState, selectedFuel, list]);

    const handleStateChange = value => {
        setSelectedState(value);
    };

    const handleFuelChange = value => {
        setSelectedFuel(value);
    };

    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Are you sure delete this RTO data?',
            icon: <ExclamationCircleOutlined />,
            content: 'This action cannot be undone.',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteRTO(id);
            }
        });
    };

    const deleteRTO = async (id) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_API}/api/v1/delete-rto-data/${id}`);
            if (response.status === 200) {
                toast.success(response.data.message);
                getAllList(); // Refresh the list after deletion
            } else {
                toast.error("Failed to delete RTO data.");
            }
        } catch (error) {
            console.error('Delete operation failed:', error);
            message.error('Failed to delete RTO data from the server.');
        }
    };

    const columns = [
        { title: 'State', dataIndex: 'state' },
        { title: 'Fuel', dataIndex: 'fuelType' },
        { title: 'Starting-Price', dataIndex: 'startPrice' },
        { title: 'Ending-Price', dataIndex: 'endPrice' },
        { title: 'RTO', dataIndex: 'rtoPercentage' },
        { title: 'Amount', dataIndex: 'amount' },
        { title: 'Insurance%', dataIndex: 'insurancePercentage' },
        { title: 'Hypothecation', dataIndex: 'hypethecationCharges' },
        { title: 'Fastag', dataIndex: 'fastag' },
        { title: 'Others', dataIndex: 'others' },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Button type="danger" onClick={() => showDeleteConfirm(record._id)}>
                    Delete
                </Button>
            )
        }
    ];

    return (
        <>
            <section className="main-container-full">
                <div className="h2">RTO DATA</div>
                <div className='d-flex justify-content-between mb-3 p-3'>
                    <div>
                        <Link to={"/add-rto-data"} className="btn btn-lg active bg-danger-new text-white add-brand">
                            Add RTO Data
                        </Link>
                    </div>
                    <div>
                        <Select placeholder="Filter by State" style={{ width: 200, marginRight: 16 }} onChange={handleStateChange}>
                            {Array.from(new Set(list.map(item => item.state))).map(state => (
                                <Option key={state} value={state}>{state}</Option>
                            ))}
                        </Select>
                        <Select placeholder="Filter by Fuel Type" style={{ width: 200 }} onChange={handleFuelChange}>
                            {Array.from(new Set(list.map(item => item.fuelType))).map(fuel => (
                                <Option key={fuel} value={fuel}>{fuel}</Option>
                            ))}
                        </Select>
                    </div>
                </div>
                <Table columns={columns} dataSource={filteredData} rowKey="_id" />
            </section>
        </>
    );
}

export default RtodataTable;
