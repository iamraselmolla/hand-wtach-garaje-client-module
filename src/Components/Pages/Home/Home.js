import React from 'react';
import Banner from './Banner';
import BuyingLuxury from './BuyingLuxury';
import './Home.css'
import ProductsCategoris from './ProductsCategoris';
import Steps from './Steps';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Steps></Steps>
            <BuyingLuxury></BuyingLuxury>
            <ProductsCategoris></ProductsCategoris>
        </>
    );
};

export default Home;