import { async } from '@firebase/util';
import { PaymentElement } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Verification = () => {
    const [loader, setLoader] = useState(false)
    const [notFound, setNotFound] = useState()
    const [paymentData, setPaymentData] = useState();
    const handleVerify = async (e) => {
        try {
            setPaymentData(null)
            setLoader(true)
            e.preventDefault();
            const res = await fetch(`https://assignment-12-server-gray.vercel.app/payment-verification?paymentID=${e.target.paymentid.value}`);
            const newPaymentData = await res.json();

            setLoader(false)
            console.log(newPaymentData);
            e.target.reset()
            setNotFound(null)
            return setPaymentData(newPaymentData);
        } catch {
            setLoader(false)
            setNotFound('Data not found. Please check it again')
        }
        finally{
            setLoader(false)
        }
    }

    return (
        <section>
            <div className="container py-5">
                <div className="row">

                    <div className="col-md-3 mx-auto">
                        <Form onSubmit={handleVerify}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Input Payment ID here to verify</Form.Label>
                                <Form.Control name="paymentid" type="text" placeholder="Payment ID" />
                            </Form.Group>
                            <button type='submit' className="theme_bg w-100 fw-bolder text-white border-0 rounded py-2 px-2">
                                {loader ? 'Verifying' : 'Verify'}
                            </button>
                        </Form>
                    </div>
                </div>
                {paymentData &&
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <>
                                <h2 className="fw-bold mb-4">
                                    Product Information
                                </h2>
                                <img className='img-fluid' style={{ maxHeight: '300px' }} src={paymentData?.img} alt="" />
                                <h3 className="mt-3">
                                    <Link to={`/details/items/${paymentData?.product_id}`} className="text-decoration-none"><b>Product Name:</b> {paymentData?.productname}</Link>
                                </h3>
                            </>


                        </div>
                        <div className="col-md-4">
                            <h2 className="fw-bold mb-4">
                                Payment Information
                            </h2>
                            <h5 className="fw-bolder theme_color">
                                Price: {paymentData?.price}$
                            </h5> 
                            <p className="mb-2">
                                <b>Card: </b> {paymentData?.payment_type}
                            </p>
                            <p className="mb-2">
                                <b>Booked At: </b> {new Date(paymentData?.insertTime).toLocaleString()}
                            </p>
                            <p className="mb-2">
                                <b>Payment At: </b> {new Date(paymentData?.paymentTime).toLocaleString()}
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h2 className="fw-bold mb-4">
                                Customer Information
                            </h2>
                            <h3>
                                <b>Name:</b> {paymentData?.name}
                            </h3>
                            <p className="mb-2">
                                <b>Email: </b> {paymentData?.email}
                            </p>
                            <p className="mb-2">
                                <b>Phone: </b> {paymentData?.number}
                            </p>
                            <p className="mb-2">
                                <b>Meeting Location: </b> {paymentData?.location}
                            </p>

                        </div>
                        {notFound && <p className='text-danger fs-5 fw-bolder'>{notFound}</p>}
                    </div>
                }
            </div>
        </section>
    );
};

export default Verification;