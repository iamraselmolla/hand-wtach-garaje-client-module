import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Items from '../Shared/Items';

const Categories = () => {
   const [categoryData, setCategoryData] = useState(useLoaderData())
   console.log(categoryData)
    return (
        <section className='py-5'>
            <div className="container">
                <div className="row">
                    <h2 className="fw-bolder text-center theme_color">
                     We have {categoryData?.length} {categoryData?.length > 1 ? 'Watches' : 'Watch'} in this   {categoryData[0]?.category} Watch Category
                    </h2>
                </div>
                <div className="row mt-3">
                    {categoryData?.map(singleItem => <div className="col-md-6" key={singleItem?._id}>
                        <Items watch={singleItem}></Items>
                    </div> )}
                </div>
            </div>
        </section>
    );
};

export default Categories;