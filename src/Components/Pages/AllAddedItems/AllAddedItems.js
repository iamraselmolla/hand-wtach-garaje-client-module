import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';
import Items from '../Shared/Items';
import { BiSad, Bisad } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const AllAddedItems = () => {
    const { user } = useContext(AuthContext)
    const [allData, setAllData] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/added-items?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [user?.email])
    return (
        <section>
            <div className="container">
                <div className="row">
                    {allData?.length > 0 && <h1 className="theme_color fw-bolder text-center mb-4">
                        You added {allData?.length} {allData?.length > 1 ? 'Watches' : 'Watch'}
                    </h1>}
                </div>
                <div className="row">
                    {allData?.length > 0 && allData?.map(itemSingle => <div key={itemSingle?._id} className="col-md-6"><Items watch={itemSingle}></Items></div>)}
                    {!allData && <div className='text-center'>
                        <BiSad style={{ fontSize: '80px' }} className='theme_color'></BiSad>
                        <h3 className='fw-bold'>You didn't add any item. Please add an item from <Link to="/dashboard/add-an-item">here</Link></h3>
                    </div>}
                </div>
            </div>
        </section>
    );
};

export default AllAddedItems;