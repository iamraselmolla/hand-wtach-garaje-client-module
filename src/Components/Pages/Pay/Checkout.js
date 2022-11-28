import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ booking, prodcut_id }) => {
    const [cardError, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate()
    // const [clientSecret, setClientSecret] = useState('');
    // useEffect(() => {
    //     // Create PaymentIntent as soon as the page loads
    //     fetch("http://localhost:5000/create-payment-intent", {
    //       method: "POST",
    //       headers: { 
    //         "content-Type": "application/json"
    //      },
    //       body: JSON.stringify({booking}),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => setClientSecret(data.clientSecret));
    //   }, [booking]);

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
            setError(null)
            console.log(paymentMethod)
            const payment_id = paymentMethod.id
            const payment_type = paymentMethod.card.brand + " " + paymentMethod.type;
            const paymentTime = new Date().getTime();
            const allPaymentInfo = { payment_id, payment_type, paymentTime }
            fetch(`http://localhost:5000/payment-done/${prodcut_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(allPaymentInfo)
            })
                .then(res => res.json())
                .then(data => {
                    fetch(`http://localhost:5000/items/sold-out/${prodcut_id}`, {
                        method: 'PUT'
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success(`Payment Successfull`)
                            navigate('/dashboard/my-shopping/')
                        })
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err.message))
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
            <button className='theme_bg mt-3 rounded  border-0 w-100 text-white px-3 py-2 fw-bolder' type="submit" disabled={!stripe
                // || clientSecret
            }>
                Pay
            </button>
            {cardError && <p className="text-danger">{cardError}</p>}
        </form>
    );
};

export default Checkout;