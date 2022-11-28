import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout';
const stripePromise = loadStripe(process.env.REACT_APP_Stripe_Publish_key);

const PaymentItem = () => {
    const payForItem = useLoaderData();
    const { itemImage, price, description, condition, name, _id } = payForItem;;
    return (
        <section>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-8">
                        <img style={{ maxHeight: '300px' }} src={itemImage} className="img-fluid" alt="" />
                        <h2 className='fw-bolder'>{name}</h2>
                        <h3 className="fw-bolder theme_color">
                            Price: {price}$
                        </h3>
                        <p className="fw-bold">
                            {description}
                        </p>
                    </div>
                    <div className="col-md-4">
                        <img style={{ maxHeight: '200px' }} src={itemImage} clas="img-fluid" alt="" />
                        <p className="fw-bolder theme_color">
                            {name}
                        </p>
                        <small className='fw-bolder'>Price: {price}$</small>
                        <h3 className="fw-bolder mb-3">
                            Pay Now
                        </h3>
                        <Elements stripe={stripePromise}>
                            <Checkout  
                            prodcut_id={_id} 
                            booking={price} />
                        </Elements>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentItem;