import React, { useState, useEffect } from 'react';
import { Table, Button, message, Select, Modal } from 'antd';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faTrash, faDownload } from '@fortawesome/free-solid-svg-icons';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Tag } from 'antd';


const { Option } = Select;



const OwnersReview = () => {
    const [review, setReview] = useState([]);
    const [filterRating, setFilterRating] = useState(null);

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null);


    const getReviews = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/tern/get-all-reviews`);
            if (res.data.success) {
                setReview(res.data.data);
            }
        } catch (e) {
            console.log(e);
            message.error("Failed to fetch reviews");
        }
    };

    useEffect(() => {
        getReviews();
    }, []);

    const handleStatus = async (record, status) => {
        try {
            const res = await axios.put(`${process.env.REACT_APP_API}/api/v1/tern/update-permission/${record._id}`, { permission: status });
            if (res.data.success) {
                message.success(res.data.message);
                getReviews();
            }
        } catch (e) {
            console.log(e);
            message.error("Something went wrong");
        }


    };

    const handleDelete = (id) => {
        Modal.confirm({
            title: 'Are you sure delete this review?',
            icon: <ExclamationCircleOutlined />,
            content: 'This action cannot be undone and will permanently delete the review.',
            okText: 'Yes, Delete It',
            okType: 'danger',
            cancelText: 'No, Cancel',
            onOk() {
                // Proceed with deleting the review
                return new Promise((resolve, reject) => {
                    axios.delete(`${process.env.REACT_APP_API}/api/v1/tern/delete-review/${id}`)
                        .then(res => {
                            if (res.data.success) {
                                message.success('Review deleted successfully');
                                getReviews();  // Refresh the list after deletion
                                resolve();
                            } else {
                                message.error('Failed to delete review');
                                reject();
                            }
                        })
                        .catch(e => {
                            console.error(e);
                            message.error('Error occurred while deleting review');
                            reject();
                        });
                });
            },
            onCancel() {
                console.log('Cancel delete');
            },
        });
    };

    const handleDownloadCsv = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/tern/export-reviews`, {
                responseType: 'blob'  // Important for handling the binary data correctly
            });

            // Create a URL for the blob object
            const url = window.URL.createObjectURL(new Blob([response.data]));

            // Create a temporary anchor tag to trigger the download
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'reviews.csv');  // Define the filename for the download
            document.body.appendChild(link);
            link.click();

            // Clean up and remove the link
            link.parentNode.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading the CSV file:', error);
            message.error('Failed to download CSV');
        }
    };


    const fetchReviewById = async (id) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/tern/get-review-by-id/${id}`);
            if (res.data.success) {
                return res.data.data;
            }
        } catch (error) {
            message.error('Failed to fetch review details');
        }
    };

    const handleViewDetails = async (id) => {
        try {
            const reviewData = await fetchReviewById(id);
            setSelectedReview(reviewData);
            setModalVisible(true);
        } catch (error) {
            console.error('Error fetching review details:', error);
        }
    };



    const columns = [
        {
            title: 'Brand',
            dataIndex: 'brand',
            render: brand => brand ? brand.name : 'No data'
        },
        {
            title: 'Car',
            dataIndex: 'product_id',
            render: product_id => product_id ? product_id.carname : 'No data'
        },
        {
            title: 'Name',
            dataIndex: 'customerName'
        },
        {
            title: 'Email',
            dataIndex: 'email_id'
        },
        {
            title: 'PIN Code',
            dataIndex: 'pinCode'
        },
        {
            title: 'Rating',
            dataIndex: 'ratingOfCar'
        },
        {
            title: 'Varient',
            dataIndex: 'varient'
        },
        {
            title: 'Car Number',
            dataIndex: 'carNumber'
        },
        {
            title: 'Status',
            dataIndex: 'permission'
        },
        {
            title: 'Time Stamp',
            dataIndex: 'createdAt'
        },
        {
            title: 'Actions',
            key: 'actions',
            width: 160,
            render: (text, record) => (
                <>
                    <div className="d-flex gap-2 align-items-center justify-content-center" style={{ height: '100%', width: '144px' }}>
                        <div className='editbtn align-items-center justify-content-center'>
                            <FontAwesomeIcon icon={faCheckCircle} className="text-custom-green" onClick={() => handleStatus(record, 'Approved')} />
                        </div>
                        <div className='morebtn align-items-center justify-content-center'>
                            <FontAwesomeIcon icon={faTimesCircle} className="text-danger" onClick={() => handleStatus(record, 'Rejected')} />
                        </div>
                        <div className='trashbtn align-items-center justify-content-center'>
                            <ion-icon name="trash-outline" icon={faTrash} className="text-black trash-outline" onClick={() => handleDelete(record._id)} />
                        </div>
                        {record.status === 'Approved' && <Tag color="green">Approved</Tag>}
                        {record.status === 'Rejected' && <Tag color="red">Rejected</Tag>}
                        {/* <button onClick={() => handleViewDetails(record._id)}>View</button> */}
                        <div className='morebtn align-items-center justify-content-center'>
                        <ion-icon name="eye-outline" className="text-black trash-outline" onClick={() => handleViewDetails(record._id)} />
                        </div>

                    </div>
                </>

            ),
        }

    ];


    const handleFilterRating = (value) => {
        setFilterRating(value ? parseInt(value, 10) : null);
    };

    const filteredReviews = filterRating != null
        ? review.filter(review => Math.floor(review.ratingOfCar) === filterRating)
        : review;


    return (
        <section className='main-container-full'>
            <div className=''>
                <div className="h2 mb-3">Owner's Review</div>
                <div>
                    <div className='d-flex justify-content-between align-items-baseline'>
                        <Select
                            allowClear
                            placeholder="Filter by Rating"
                            style={{ width: 200, marginBottom: 16 }}
                            onChange={handleFilterRating}
                            value={filterRating}
                        >
                            {[1, 2, 3, 4, 5].map(rating => (
                                <Option key={rating} value={rating}>
                                    {rating}
                                </Option>
                            ))}
                        </Select>
                        <div onClick={handleDownloadCsv} className="btn btn-lg active bg-danger-new text-white add-brand" style={{ height: '43px' }}>
                            <FontAwesomeIcon icon={faDownload} /> Download CSV
                        </div>
                    </div>

                    <Table columns={columns} dataSource={filteredReviews} rowKey="_id" pagination={{ pageSize: 50 }} scroll={{ x: '80vw' }} tableLayout="fixed" />
                </div>
                <Modal
                    title="Review Details"
                    visible={modalVisible}
                    onCancel={() => setModalVisible(false)}
                    footer={null}
                    className='fksdksdksdgfhdghh'
                >
                    {selectedReview && (
                        <div className="review-details review-car">
                            <div className='d-flex justify-content-between align-items-center'>
                                {selectedReview.imageOfCar ? (
                                    <img src={`${process.env.REACT_APP_API}/ownersImages/${selectedReview.imageOfCar}`} alt="Car" crossorigin="anonymous" className='dfgbdmnfgdfmg'/>
                                ) : (
                                    <p>No image available</p>
                                )}
                            </div>

                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Customer Name :</span>
                                <p>{selectedReview.customerName || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Email :</span>
                                <p>{selectedReview.email_id || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>WhatsApp Number :</span>
                                <p>+91 {selectedReview.whatsAppNumber || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Pin Code :</span>
                                <p>{selectedReview.pinCode || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Profession :</span>
                                <p>{selectedReview.profession || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Referred By :</span>
                                <p>{selectedReview.refferedBy || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Brand :</span>
                                <p>{selectedReview.brand.name || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Car Name :</span>
                                <p>{selectedReview.product_id.carname || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Year :</span>
                                <p>{selectedReview.year || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Variant :</span>
                                <p>{selectedReview.varient || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Fuel Type :</span>
                                <p>{selectedReview.fuelType || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Transmission :</span>
                                <p>{selectedReview.transMission || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Car Number :</span>
                                <p>{selectedReview.carNumber || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Rating of Car :</span>
                                <p>{selectedReview.ratingOfCar || "No data"}</p>
                            </div>

                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Kind of Car :</span>
                                <p>{selectedReview.kindOfCar || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Approx KM Driven :</span>
                                <p>{selectedReview.approxKMdriven || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Modification of Vehicle :</span>
                                <p>{selectedReview.modificationOfVehicle || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>What Kind of Road Driven on :</span>
                                <p>{selectedReview.whatKindofRoadDrivenon || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>How Many People Drive :</span>
                                <p>{selectedReview.howManypropleDrive || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Mileage in City :</span>
                                <p>{selectedReview.milageinCity || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Mileage in Highway :</span>
                                <p>{selectedReview.milageInHighway || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Overall Range Applicable for EV :</span>
                                <p>{selectedReview.overallRangeApplicableForEV || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Why This Car :</span>
                                <p>{selectedReview.whyThisCar || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Key Reasons :</span>
                                <p>{selectedReview.keyReasons || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Features Learnt After Purchasing :</span>
                                <p>{selectedReview.featuresLearntAfterPurchaseing || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Things Lacking in This Car :</span>
                                <p>{selectedReview.thingsLackinThisCar || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Shortlisted Car 1 :</span>
                                <p>{selectedReview.shortlistedCar1 || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Shortlisted Car 2 :</span>
                                <p>{selectedReview.shortlistedCar2 || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Shortlisted Car 3 :</span>
                                <p>{selectedReview.shortlistedCar3 || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Issue With Car :</span>
                                <p>{selectedReview.issueWithCar || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Willing to Recommend :</span>
                                <p>{selectedReview.willingToRecommende || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>What's Your Emotion :</span>
                                <p>{selectedReview.whatsYourEmotion || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Name of Dealership :</span>
                                <p>{selectedReview.nameOfDelership || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>City and Area :</span>
                                <p>{selectedReview.cityAndArea || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Rating of Dealership Experience :</span>
                                <p>{selectedReview.raingOfDelershipExperience || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Why This Dealership :</span>
                                <p>{selectedReview.whyThisDelership || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Did Dealership Forced to Sell Anything :</span>
                                <p>{selectedReview.didDelershipForcedtoSellanything || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Recommendation of Dealership :</span>
                                <p>{selectedReview.recomendationOfDelership || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Service of Car on Dealership :</span>
                                <p>{selectedReview.serviceOfcarOnDelership || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Have You Serviced :</span>
                                <p>{selectedReview.haveYouServiced || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Different Name of Dealership :</span>
                                <p>{selectedReview.differentNameOfDelership || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Tip for People for Service :</span>
                                <p>{selectedReview.tipForpeopleForService || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Share About Dealership :</span>
                                <p>{selectedReview.shareAboutDelerchip || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Service Experience :</span>
                                <p>{selectedReview.serviceExperience || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Approx Service Cost :</span>
                                <p>{selectedReview.approxServiceCost || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Your Story :</span>
                                <p>{selectedReview.yourStory || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Permission :</span>
                                <p>{selectedReview.permission || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Created At :</span>
                                <p>{selectedReview.createdAt || "No data"}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>Updated At :</span>
                                <p>{selectedReview.updatedAt || "No data"}</p>
                            </div>

                        </div>

                    )}
                </Modal>

            </div>
        </section>
    );
};

export default OwnersReview;
