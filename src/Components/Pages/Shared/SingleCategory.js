import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({dataCategory}) => {
    const {category, category_id, img} = dataCategory
    return (
        <div className="theme_border px-3 py-3 rounded">
             <img style={{maxHeight: '260px'}} src={img} alt="" className='img-fluid'/>
           <Link to={`/categories/${category_id}`} className='text-decoration-none theme_color'>
           
           <h2 className="fw-bolder text-uppercase">
                {category} Watch
                </h2></Link>
        </div>
    );
};

export default SingleCategory;