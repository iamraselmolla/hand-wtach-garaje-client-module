import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';
import Items from '../Shared/Items';

const AllAddedItems = () => {
    const { user } = useContext(AuthContext)
    const [addedItems, setAddedItems] = useState([]);
    const [reload, setReLoader]= useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/added-items?email=${user?.email}`)
        .then(res=> res.json())
        .then( data => setAddedItems(data))
        .catch(err => console.log(err))
    }, [user?.email,reload])
    // const 
    return (
        <section>
            <div className="container">
                <div className="row">
                    <h1 className="theme_color fw-bolder text-center mb-4">
                        You added {addedItems?.length} {addedItems?.length > 1 ? 'Watches' : 'Watch'}
                    </h1>
                </div>
                <div className="row">
                    {addedItems && addedItems.map(itemSingle => <div key={itemSingle?._id} className="col-md-4"><Items setReLoader={setReLoader} reload={reload} watch={itemSingle}></Items></div> )}
                </div>
            </div>
        </section>
    );
};

export default AllAddedItems;