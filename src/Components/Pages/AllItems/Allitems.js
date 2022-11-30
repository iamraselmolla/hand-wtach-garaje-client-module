import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import Items from '../Shared/Items';
import { AuthContext } from '../../AuthContext/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Form, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';

const Allitems = () => {
    const { user, accountType } = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState(null);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate()
    // const [allWatches, setWatches] = useState([])
    const { data: allWatches = [], isLoading, refetch } = useQuery({
        queryKey: ['all-items'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-gray.vercel.app/all-items');
            const data = await res.json();
            return data;
        }
    });
    if(isLoading){
        return <>
        <div className="text-center">
        <div style={{position: 'absolute', top: '48%', left: '48%'}} className="spinner-border" role="status">
        </div>
      </div>
        </>
    }
    const handleBooking = (e) => {
        e.preventDefault();
        const number = e.target.phonenumber.value;
        const location = e.target.meetlocation.value;
        const category = modalData.category;
        const category_id = modalData.category_id;
        const email = user?.email;
        const name = user?.displayName;
        const img = modalData?.itemImage;
        const productname = modalData?.name;
        const price = modalData?.price
        const product_id = modalData?._id;
        const paid = false;
        const insertTime = new Date().getTime();
        const allData = { number, location, category, category_id, email, name, img, productname, price, product_id, paid, insertTime }
        console.log(allData);
        fetch('https://assignment-12-server-gray.vercel.app/booked', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)

        })
        .then(res => res.json())
        .then(data => {
            toast.success(`${modalData.name} has been booked`)
            navigate('/dashboard/all-booked-items')
        })

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
                    {allWatches?.map(watch => <div key={watch?._id} className="col-md-6 my-2 "><Items   handleShow={handleShow} setModalData={setModalData} refetch={refetch} watch={watch}></Items></div>)}
                </div>
            </div>
            {modalData &&
                <Modal scrollable show={show} onHide={handleClose}>
                     <Modal.Header closeButton>
                        <Modal.Title className='fw-bolder theme_color'> Book:  {modalData?.name.split(' ').length > 10 ? modalData?.name.split(' ').slice(0,10).join(' '): modalData?.name} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Form onSubmit={handleBooking}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control defaultValue={user?.email} disabled type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control disabled defaultValue={user?.displayName} type="text" placeholder="Enter Username" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Watch name</Form.Label>
                                <Form.Control disabled defaultValue={modalData?.name} type="text" placeholder="Watch Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Watch Price</Form.Label>
                                <Form.Control disabled defaultValue={modalData?.price} type="text" placeholder="Watch Price" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Customer Number</Form.Label>
                                <Form.Control required name="phonenumber" type="number" placeholder="Your Number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Meeting Location</Form.Label>
                                <Form.Control required name="meetlocation" type="text" placeholder="Safe Meeting Location" />
                            </Form.Group>

                            <button style={{ cursor: 'pointer' }} className="theme_bg border-0 text-white text-center w-100 fw-bolder px-3 py-2 rounded">
                                Book Now
                            </button>
                        </Form>
                    </Modal.Body>

                </Modal>
            }
        </section>
    );
};

export default Allitems;