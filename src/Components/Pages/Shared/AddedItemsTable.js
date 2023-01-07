import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const AddedItemsTable = ({item, i}) => {
    return (
        <>
            <td>{i + 1}</td>
            <td>{item?.name}</td>
            <td>{item?.price}</td>
            <td> 
            <PhotoProvider>
                <div className="foo text-center position-relative">
                    <PhotoView src={item?.itemImage}>
                        <img style={{ maxWidth: '50px' }} className='img-fluid rounded' src={item?.itemImage} alt="" />
                    </PhotoView>
                </div>
            </PhotoProvider>
            
            </td>
            <td>{item?.sold ? 'Sold' : 'Not Sold'}</td>
        </>
    );
};

export default AddedItemsTable;