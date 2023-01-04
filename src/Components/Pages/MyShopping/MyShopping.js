
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { AuthContext } from '../../AuthContext/AuthProvider';
import MyshoppingItem from '../Shared/MyshoppingItem';

const MyShopping = () => {
    const { user } = useContext(AuthContext);
    const [allShopping, setAllShopping] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/my-shopping?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAllShopping(data))
            .catch(err => console.log(err.message))
    }, [user?.email])

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
                            {allShopping && allShopping?.map((s, i) => <MyshoppingItem s={s} i={i} key={s?._id}></MyshoppingItem> )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </section>
    );
};

export default MyShopping;