import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import Items from '../Shared/Items';

const Allitems = () => {
    const [allWatches, setWatches] = useState([])
    const [showLoder, setLoader] = useState(false)
    // const {allWatches, isLoading,refetch } = useQuery({
    //     queryKey: ['all-items'],
    //     queryFn: async () => {
    //       const res = await fetch('http://localhost:5000/all-items');
    //       const allWatches = await res.json();
    //       return allWatches;
    //     }
    // });
    useEffect(() => {
        fetch('http://localhost:5000/all-items')
        .then(res => {
            
            return res.json()
        })
        .then(data => {
            setLoader(true)
            setWatches(data)
            setLoader(false)
        } )
        .catch(err => console.log(err))
    },[]);
    if(showLoder){
        return alert()
    }
   

    return (
        <section>
            <div className="container py-5">
                <div className="row text-center mb-4">
                    <h1 className="fw-bolder theme_color">
                       We have {allWatches?.length} unsold {allWatches?.length > 1 ? 'watches' : 'watch'}
                    </h1>
                </div>
                <div className="row">
                    {allWatches?.map(watch => <div className="col-md-4 my-2 "><Items key={watch._id} watch={watch}></Items></div> )}
                </div>
            </div>
        </section>
    );
};

export default Allitems;