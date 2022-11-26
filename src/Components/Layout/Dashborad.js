import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Link, NavLink } from 'react-router-dom'
import AddAnItem from '../Pages/AddAnItem/AddAnItem';
import './Dashboard.css'


const Dashborad = () => {
       
      let activeClassName = "underline";
    return (
        <section>
            <Header></Header>

            <main className='container'>
                <div className="py-5 row">
                    <div className="col-md-3 dashboard-panel">
                       
                                    <NavLink className="d-block fw-bolder text-decoration-none py-2 px-2"
                                        to="/dashboard/addanitem"
                                    >
                                        Add an Item
                                    </NavLink>
                               
                                   
                               
                                    <NavLink className="d-block fw-bolder text-decoration-none py-2 px-2" to="/dashboard/allbuyers">
                                                All Buyers
                                            
                                        
                                    </NavLink>
                                    <NavLink className="d-block fw-bolder text-decoration-none py-2 px-2"
                                        to="/dashboard/allsellers"
                                    >
                                        All  Sellers
                                    </NavLink>
                                    <NavLink className="d-block fw-bolder text-decoration-none py-2 px-2"
                                        to="/dashboard/all-admin"
                                    >
                                        All  Admin
                                    </NavLink>
                                    <NavLink className="d-block fw-bolder text-decoration-none py-2 px-2"
                                        to="/dashboard/all-users"
                                    >
                                        All  users
                                    </NavLink>
                                    <NavLink className="d-block fw-bolder text-decoration-none py-2 px-2" to="/dashboard/all-booked-items">
                                    
                                                All Booked Items
                                          
                                    </NavLink>
                                    <NavLink className="d-block fw-bolder text-decoration-none py-2 px-2" to="/dashboard/all-added-items">
                                    
                                                All Added Items
                                          
                                    </NavLink>
                                    <NavLink className="d-block fw-bolder text-decoration-none py-2 px-2" to="/dashboard/reported-items">
                                       
                                                All Reported Items
                                            
                                    </NavLink>
                               
                    
                    </div>
                    <div className="col-md-8">
                        <Outlet></Outlet>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </section>
    );
};

export default Dashborad;