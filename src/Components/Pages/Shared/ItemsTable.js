import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai'

const ItemsTable = ({ index, data }) => {
    const { name, itemImage, price, location, sold, _id } = data;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name?.split(' ').length > 6 ? name?.split(' ').slice(0, 6).join(' ') : name}</td>
            <td>{price}</td>
            <td>
                <PhotoProvider>
                    <div className="foo">
                        <PhotoView src={itemImage}>
                            <img src={itemImage} width="50px" alt="" className='rounded-cricle' />
                        </PhotoView>
                    </div>
                </PhotoProvider>
            </td>
            <td>{location}</td>
            <td>{sold ? <span style={{ cursor: 'pointer' }} className="bg-success px-2 py-1 fw-bold text-white rounded">Paid</span> :
                <Link className='text-decoration-none' to={`/pay/${_id}`}>
                    <span style={{ cursor: 'pointer' }} className="bg-info px-2 py-1 fw-bold text-white rounded">Pay Now</span>
                </Link>}</td>
            <td>
                <AiFillDelete className='fs-3 text-danger'></AiFillDelete>
            </td>
        </tr>
    );
};

export default ItemsTable;