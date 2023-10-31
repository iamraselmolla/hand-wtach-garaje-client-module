import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';
import Account from '../Shared/Account';
import Table from 'react-bootstrap/Table';

const Allusers = () => {
    const { user } = useContext(AuthContext)
    const [accounts, setAccounts] = useState([]);
    const [accountReload, setAccountReload] = useState(false)
    useEffect(() => {
        fetch('https://assignment-12-server-9btb6ecgx-iamraselmolla.vercel.app/accounts?account=all', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setAccounts(data))
            .catch(err => console.log(err.message))
    }, [user?.email, accounts])
    return (
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
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {accounts?.map((acc, i) => <Account accountReload={accountReload} setAccountReload={setAccountReload} index={i} acc={acc} key={acc._id}></Account>)}

            </tbody>
        </Table>
    );
};

export default Allusers;