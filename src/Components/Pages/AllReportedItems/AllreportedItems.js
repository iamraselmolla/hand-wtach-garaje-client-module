import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Items from '../Shared/Items';

const AllreportedItems = () => {
    const url = `http://localhost:5000/reported/all-items`;
    const { data: reportedItems = [], isLoading, refetch } = useQuery({
        queryKey: ['all-items'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data
        }
    })
    return (
        <section>
            <div className="container">
                <div className="row text-center">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Watch Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>


                        {reportedItems?.map((s, i) => {
                        return <>
                           
                                <tr>
                                <td>{i + 1}</td>
                                <td> {s?.name} </td>
                                <td> {s?.price} </td>
                                <td> <img src={s?.itemImage} width="50px" className='rounded-cricle' alt="" srcset="" /> </td>
                                <th> <button className='theme_bg text-white fw-bold border-0 rounded px-2 py-1'>Remove Report</button> </th>
                            </tr>
                           

                        </>
                    })}

                        </tbody>
                    </Table>
                    
                </div>
            </div>
        </section>
    );
};

export default AllreportedItems;