import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';
import Items from '../Shared/Items';

const AllAddedItems = () => {
    const { user } = useContext(AuthContext)
    const [allData, setAllData]= useState([])


    useEffect(() => {
            fetch(`http://localhost:5000/added-items?email=${user?.email}`)
            .then(res=> res.json())
            .then(data => setAllData(data))
    }, [user?.email, allData])
    return (
        <section>
            <div className="container">
                <div className="row">
                    <h1 className="theme_color fw-bolder text-center mb-4">
                        You added {allData?.length} {allData?.length > 1 ? 'Watches' : 'Watch'}
                    </h1>
                </div>
                <div className="row">
                    {allData && allData?.map(itemSingle => <div key={itemSingle?._id} className="col-md-6"><Items  watch={itemSingle}></Items></div> )}
                </div>
            </div>
        </section>
    );
};

export default AllAddedItems;