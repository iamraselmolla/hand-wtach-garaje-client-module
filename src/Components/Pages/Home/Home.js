import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisedItems from './AdvertisedItems';
import Banner from './Banner';
import BrandsLogo from './BrandsLogo';
import BuyingLuxury from './BuyingLuxury';
import FeaturesImg from './FeaturesImg';
import './Home.css'
import ProductsCategoris from './ProductsCategoris';
import Steps from './Steps';

const Home = () => {
    const { data : advertidesProducts = [], refetch } = useQuery({
        queryKey: ['advertised-items'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-gray.vercel.app/advertised-items?limit=3');
            const data = res.json();
            return data;
        }
    })
    return (
        <>
            <Banner></Banner>
            <Steps></Steps>
            {advertidesProducts?.length > 0 &&  <AdvertisedItems allData={advertidesProducts}></AdvertisedItems>}
            <BuyingLuxury></BuyingLuxury>
            <ProductsCategoris></ProductsCategoris>
            <FeaturesImg></FeaturesImg>
            <BrandsLogo></BrandsLogo>
        </>
    );
};

export default Home;