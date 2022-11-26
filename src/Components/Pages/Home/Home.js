import React from 'react';
import Banner from './Banner';
import BrandsLogo from './BrandsLogo';
import BuyingLuxury from './BuyingLuxury';
import FeaturesImg from './FeaturesImg';
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
            <FeaturesImg></FeaturesImg>
            <BrandsLogo></BrandsLogo>
        </>
    );
};

export default Home;