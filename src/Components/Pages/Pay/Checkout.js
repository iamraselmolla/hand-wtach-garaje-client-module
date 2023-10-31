import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ booking, prodcut_id }) => {
    const [cardError, setError] = useState('');
    const [clientSecret, setClientSecret] = useState("")
    const [paymentLoading, setPaymentLoading] = useState(false)
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate()
    const price = booking;
    console.log(price)

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://assignment-12-server-9btb6ecgx-iamraselmolla.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('access-token')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]
    );

    const handleSubmit = async (event) => {

        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setError(error.message)
        } else {
            setPaymentLoading(true)
            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
                clientSecret,
                {
                    payment_method: {
                        card: card
                    },
                },
            );
            if (confirmError) {
                setPaymentLoading(false)
                setError(confirmError.message)
                return;
            }
            console.log(paymentIntent)
            if (paymentIntent?.status === "succeeded") {
                setPaymentLoading(true)

                setError(null)
                const payment_id = paymentIntent?.id
                const payment_type = paymentMethod?.card.brand + " " + paymentMethod.type;
                const paymentTime = new Date().getTime();
                const allPaymentInfo = { payment_id, payment_type, paymentTime }
                fetch(`https://assignment-12-server-9btb6ecgx-iamraselmolla.vercel.app/payment-done/${prodcut_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(allPaymentInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        fetch(`https://assignment-12-server-9btb6ecgx-iamraselmolla.vercel.app/items/sold-out/${prodcut_id}`, {
                            method: 'PUT'
                        })
                            .then(res => res.json())
                            .then(data => {
                                setPaymentLoading(false)
                                toast.success(`Payment Successfull`)

                                navigate('/dashboard/my-shopping/')
                            })
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err.message))
            }
        }

    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                className={`theme_bg mt-3 rounded  border-0 w-100 
             text-white px-3 py-2 fw-bolder ${paymentLoading ? 'd-none' : 'd-block'}`} type="submit"
                disabled={!stripe
                    || !clientSecret
                }>
                Pay Now
            </button>
            <button className={`btn w-100 btn-primary ${paymentLoading ? 'd-block' : 'd-none'}`} type="button" disabled>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Processing
            </button>
            {cardError && <p className="text-danger">{cardError}</p>}
        </form>
    );
};

export default Checkout;