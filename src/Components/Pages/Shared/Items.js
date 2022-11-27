import React from 'react';
import {  TiTick} from "react-icons/ti";

const Items = ({ watch }) => {
    const { _id, name, advertise, category, category_id, condition, description, duration, insertTime, itemImage, location, number, price, pruchingtime, reason,mainprice, repairOrDamage, sold, userEmail, username, userPfofilePicture } = watch;
    console.log(watch)
    return (
        <div className='item theme_border'>
            <img className='img-fluid' src={itemImage} alt="" />
            <div className="p-3 rounded-bottom">
                <div className="d-flex flex-wrap justify-content-between gap-2">
                    <div className="theme_border_2 px-2 py-1 rounded fw-bold">
                        {advertise ? 'Adertised' : 'Not adertised'}
                    </div>
                    <div className="theme_border_2 px-2 py-1 rounded fw-bold">
                        {sold ? 'Sold' : 'Not Sold'}
                    </div>
                    <div className="theme_border_2 px-2 py-1 rounded fw-bold">
                        {repairOrDamage ? 'Repaired' : 'Not Repaired'}
                    </div>
                </div>
            <h3 className="mb-0 mt-3">
                {name} <TiTick className='rounded-circle bg-primary fs-6 text-white'></TiTick>
            </h3>
           
           <h4 className="mb-1 fw-bolder theme_color">
                Selling Price: {price} 
            </h4>
            <del><small className='fw-bolder'>Original Price of Purchase: {mainprice}</small></del>
           
            <p className="text-muted mt-3 mb-1">
                <span className='fw-bolder text-black'>Product Description: </span> {description}
            </p>
            <p className="text-muted mb-1">
                <span className='fw-bolder text-black'>Product Used for: </span> {duration} month
            </p>
            <p className="text-muted mb-1">
                <span className='fw-bolder text-black'>Caregory: </span> {category} Watch
            </p>
            
            </div>
        </div>
    );
};

export default Items;