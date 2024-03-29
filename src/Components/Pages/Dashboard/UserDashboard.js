import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import { BiPurchaseTag, BiBlock } from 'react-icons/bi'
import { TbBrandBooking } from 'react-icons/tb'
import { BsSmartwatch } from 'react-icons/bs'
import { SiSellfy } from 'react-icons/si'
import { RiAdvertisementLine } from 'react-icons/ri'
import { VscReport } from 'react-icons/vsc'
import { AiOutlineShop, AiOutlineShoppingCart } from 'react-icons/ai'
import { GrUserAdmin } from 'react-icons/gr'

const UserDashBoard = () => {
    const { user, typeOfAccount } = useContext(AuthContext);
    const [allUsers, setAllUsers] = useState([]);
    const [allItems, setAllItems] = useState([]);
    const [bookedData, setBookedData] = useState([]);
    const [allShopping, setAllShopping] = useState([])
    useEffect(() => {
        fetch(`https://assignment-12-server-9btb6ecgx-iamraselmolla.vercel.app/my-shopping?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAllShopping(data))
            .catch(err => console.log(err.message))
    }, [])


    useEffect(() => {
        fetch('https://assignment-12-server-9btb6ecgx-iamraselmolla.vercel.app/all-users')
            .then(res => res.json())
            .then(users => setAllUsers(users))

    }, []);
    useEffect(() => {
        fetch(`https://assignment-12-server-9btb6ecgx-iamraselmolla.vercel.app/booked?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookedData(data))
            .catch(err => console.log(err.message))
    }, [user?.email]);
    useEffect(() => {
        fetch('https://assignment-12-server-9btb6ecgx-iamraselmolla.vercel.app/all-uploaded-items')
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
                {typeOfAccount === 'admin' &&
                    <>
                        <div className="row text-center">
                            <h2 className="fw-bolder">
                                User Information
                            </h2>
                            <div className="col-md-3 my-2">
                                <div className="theme_border theme_bg text-white px-2 py-4 rounded">
                                    <AiOutlineShoppingCart size={'8em'} /> <br />
                                    <h5 className="fw-bolder mt-3">
                                        <Link className='text-decoration-none' to="/dashboard/allbuyers">{allBuyer?.length}</Link> Buyer
                                    </h5>
                                </div>
                            </div>
                            <div className="col-md-3 my-2">
                                <div className="theme_border theme_bg text-white px-2 py-4 rounded">
                                    <AiOutlineShop size={'8em'} /> <br />
                                    <h5 className="fw-bolder mt-3">
                                        <Link className='text-decoration-none' to="/dashboard/allsellers">{allSeller?.length}</Link> Seller
                                    </h5>
                                </div>
                            </div>
                            <div className="col-md-3 my-2">
                                <div className="theme_border theme_bg text-white px-2 py-4 rounded">
                                    <GrUserAdmin size={'8em'} />
                                    <h5 className="fw-bolder mt-3">
                                        <Link className='text-decoration-none' to="/dashboard/all-admin">{allAdmin?.length}</Link> Admin
                                    </h5>
                                </div>
                            </div>
                            <div className="col-md-3 my-2">
                                <div className="theme_border theme_bg text-white px-2 py-4 rounded">
                                    <BiBlock size="8em" />
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
                                    <BsSmartwatch size={'8em'} style={{ width: '100px' }} />

                                    <h5 className="fw-bolder mt-3">
                                        <Link className='text-decoration-none' to="/dashboard/all-uploaded-items">{allWacthes}</Link> Watch
                                    </h5>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="theme_border theme_bg text-white px-2 py-4 rounded">
                                    <SiSellfy size={'8em'} />
                                    <h5 className="fw-bolder mt-3">
                                        <Link to="/all-sold-items"></Link>   {allSold?.length} Sold
                                    </h5>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="theme_border theme_bg text-white px-2 py-4 rounded">
                                    <RiAdvertisementLine size={'8em'} />
                                    <h5 className="fw-bolder mt-3">
                                        {allAdvertise?.length} Advertised
                                    </h5>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="theme_border theme_bg text-white px-2 py-4 rounded">
                                    <VscReport size={'8em'} />
                                    <h5 className="fw-bolder mt-3">
                                        <Link to="/dashboard/reported-items" className='text-decoration-none'>
                                            {allReported?.length}
                                        </Link> Reported
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </>
                }
                {typeOfAccount === 'buyer' && <>
                    <div className="row text-center">
                        <div className="col-md-6">
                            <div className="theme_border theme_bg text-white px-2 py-4 rounded">
                                <TbBrandBooking style={{ fontSize: '80px' }}></TbBrandBooking>
                                <h5 className="fw-bolder mt-3">
                                    <Link to="/dashboard/all-booked-items" className='text-decoration-none'>
                                        {bookedData?.length}
                                    </Link> item booked
                                </h5>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="theme_border theme_bg text-white px-2 py-4 rounded">
                                <BiPurchaseTag style={{ fontSize: '80px' }}></BiPurchaseTag>
                                <h5 className="fw-bolder mt-3">
                                    <Link to="/dashboard/my-shopping" className='text-decoration-none'>
                                        {allShopping?.length}
                                    </Link> item Purchased
                                </h5>
                            </div>
                        </div>
                    </div>
                </>}
            </div>
        </section>
    );
};

export default UserDashBoard;