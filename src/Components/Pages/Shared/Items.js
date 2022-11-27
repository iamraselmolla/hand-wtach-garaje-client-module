import React, { useContext, useEffect, useState } from 'react';
import { NavDropdown, NavLink } from 'react-bootstrap';
import { TiTick } from "react-icons/ti";
import { GoReport } from "react-icons/go";
import { BiAddToQueue, BiCheckShield } from "react-icons/bi";
import { FaAd, FaTrashAlt } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import './Items.css'
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../AuthContext/AuthProvider';

const Items = ({ watch, setReLoader, reload,refetch }) => {
    const {user, accountType} = useContext(AuthContext)
    const { _id, name, advertise, category, category_id, condition, description, duration, insertTime, itemImage, location, number, price, pruchingtime, reason, mainprice, repairOrDamage, sold, userEmail, userName, userProfilePicture,reported } = watch;


// Mark watch sold Out
    const handleSoldOut = (id) => {
        fetch(`http://localhost:5000/items/sold-out/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`${name} has been marked as sold out`)
                refetch()
            })
            .catch(err => console.log(err))
    }
// Mark watch Advertise
    const handleAdvertise = (id) => {
        fetch(`http://localhost:5000/items/advertised/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`${name} has been marked as Advertising Wacth`)
                
            })
            .catch(err => console.log(err))
    }
    // Handle Reporting
    const handleReporting =(id) => {
        fetch(`http://localhost:5000/items/reported/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`${name} has been reportd to admin`)
                refetch()
            })
            .catch(err => console.log(err))
    }
    // Handle Solving
    const handleSolved =(id) => {
        fetch(`http://localhost:5000/items/reported-solved/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`Report Againt ${name} has been selected as solved`)
                refetch()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={`item theme_border position-relative ${reported ? 'bg-danger bg-opacity-25' : ''}`}>
            <PhotoProvider>
                <div className="foo text-center">
                    <PhotoView src={itemImage}>
                        <img style={{maxHeight: '300px'}} className='img-fluid' src={itemImage} alt="" />
                    </PhotoView>
                </div>
            </PhotoProvider>

            <div className="p-3 rounded-bottom">
                <div className="d-flex flex-wrap justify-content-between gap-2">
                    <div className="theme_border_2 px-2 py-1 rounded fw-bold">
                        {category} Watch
                    </div>
                    <div className="theme_border_2 px-2 py-1 rounded fw-bold">
                        {advertise ? 'Adertised' : 'Not adertised'}
                    </div>
                    <div className="theme_border_2 px-2 py-1 rounded fw-bold">
                        {sold ? 'Sold' : 'Not Sold'}
                    </div>
                    <div className="theme_border_2 px-2 py-1 rounded fw-bold">
                        {repairOrDamage ? 'Repaired' : 'Not Repaired'}
                    </div>
                    <div className="theme_border_2 px-2 py-1 rounded fw-bold">
                        Used For: {duration} Month
                    </div>
                    <div className="theme_border_2 px-2 py-1 rounded fw-bold">
                        Main Purchase Time: {pruchingtime}
                    </div>
                </div>
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
                <h3 className="mb-0 mt-3">
                    {name} <TiTick className='rounded-circle bg-primary fs-6 text-white'></TiTick>
                </h3>

                <h4 className="mb-1 fw-bolder theme_color">
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
               {!sold || !advertise || watch  ?  <NavDropdown className='fw-bolder action_div mt-2 position-absolute top-0 fs-3 fw-bold' title="..." id="basic-nav-dropdown">
                    <div className="p-2">
                        {!sold && user?.email === userEmail &&<img onClick={() => handleSoldOut(_id)} title="mark as Sold out" style={{ cursor: 'pointer' }} width="40" className='me-2' src="https://i.ibb.co/tqdbw59/pngtree-sold-out-png-image-4169086-copy.png" />}
                        {!advertise && user?.email === userEmail && <FaAd onClick={() => handleAdvertise(_id)} title="Ad this Watch" style={{ cursor: 'pointer' }} className='text-primary fs-1 me-2'></FaAd>}
                       {user?.email === userEmail && accountType?.accountType === 'admin' && <FaTrashAlt   title="Delete This Watch" style={{ cursor: 'pointer' }} className='text-danger fs-1'></FaTrashAlt>}
                       {user?.email !== userEmail && accountType?.accountType === 'buyer' && !reported && <GoReport  title="Report This Watch" onClick={() => handleReporting(_id)} style={{ cursor: 'pointer' }} className='text-danger fs-1'></GoReport>}
                       {user?.email !== userEmail && accountType?.accountType === 'buyer' &&   <BiAddToQueue  title="Add to wishlist" style={{ cursor: 'pointer' }} className='text-danger ms-2 fs-1'></BiAddToQueue>}
                       {accountType?.accountType === 'admin' && reported &&  <BiCheckShield onClick={() => handleSolved(_id)}  title="Mark as solved" style={{ cursor: 'pointer' }} className='text-danger ms-2 fs-1'></BiCheckShield>}
                    </div>
                </NavDropdown>: ''}


            </div>
        </div>
    );
};

export default Items;