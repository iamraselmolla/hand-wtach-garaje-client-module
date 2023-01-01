import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Table } from 'react-bootstrap';
import Items from '../Shared/Items';
import ItemsTable from '../Shared/ItemsTable';

const AllUploadedItems = () => {
    const { data: allWatches = [], isLoading, refetch } = useQuery({
        queryKey: ['all-items'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/all-uploaded-items');
            const data = await res.json();
            return data;
        }
    });

    return (
        <section>
            <div className="container-fluid py-5">
                <div className="row text-center mb-4">
                    <h1 className="fw-bolder theme_color">
                        We had {allWatches?.length} total {allWatches?.length > 1 ? 'Watches' : 'Watch'}
                    </h1>
                </div>
                <>
            {allWatches?.length > 0 ?
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
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    {allWatches?.map((s, i) => {
                                        return <>

                                            <tr className={`${s?.sold ? 'bg-danger text-white' : ''}`}>
                                                <td>{i + 1}</td>
                                                <td> {s?.name} </td>
                                                <td> {s?.price} </td>
                                                <td> <img src={s?.itemImage} width="50px" className='rounded-cricle' alt="" srcset="" /> </td>
                                                <th> {s?.sold ? 'Sold' : 'Unsold'} </th>
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
            </div>

        </section>
    );
};

export default AllUploadedItems;