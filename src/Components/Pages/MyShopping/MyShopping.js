
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import MyshoppingItem from '../Shared/MyshoppingItem';
import {BiSad} from 'react-icons/bi'

const MyShopping = () => {
    const { user } = useContext(AuthContext);
    const [allShopping, setAllShopping] = useState([])


    useEffect(() => {
        fetch(`https://assignment-12-server-gray.vercel.app/my-shopping?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAllShopping(data))
            .catch(err => console.log(err.message))
    }, [user?.email])

    return (
        <section>
            <div className="container">
                <div className="row text-center">
                    {allShopping?.length > 0 ?
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
                                {allShopping && allShopping?.map((s, i) => <MyshoppingItem s={s} i={i} key={s?._id}></MyshoppingItem>)}
                            </tbody>

                        </Table>
                        :
                        <div className="text-center">
                             <BiSad style={{fontSize: '80px'}} className='theme_color'></BiSad>

: <h3 className='fw-bold'>You didn't buy any item. Please booked an first from <Link className='text-decoration-none' to="/all-items">here</Link></h3>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default MyShopping;