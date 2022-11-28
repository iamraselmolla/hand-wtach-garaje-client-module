import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { AuthContext } from '../../AuthContext/AuthProvider';

const MyShopping = () => {
    const { user } = useContext(AuthContext);

    const { data: allShopping = [] } = useQuery({
        queryKey: ['all-shopping'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/my-shopping?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <section>
            {allShopping?.length}
            <div className="container">
                <div className="row">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
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
                            {allShopping && allShopping?.map((s,i) => {
                               return <>
                              {console.log(s)}
                                <tr>
                                    <td>
                                    {i+1}
                                    </td>
                                    <td>{s?.productname}</td>
                                    <td>{s?.price}</td>
                                    <td> <img width="40px" className='rounded-circle' src={s?.img} alt=""/> 
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