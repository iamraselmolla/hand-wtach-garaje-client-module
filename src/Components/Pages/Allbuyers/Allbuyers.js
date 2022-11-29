import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { AuthContext } from '../../AuthContext/AuthProvider';
import Account from '../Shared/Account';


const Allbuyers = () => {
    const { user } = useContext(AuthContext)
    const [accountReload, setAccountReload] = useState(false)
    const [accounts, setAccounts] = useState([]);
    useEffect(() => {
        fetch('https://assignment-12-server-gray.vercel.app/accounts?account=buyer', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            } 
        })
    .then(res => res.json())
    .then(accounts => setAccounts(accounts))
    .catch(err => console.log(err.message));
},[user?.email,accountReload ])
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
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts && accounts?.map((acc, i) => <Account accountReload={accountReload} setAccountReload={setAccountReload} index={i} acc={acc} key={acc._id}></Account>)}

                </tbody>
            </Table>
        </>
    );
};

export default Allbuyers;