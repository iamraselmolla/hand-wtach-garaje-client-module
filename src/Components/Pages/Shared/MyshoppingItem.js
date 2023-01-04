import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const MyshoppingItem = ({s,i}) => {
    return (
        <tr key={s?._id}>
        <td>
            {i + 1}
        </td>
        <td><Link className='text-decoration-none' to={`/details/items/${s?._id}`}>{s?.productname}</Link></td>
        <td>{s?.price}$</td>
        <td>
            <PhotoProvider>
                <div className="foo">
                    <PhotoView src={s?.img}>
                        <img width="40px" className='rounded-circle' src={s?.img} alt="" />
                    </PhotoView>
                </div>
            </PhotoProvider>

        </td>
        <td>{s?.payment_type}</td>
        <td>{s?.payment_id}</td>
        <td>
            {new Date(s?.paymentTime).toLocaleString()}
        </td>
    </tr>
    );
};

export default MyshoppingItem;