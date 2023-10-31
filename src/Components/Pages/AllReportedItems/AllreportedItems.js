import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Items from '../Shared/Items';

const AllreportedItems = () => {
    const url = `https://assignment-12-server-9btb6ecgx-iamraselmolla.vercel.app/reported/all-items`;
    const { data: reportedItems = [], isLoading, refetch } = useQuery({
        queryKey: ['all-items'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data
        }
    });
    const handleResolveReport = (id, name) => {
        fetch(`https://assignment-12-server-9btb6ecgx-iamraselmolla.vercel.app/items/reported-solved/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                return toast.success(`${name} report removed`)

            })
            .catch(err => console.log(err.message))
    }

    return (
        <>
            {reportedItems?.length > 0 ?
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
                                                <th> <button onClick={() => handleResolveReport(s?._id, s?.name)} className='theme_bg text-white fw-bold border-0 rounded px-2 py-1'>Remove Report</button> </th>
                                            </tr>


                                        </>
                                    })}

                                </tbody>
                            </Table>

                        </div>
                    </div>
                </section>
                : <h2 className="fw-bolder text-center text-success">
                    You have no reported items
                </h2>
            }

        </>
    );
};

export default AllreportedItems;