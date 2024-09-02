import React from 'react';
import { Button, Form, Select, message, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './component.css';

const { Option } = Select;

const RtoDataAdd = () => {
    const navigate = useNavigate();

    // List of states in India for the dropdown, in uppercase
    const states = [
        'ANDHRA PRADESH', 'ARUNACHAL PRADESH', 'ASSAM', 'BIHAR', 'CHHATTISGARH',
        'GOA', 'GUJARAT', 'HARYANA', 'HIMACHAL PRADESH', 'JHARKHAND', 'KARNATAKA',
        'KERALA', 'MADHYA PRADESH', 'MAHARASHTRA', 'MANIPUR', 'MEGHALAYA', 'MIZORAM',
        'NAGALAND', 'ODISHA', 'PUNJAB', 'RAJASTHAN', 'SIKKIM', 'TAMIL NADU',
        'TELANGANA', 'TRIPURA', 'UTTAR PRADESH', 'UTTARAKHAND', 'WEST BENGAL','ANDAMAN AND NICOBAR',
        'DADAR AND NAGAR HAVELI DAMAN AND DIU','JAMMU AND KASHMIR','LAKSHDWEEP',
        'CHANDIGARH','DELHI NCR','LADHAKH','PUDUCHERRY','DELHI'
    ];

    const onFinishHandler = async (values) => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/save-rto-data`, values);
            if (res.data.success) {
                message.success('Successfully Saved Data');
                navigate('/rto-data');
            } else {
                message.error('Something went wrong');
            }
        } catch (err) {
            console.log(err);
            message.error("Something went wrong");
        }
    };

    return (
        <div className="form-container">
            <Form layout="vertical" onFinish={onFinishHandler} className="register-form">
                <h1 className="text-center">RTO Input Form</h1>
                <Form.Item
                    label="State"
                    name="state"
                    rules={[{ required: true, message: 'Please select a state!' }]}
                >
                    <Select
                        showSearch
                        placeholder="Select a state"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().includes(input.toLowerCase())
                        }
                    >
                        {states.map(state => (
                            <Option key={state} value={state}>{state}</Option>
                        ))}
                    </Select>
                </Form.Item>
                {/* Additional Form Items would be included here following the same pattern */}
                <Form.Item label="Fuel Type" name="fuelType" rules={[{ required: true, message: 'Please input fuel type in uppercase' }]}>
                    <Select placeholder="Select fuel type">
                        <Option value="PETROL">PETROL</Option>
                        <Option value="DIESEL">DIESEL</Option>
                        <Option value="CNG">CNG</Option>
                        <Option value="ELECTRIC">ELECTRIC</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Starting Price" name="startPrice" rules={[{ required: true, message: 'Please input Starting Price' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Ending Price" name="endPrice" rules={[{ required: true, message: 'Please input Ending Price' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="RTO DATA in %" name="rtoPercentage">
                    <Input />
                </Form.Item>
                <Form.Item label="Amount" name="amount" rules={[{ message: 'Use only if there is no RTO' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Insurance Percentage" name="insurancePercentage" rules={[{ required: true, message: 'Enter insurance amount in %' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Hypothecation Charges" name="hypethecationCharges" rules={[{ required: true,  message: 'Please Enter Hypothecation Charges in Rupees' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Fast Tags" name="fastag" rules={[{ required: true,  message: 'Please Enter Fast Tags Charges in Rupees' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Others" name="others" rules={[{ required: true,  message: 'Please Enter Charges in Rupees' }]}>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Save</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default RtoDataAdd;
