import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import Items from '../Shared/Items';

const Categories = () => {
    const { user, accountType } = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState(null);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate()
   const [categoryData, setCategoryData] = useState(useLoaderData())
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
    fetch('http://localhost:5000/booked', {
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
        <section className='py-5'>
            <div className="container">
                <div className="row">
                    <h2 className="fw-bolder text-center theme_color">
                     We have {categoryData?.length} {categoryData?.length > 1 ? 'Watches' : 'Watch'} in this   {categoryData[0]?.category} Watch Category
                    </h2>
                </div>
                <div className="row mt-3">
                    {categoryData?.map(singleItem => <div className="col-md-6" key={singleItem?._id}>
                        <Items handleShow={handleShow} setModalData={setModalData} watch={singleItem}></Items>
                    </div> )}
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

export default Categories;