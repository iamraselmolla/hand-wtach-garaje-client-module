import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Items from '../Shared/Items';

const AllreportedItems = () => {
    const url = `http://localhost:5000/reported/all-items`;
    const { data: reportedItems = [], isLoading, refetch } = useQuery({
        queryKey: ['all-items'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data
        }
    })
    return (
        <section>
            <div className="container">
                <div className="row">
                    {reportedItems?.map(s => <div key={s?._id} className="col-md-6 position-relative"> <Items watch={s}></Items> </div>)}
                </div>
            </div>
        </section>
    );
};

export default AllreportedItems;