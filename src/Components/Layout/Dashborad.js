import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Dashborad = () => {
    return (
        <section>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </section>
    );
};

export default Dashborad;