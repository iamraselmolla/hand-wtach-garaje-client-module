import React, { useContext } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Link, NavLink } from 'react-router-dom'
import AddAnItem from '../Pages/AddAnItem/AddAnItem';
import './Dashboard.css'
import { AuthContext } from '../AuthContext/AuthProvider';


const Dashborad = () => {
    const {typeOfAccount} = useContext(AuthContext);
    return (
        <section>
            <Header></Header>

            <main className='container-fluid'>
                <div className="py-5 row">
                    <div className="col-md-2 dashboard-panel">
                       
                                    <Link className="d-block fw-bolder text-decoration-none py-2 px-2"
                                        to="/dashboard/activity"
                                    >
                                       Dashboard
                                    </Link>
                                  
                       
                                   {typeOfAccount  === 'seller' &&  <NavLink className="d-block fw-bolder text-decoration-none py-2 px-2"
                                        to="/dashboard/add-an-item"
                                    >
                                        Add an Item
                                    </NavLink>}
                               
                                   
                               
                                   {typeOfAccount === 'admin' &&  <NavLink className="d-block fw-bolder text-decoration-none py-2 px-2" to="/dashboard/allbuyers">
                                                All Buyers
                                            
                                        
                                    </NavLink>}
                                    {typeOfAccount === 'admin' && <NavLink className="d-block fw-bolder text-decoration-none py-2 px-2"
                                        to="/dashboard/allsellers"
                                    >
                                        All  Sellers
                                    </NavLink>}
                                    {typeOfAccount === 'admin' &&  <NavLink className="d-block fw-bolder text-decoration-none py-2 px-2"
                                        to="/dashboard/all-admin"
                                    >
                                        All  Admin
                                    </NavLink>}
                                    {typeOfAccount === 'admin' &&  <NavLink className="d-block fw-bolder text-decoration-none py-2 px-2"
                                        to="/dashboard/all-blocked-users"
                                    >
                                        All  Blocked Users
                                        </NavLink>}
                                        {typeOfAccount === 'admin' &&  <NavLink className="d-block fw-bolder text-decoration-none py-2 px-2"
                                        to="/dashboard/all-users"
                                    >
                                        All  Users
                                    </NavLink>}
                                    {typeOfAccount === 'buyer' &&  <NavLink className="d-block fw-bolder text-decoration-none py-2 px-2" to="/dashboard/all-booked-items">
                                    
                                                All Booked Items
                                          
                                    </NavLink>}
                                    {typeOfAccount === 'buyer' && <NavLink className="d-block fw-bolder text-decoration-none py-2 px-2" to="/dashboard/my-shopping/">
                                    
                                                My Shopping
                                          
                                    </NavLink>}
                                    {typeOfAccount === 'seller' &&  <NavLink className="d-block fw-bolder text-decoration-none py-2 px-2" to="/dashboard/all-added-items">
                                    
                                                All Added Items
                                          
                                    </NavLink>}
                                    {typeOfAccount === 'admin' && <NavLink className="d-block fw-bolder text-decoration-none py-2 px-2" to="/dashboard/reported-items">
                                       
                                                All Reported Items
                                            
                                    </NavLink>}
                               
                    
                    </div>
                    <div className="col-md-10">
                        <Outlet></Outlet>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </section>
    );
};

export default Dashborad;