import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const ItemDetails = () => {
    const detailsData = useLoaderData();
    
    const { user, accountType,typeOfAccount } = useContext(AuthContext)
    const { _id, name, advertise, category, category_id, condition, description, duration, insertTime, itemImage, location, number, price, pruchingtime, reason, mainprice, repairOrDamage, sold, userEmail, userName, userProfilePicture, reported } = detailsData;

  
    return (
        <section className='container py-5'>
            <div className="row">
                <div className="col-md-9">
                    <h3 className="mb-0 mt-3">
                        {
                            name
                        }
                    </h3>

                    <div className="d-flex align-items-center mt-3">
                        <div className='me-2'>
                            <PhotoProvider>
                                <div className="foo">
                                    <PhotoView src={userProfilePicture}>
                                        <img src={userProfilePicture} width="40px" className='rounded-circle' alt="Author user profile" />
                                    </PhotoView>
                                </div>
                            </PhotoProvider>

                        </div>
                        <div>
                            <small className='mb-0'>{userName}</small> <br />
                            <small>{location}</small>
                        </div>
                    </div>
                    <div className="fw-bolder text-muted">
                        <small>Posted on: {new Date(insertTime).toLocaleString()}</small>
                    </div>
                    <div className='me-2'>
                        <PhotoProvider>
                            <div className="foo position-relative">
                                <PhotoView src={itemImage}>
                                    <img style={{ maxHeight: '300px' }} className='img-fluid' src={itemImage} alt="" />
                                </PhotoView>
                            </div>
                        </PhotoProvider>
                    </div>
                    <h4 className="mb-1 mt-3 fw-bolder theme_color">
                        Selling Price: {price}
                    </h4>
                    <del><small className='fw-bolder'>Original Price of Purchase: {mainprice}</small></del>

                    <p className="text-muted mt-3 mb-1">
                        <span className='fw-bolder text-black'>Product Description: </span> {description}
                    </p>
                    <p className="text-muted mb-1">
                        <span className='fw-bolder text-black'>Product Used for: </span> {duration} month
                    </p>
                    <p className="text-muted mb-1">
                        <span className='fw-bolder text-black'>Reason of Selling: </span> {reason}
                    </p>
                    <p className="text-muted mb-1">
                        <span className='fw-bolder text-black'>Condition: </span> {condition}
                    </p>
                    <p className="text-muted mb-1">
                        <span className='fw-bolder text-black'>Category: </span> {category}
                    </p>
                    <p className="text-muted mb-1">
                        <span className='fw-bolder text-black'>Time of Purchase: </span> {pruchingtime}
                    </p>
                    <p className="text-muted mb-1">
                        <span className='fw-bolder text-black'>Selling Reason: </span> {reason}
                    </p>
                    <p className="text-muted mb-1">
                        <span className='fw-bolder text-black'>Repaired of Damaged: </span> {repairOrDamage ? 'Yes' : 'No'}
                    </p>
                </div>

                <div className="col-md-3 position-relative">
                    <div className="position-sticky top-0">
                        <PhotoProvider>
                            <div className="foo position-relative">
                                <PhotoView src={itemImage}>
                                    <img style={{ maxHeight: '200px' }} className='img-fluid' src={itemImage} alt="" />
                                </PhotoView>
                            </div>
                        </PhotoProvider>
                        <h5 className="mb-0 fw-bolder mt-3">
                        {
                            name
                        }
                    </h5>
                    <p className="fw-bolder mt-2 theme_color">
                      Price: ${price}
                    </p>
                  
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ItemDetails;