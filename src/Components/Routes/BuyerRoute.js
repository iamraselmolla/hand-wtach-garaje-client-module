import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';

const BuyerRoute = ({children}) => {
    const {typeOfAccount, loading} = useContext(AuthContext);
    if(loading){
        return (<div className="text-center">
        <div style={{position: 'absolute', top: '48%', left: '48%'}} className="spinner-border" role="status">
        </div>
      </div>)
    }

    if (typeOfAccount === 'buyer'){
        return children;
    }
    return <Navigate to="/"></Navigate>;

    
};

export default BuyerRoute;