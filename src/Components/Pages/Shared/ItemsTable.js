import React from 'react';
import { Link } from 'react-router-dom';

const ItemsTable = ({index, data}) => {
    const {productname, price,img,location,paid,product_id} = data;
    return (
        <tr>
            <td>{index+1}</td>
            <td>{productname?.split(' ').length>6 ? productname?.split(' ').slice(0,6).join(' '): productname}</td>
            <td>{price}</td>
            <td> <img src={img} width="50px" alt="" className='rounded-cricle' /> </td>
            <td>{location}</td>
            <td>{paid ?  <span style={{cursor: 'pointer'}} className="bg-success px-2 py-1 fw-bold text-white rounded">Paid</span> : 
            <Link className='text-decoration-none' to={`/pay/${product_id}`}>
                <span style={{cursor: 'pointer'}} className="bg-info px-2 py-1 fw-bold text-white rounded">Pay Now</span>
            </Link>   }</td>
            <td>Action</td>
        </tr>
    );
};

export default ItemsTable;