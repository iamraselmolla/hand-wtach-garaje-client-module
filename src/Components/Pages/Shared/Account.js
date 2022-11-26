import React from 'react';
import { FaGoogle, FaEnvelope,FaTrash } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Account = ({ acc, index }) => {

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
            <td><FaTrash title="Delete User" className="text-danger"></FaTrash> <img width="20px" title="Block User" src="https://i.ibb.co/xJBGWFz/blockuser.png" alt="" /> </td>
        </tr>
    );
};

export default Account;