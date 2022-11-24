import React from 'react';
import Banner from './Banner';
import BuyingLuxury from './BuyingLuxury';
import './Home.css'
import Steps from './Steps';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Steps></Steps>
            <BuyingLuxury></BuyingLuxury>
        </>
    );
};

export default Home;