import React, { useContext, useEffect, useState } from 'react';
import { Button, NavDropdown, NavLink } from 'react-bootstrap';
import { TiTick } from "react-icons/ti";
import { GoReport } from "react-icons/go";
import { BiAddToQueue, BiCheckShield } from "react-icons/bi";
import { FaAd, FaTrashAlt } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { json, Link } from 'react-router-dom';
import './Items.css'
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../AuthContext/AuthProvider';
import axios from 'axios';


const Items = ({ watch, handleShow, refetch, setModalData }) => {
const [accountStatus, setAccountStatus] = useState(false)
    const { user, accountType,typeOfAccount } = useContext(AuthContext)
    const { _id, name, advertise, category, category_id, condition, description, duration, insertTime, itemImage, location, number, price, pruchingtime, reason, mainprice, repairOrDamage, sold, userEmail, userName, userProfilePicture, reported } = watch;

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
    const getAxiosData = async () => {
        try {
            const resposne = await axios(`http://localhost:5000/check-verify?email=${userEmail}`);
            setAccountStatus(resposne?.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    getAxiosData()
    // useEffect(()=> {}, [user?.email])
    
    // const handleItemAvailable = (id) => {
    //     fetch(`http://localhost:5000/items/available/${id}`, {
    //         method: 'PUT'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             toast.success(`${name} has been marked as available`)
    //             refetch()
    //         })
    //         .catch(err => console.log(err))
    // }
    // Mark watch Advertise
    const handleAdvertise = (id) => {
        fetch(`http://localhost:5000/items/advertised/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`${name} has been marked as Advertising Wacth`);
                refetch()

            })
            .catch(err => console.log(err))
    }
    // Handle Reporting
    const handleReporting = (id) => {
        if(reported){
            return toast.error('Already reported')
        }
        if(!user){
            return toast.error('You need to login an  account to report an item')
        }
        if(accountType?.accountType !== 'buyer'){
            return toast.error('You need to login a buyer account to report an item')
        }
        const reportedTime = new Date().getTime();

        fetch(`http://localhost:5000/items/reported/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({reportedTime})
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`${name} has been reportd to admin`)
                refetch()
            })
            .catch(err => console.log(err))
    }
    // Handle Solving
    const handleSolved = (id) => {
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

    const handleDeleteItem = (id) => {

        if (window.confirm(`DO you want to delete ${name} permanently`)) {


            fetch(`http://localhost:5000/delete-items/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    toast.success(`${name} has been deleted Permanently`)
                    console.log(data)

                })
                .catch(err => console.log(err))
        }
    }

    // Handle booking
    const handleBook = () => {
        if(typeOfAccount === 'seller'){
            return toast.error('A seller account can\'t book  item')
        }
        if (user?.email === userEmail) {
            return toast.error('You are viewing as this watch author. You cannot book your own item')
        }
        if (!user?.email) {
            return toast.error('Please login first to book this item')
        }
        if(sold){
            return toast.error('This item is already sold')
        }
        handleShow();
        setModalData(watch)
    }

    return (
        <div className={`item ${reported ? 'border border-3 border-danger' : 'theme_border' }  position-relative my-2}`}>
            <PhotoProvider>
                <div className="foo text-center position-relative">
                    {reported && <p className='reported_items'>reported</p>}
                    <PhotoView src={itemImage}>
                        <img style={{ maxHeight: '200px' }} className='img-fluid' src={itemImage} alt="" />
                    </PhotoView>
                </div>
            </PhotoProvider>

            <div className={`p-3 rounded-bottom `}>
                
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
                    <Link className='text-decoration-none' to={`/details/items/${_id}`}>
                    {
                        name.split(' ').length>3 ? name.split(' ').slice(0,3).join(' ')+ '...' : name
                    } 
                    </Link>
                    {accountStatus && <TiTick title="Verified Account" className='rounded-circle bg-primary fs-6 text-white'></TiTick>}
                </h3>

                <h4 className="mb-1 fw-bolder theme_color">
                    Selling Price: {price}$
                </h4>
                <del><small className='fw-bolder'>Original Price of Purchase: {mainprice}</small></del>

                <p className="text-muted mt-3 mb-1">
                    <span className='fw-bolder text-black'>Description: </span> {description.length>40 ? description.slice(0,40 )+ ' ... More': description}
                </p>
                <p className="text-muted mb-1">
                    <span className='fw-bolder text-black'>Product Used for: </span> {duration} month
                </p>
                <p className="text-muted mb-1">
                    <span className='fw-bolder text-black'>Reason of Selling: </span> {reason}
                </p>
                {/* {watch ? <NavDropdown className='fw-bolder action_div mt-2 position-absolute top-0 fs-3 fw-bold' title="..." id="basic-nav-dropdown"> */}
                {!sold ? <div className="p-2 d-flex justify-content-evenly">
                    {!sold && user?.email === userEmail &&
                        <img onClick={() => handleSoldOut(_id)} title="mark as Sold out" style={{ cursor: 'pointer' }} width="40" className='me-2' src="https://i.ibb.co/tqdbw59/pngtree-sold-out-png-image-4169086-copy.png" />
                    }
                    {!advertise && user?.email === userEmail &&
                        <FaAd onClick={() => handleAdvertise(_id)} title="Ad this Watch" style={{ cursor: 'pointer' }} className='text-primary fs-1 me-2'></FaAd>
                    }
                    
                  
                    <GoReport title="Report This Watch" onClick={() => handleReporting(_id)} style={{ cursor: 'pointer' }} className={`text-danger fs-1`}></GoReport>
               
                </div> : ''}
                {user?.email === userEmail && 
                    <FaTrashAlt title="Delete This Watch" style={{ cursor: 'pointer' }} onClick={() => handleDeleteItem(_id)} className='text-danger fs-1'></FaTrashAlt>
                     }

                {!sold && <button onClick={handleBook} className="theme_bg  border-0 w-100 text-white fw-bolder py-2 rounded px-3 text-center w-100">  Book Now  </button>}

            </div>
        </div >
    );
};

export default Items;