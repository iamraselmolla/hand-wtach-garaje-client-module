import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import ItemsTable from '../Shared/ItemsTable';
import { BiSad } from 'react-icons/bi';


const AllbookedItems = () => {
    const { user } = useContext(AuthContext)
    const [bookedData, setBookedData] = useState([])
    useEffect(() => {
        fetch(`https://assignment-12-server-gray.vercel.app/booked?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookedData(data))
            .catch(err => console.log(err.message))
    }, [user?.email]);

    return (
        <section>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        {bookedData?.length > 0 ? 
                        <Table striped bordered hover>
                            <thead>
                                <tr className='bg-black text-white fs-5'>
                                    <th></th>
                                    <th>Watch Name</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Meeting Location</th>
                                    <th>Payment</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookedData && bookedData?.map((bookItem, i) => <ItemsTable index={i} data={bookItem} key={bookItem?._id}></ItemsTable>)}

                            </tbody>
                        </Table> :
                            <div className='text-center'>
                                <BiSad style={{fontSize: '80px'}} className='theme_color'></BiSad>
                                <h3 className='fw-bold'>You didn't booked any item. Please booked an item from <Link to="/all-items">here</Link></h3>
                            </div>

                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllbookedItems;