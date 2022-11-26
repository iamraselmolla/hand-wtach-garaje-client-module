import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';
import Account from '../Shared/Account';
import Table from 'react-bootstrap/Table';

const Allusers = () => {
    const { user } = useContext(AuthContext)
    const [accounts, setAccounts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/accounts?account=all')
            .then(res => res.json())
            .then(data => setAccounts(data))
            .catch(err => console.log(err.message))
    }, [user?.email])
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th></th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Profile Picture</th>
                    <th>Account Type</th>
                    <th>Signup by</th>
                    <th>Signup at</th>
                </tr>
            </thead>
            <tbody>
                {accounts?.map((acc, i) => <Account index={i} acc={acc} key={acc._id}></Account>)}

            </tbody>
        </Table>
    );
};

export default Allusers;