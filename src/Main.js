import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

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