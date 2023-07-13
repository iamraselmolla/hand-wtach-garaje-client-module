import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleCategory from '../Shared/SingleCategory';

const ProductsCategoris = () => {
    const {data: categories = [], isLoading, refetch} = useQuery({
        queryKey: ['categoriess'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-gray.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })
    return (
        <section>
            <div className="container">
                <div className="row text-center">
                    <h5 className="mb-0 theme_color">
                        Browse Categoris
                    </h5>
                    <h2 className="fw-bold">
                        Check Our All Categories
                    </h2>
                    <p className="fs-5 w-75 mx-auto">
                        We are experts in finding the best watches from world-renowned brands including Rolex, Breitling, Bell & Ross, and many other brands.
                    </p>
                </div>
                <div className="row mt-4">
                   {categories?.map(category => <div key={category?._id} className="col-md-4 my-2 d-flex text-center flex-column align-items-center"> <SingleCategory dataCategory={category}></SingleCategory> </div> )}
                </div>
            </div>
        </section>
    );
};

export default ProductsCategoris;