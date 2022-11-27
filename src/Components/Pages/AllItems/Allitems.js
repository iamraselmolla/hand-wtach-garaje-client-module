import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import Items from '../Shared/Items';
import { AuthContext } from '../../AuthContext/AuthProvider';

const Allitems = () => {
    const {user} = useContext(AuthContext)
    // const [allWatches, setWatches] = useState([])
    const {data: allWatches =[], isLoading, refetch } = useQuery({
        queryKey: ['all-items'],
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/all-items');
          const data = await res.json();
          return data;
        }
    });
    
   
  
   

    return (
        <section>
            <div className="container py-5">
                <div className="row text-center mb-4">
                    <h1 className="fw-bolder theme_color">
                       We have {allWatches?.length} unsold {allWatches?.length > 1 ? 'watches' : 'watch'}
                    </h1>
                </div>
                <div className="row">
                    {allWatches?.map(watch => <div key={watch?._id} className="col-md-6 my-2 "><Items refetch={refetch} watch={watch}></Items></div> )}
                </div>
            </div>
        </section>
    );
};

export default Allitems;