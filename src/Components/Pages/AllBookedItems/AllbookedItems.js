import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { AuthContext } from '../../AuthContext/AuthProvider';
import ItemsTable from '../Shared/ItemsTable';

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
                        <Table striped bordered hover>
                            <thead>
                                <tr>
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
                                {bookedData &&  bookedData?.map((bookItem,i) => <ItemsTable index={i} data={bookItem} key={bookItem?._id}></ItemsTable>)}
                                
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllbookedItems;