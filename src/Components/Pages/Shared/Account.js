import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle, FaEnvelope,FaTrash } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../AuthContext/AuthProvider';


const Account = ({ acc, index }) => {
    const handleVeiryfy = (id) => {
      if(window.confirm(`Do you want to verify  account ${acc?.username}`)){
        fetch(`http://localhost:5000/accounts/verify/${id}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            toast.success(`${acc?.username} has been verified`)
        })
      }
    }

    const date = new Date(acc?.insertTime).toLocaleString()
    return (
        <tr>
            <td>{index + 1}</td>
            <td> {acc?.username} </td>
            <td>{acc?.email} </td>
            <td>
                <PhotoProvider>
                    <div className="foo">
                        <PhotoView src={acc?.profilepicture}>
                            <img width="50" className='img-fluid rounded-circle' src={acc?.profilepicture} alt="" />
                        </PhotoView>
                    </div>
                </PhotoProvider>
            </td>
            <td>{acc?.accountType}</td>
            <td>{acc?.signupby === 'google' ? <FaGoogle></FaGoogle> : <FaEnvelope></FaEnvelope>}</td>
            <td>{date}</td>
            <td className='d-flex align-items-center'>{acc?.verified ? <span className="bg-success bg-opacity-50 px-1 text-white rounded">Verified</span> :<span onClick={() => handleVeiryfy(acc?._id)} style={{cursor: 'pointer'}} className="bg-info bg-opacity-50 px-1 text-white rounded">verify</span>}</td>
            <td><FaTrash title="Delete User" className="text-danger"></FaTrash> <img width="20px" title="Block User" src="https://i.ibb.co/xJBGWFz/blockuser.png" alt="" /> </td>
        </tr>
    );
};

export default Account;