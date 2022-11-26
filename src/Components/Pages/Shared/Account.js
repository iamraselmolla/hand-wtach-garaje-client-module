import React from 'react';
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
                            <img src={acc?.profilepicture} alt="" />
                        </PhotoView>
                    </div>
                </PhotoProvider>
            </td>
            <td>{acc?.accountType}</td>
            <td>{acc?.signupby}</td>
            <td>{date}</td>
        </tr>
    );
};

export default Account;