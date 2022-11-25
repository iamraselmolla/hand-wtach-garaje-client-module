import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Main = () => {
    return (
        <main>
           <Header></Header>
           <Outlet></Outlet> 
           <Footer></Footer>
        </main>
    );
};

export default Main;