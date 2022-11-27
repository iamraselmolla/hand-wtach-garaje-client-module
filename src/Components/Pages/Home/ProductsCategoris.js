import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ProductsCategoris = () => {
    const {data: categories = [], isLoading, fetch} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json()
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
                        Check Our All Categors Product
                    </h2>
                    <p className="fs-5 w-75 mx-auto">
                        We are experts in finding the best watches from world-renowned brands including Rolex, Breitling, Bell & Ross, and many other brands.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsCategoris;