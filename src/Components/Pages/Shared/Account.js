import React from 'react';

const Account = ({acc,index}) => {
    return (
        <tr>
        <td>{index+1}</td>
        <td> {acc?.username} </td>
        <td>{acc?.email} </td>
        <td><img src={acc?.profilepicture} alt="" /> </td>
        <td>{acc?.accountType}</td>
        <td>{acc?.signupby}</td>
        <td>{Date(acc?.insertTime)}</td>
    </tr>
    );
};

export default Account;