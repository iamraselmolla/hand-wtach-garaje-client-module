import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { AuthContext } from '../../AuthContext/AuthProvider';
import Account from '../Shared/Account';

const AllAdmin = () => {
    const { user } = useContext(AuthContext)
    const [accounts, setAccounts] = useState([]);
    const [accountReload, setAccountReload] = useState(false)
    useEffect(() => {
        fetch('https://assignment-12-server-9btb6ecgx-iamraselmolla.vercel.app/accounts?account=admin', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setAccounts(data))
            .catch(err => console.log(err.message))
    }

        , [user?.email],)
    return (
        <>
            <Table className="text-center" striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Profile Picture</th>
                        <th>Account Type</th>
                        <th>Signup by</th>
                        <th>Signup at</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts?.map((acc, i) => <Account index={i} acc={acc} key={acc._id}></Account>)}

                </tbody>
            </Table>
        </>
    );
};

export default AllAdmin;