import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Table } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const AllUploadedItems = () => {
    const { data: allWatches = [] } = useQuery({
        queryKey: ['all-items'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/all-uploaded-items');
            const data = await res.json();
            return data;
        }
    });
    let homeURL = window.location.host;
    return (
        <section>
            <div className="container-fluid">
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
                                    <Table bordered hover>
                                        <thead>
                                            <tr className='bg-black text-white fs-5'>
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

                                                    <tr className={`${s?.sold ? 'bg-danger text-white' : 'bg-primary text-white'}`}>
                                                        <td>{i + 1}</td>
                                                        <td className='text-white'> <Link to={`/details/items/${s?._id}`} className='text-decoration-none text-white'>  {s?.name.split(' ').length > 6 ? s?.name.split(' ').slice(0, 5) + '...' : s?.name} </Link></td>
                                                        <td> {s?.price} </td>
                                                        <td> <PhotoProvider>
                                                            <div className="foo">
                                                                <PhotoView src={s?.itemImage}>
                                                                <img src={s?.itemImage} width="50px" className='rounded-cricle' alt="Watch image"/>
                                                                </PhotoView>
                                                            </div>
                                                        </PhotoProvider> </td>
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