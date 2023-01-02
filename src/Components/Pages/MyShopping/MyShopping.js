import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const MyShopping = () => {
    const { user } = useContext(AuthContext);
    const [allShopping, setAllShopping] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/my-shopping?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAllShopping(data))
            .catch(err => console.log(err.message))
    }, [])


    // Axios request
    //  const handleAxios = () => {
    //     const getAxiosData = async () => {
    //         try {
    //             const resposne = await axios(`http://localhost:5000/my-shopping?email=${user?.email}`);
    //             setAllShopping(resposne?.data)
    //         }
    //         catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getAxiosData()
    //  }
    return (
        <section>
            <div className="container">
                <div className="row text-center">
                    <Table striped bordered hover>
                        <thead>
                            <tr className='bg-black text-white fs-5'>
                                <th></th>
                                <th>Watch Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Payment by</th>
                                <th>Payment Id</th>
                                <th>Payment At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allShopping?.length > 0 && allShopping?.map((s, i) => {
                                return <>
                                    <tr>
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
                                </>
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        </section>
    );
};

export default MyShopping;