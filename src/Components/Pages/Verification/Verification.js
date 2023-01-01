import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';

const Verification = () => {
    const [loader, setLoader] = useState(false)
    const [paymentData, setPaymentData] = useState({})
    const handleVerify = async (e) => {
        setLoader(true)
        e.preventDefault();
        const res = await fetch(`http://localhost:5000/payment-verification?paymentID=${e.target.paymentid.value}`);
        const newPaymentData = await res.json();
        setLoader(false)
        return setPaymentData(newPaymentData);
    }
   
    console.log(paymentData)
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
                                Verify
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Verification;