import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const UserDashBoard = () => {
    const { user } = useContext(AuthContext);
    const [allUsers, setAllUsers] = useState([])
    const [allItems, setAllItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/all-users')
            .then(res => res.json())
            .then(users => setAllUsers(users))

    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/all-uploaded-items')
            .then(res => res.json())
            .then(users => setAllItems(users))

    }, [])
    const allBuyer = allUsers?.filter(s => s?.accountType === 'buyer');
    const allSeller = allUsers?.filter(s => s?.accountType === 'seller');
    const allAdmin = allUsers?.filter(s => s?.accountType === 'admin');

    const allWacthes = allItems?.length;
    const allSold = allItems?.filter(item => item.sold === true);
    const allReported = allItems?.filter(item => item.reported === true);
    const allAdvertise = allItems?.filter(item => item.advertise === true);






    return (
        <section>
            <div className="container">
                <div className="row text-center">
                    <h2 className="fw-bolder">
                        User Information
                    </h2>
                    <div className="col-md-3 my-2">
                        <div className="theme_border theme_bg text-white px-2 py-4 rounded">
                            <img className='img-fluid rounded-circle' style={{ width: '100px' }} src="https://i.ibb.co/HPdScqD/buyer-icon-1.png" alt="" /> <br />
                            <h5 className="fw-bolder mt-3">
                                <Link className='text-decoration-none' to="/dashboard/allbuyers">{allBuyer?.length}</Link> Buyer
                            </h5>
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div className="theme_border theme_bg text-white px-2 py-4 rounded">
                        <img className='img-fluid' style={{ width: '100px' }} src="https://i.ibb.co/dbCMCVV/seller-icon.png" alt="" /> <br/>
                            <h5 className="fw-bolder mt-3">
                                <Link className='text-decoration-none' to="/dashboard/allsellers">{allSeller?.length}</Link> Seller
                            </h5>
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div className="theme_border theme_bg text-white px-2 py-4 rounded">
                        <img className='img-fluid' style={{ width: '100px' }} src="https://i.ibb.co/VWF7x8q/admin-icon.png" alt="" />
                            <h5 className="fw-bolder mt-3">
                                <Link className='text-decoration-none' to="/dashboard/all-admin">{allAdmin?.length}</Link> Admin
                            </h5>
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div className="theme_border theme_bg text-white px-2 py-4 rounded">
                        <img className='img-fluid' style={{ width: '100px' }} src="https://i.ibb.co/ZhMWdYb/block-user-icon.png" alt="" />
                            <h5 className="fw-bolder mt-3">
                                <Link className='text-decoration-none' to="">0</Link> Blocked User
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 text-center">
                    <h2 className="fw-bolder">
                        Product Information
                    </h2>
                    <div className="col-md-3">
                    <div className="theme_border theme_bg text-white px-2 py-4 rounded">
                        <img className='img-fluid' style={{ width: '100px' }} src="https://i.ibb.co/VWF7x8q/admin-icon.png" alt="" />
                            <h5 className="fw-bolder mt-3">
                               {allWacthes} Watch
                            </h5>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="theme_border theme_bg text-white px-2 py-4 rounded">
                        <img className='img-fluid' style={{ width: '100px' }} src="https://i.ibb.co/KWqDgd9/pngtree-vector-sold-icon-pn.png" alt="" />
                            <h5 className="fw-bolder mt-3">
                                {allSold?.length} Sold
                            </h5>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="theme_border theme_bg text-white px-2 py-4 rounded">
                        <img className='img-fluid' style={{ width: '100px' }} src="https://i.ibb.co/FnRzdsr/advertising.png" alt="" />
                            <h5 className="fw-bolder mt-3">
                            {allAdvertise?.length} Advertised
                            </h5>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="theme_border theme_bg text-white px-2 py-4 rounded">
                        <img className='img-fluid' style={{ width: '125px' }} src="https://i.ibb.co/YZ09N7T/reported.png" alt="" />
                            <h5 className="fw-bolder mt-3">
                            <Link to="/dashboard/reported-items" className='text-decoration-none'>
                            {allReported?.length} 
                            </Link> Reported
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserDashBoard;