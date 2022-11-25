import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const googleAuth = new GoogleAuthProvider();
    const [error, setError] = useState('')
    const imageBbApiKey = process.env.REACT_APP_imageBBAPI;
    const [setRegisterBtnDIsable, setBtnStatus] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault()

        createUser(e.target.email.value, e.target.password.value)
            .then(res => {
                setBtnStatus(true)
                const accountType = e.target.sellerBuyer.value
                const username = e.target.username.value;
                const email = e.target.email.value;
                const password = e.target.password.value;
                const formData = new FormData();
                const profilepictureName = e.target.profilepicture.files[0];
                formData.append('image', profilepictureName)
                fetch(`https://api.imgbb.com/1/upload?key=${imageBbApiKey}`, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(imageData => {
                        const insertTime = new Date().getTime();
                        const profilepicture = imageData.data.url;
                        const allData = { accountType, username, email, password, profilepicture, insertTime }
                        
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(allData)
                        })
                            .then(res2 => res2.json())
                            .then(data => {
                                setError('')
                                toast.success('Registration Successful')
                                setBtnStatus(false)
                                e.target.reset()
                                navigate('/login')
                            })
                    })
                    .catch(err => console.log(err.message))

                // e.target.reset()

            })
            .catch(err => setError(err.message));
    }
    return (
        <section className='py-5 text-center'>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="px-4 theme_border py-5 rounded">
                            <h1 className="fw-bolder mb-3">
                                Register Now!
                            </h1>
                            <Form onSubmit={handleRegister} className='text-start'>
                                <h5 className="fw-bolder">
                                    Account Type
                                </h5>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="sellerBuyer" id="inlineRadio1" value="seller" />
                                    <label className="form-check-label" htmlFor="inlineRadio1">Seller</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="sellerBuyer" id="inlineRadio2" value="buyer" />
                                    <label className="form-check-label" htmlFor="inlineRadio2">Buyer</label>
                                </div>
                                <Form.Group className="mb-3 mt-4" controlId="formBasicEmail2">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control name="username" type="text" className='rounded-5' placeholder="Username" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicName2">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" type="email" className='rounded-5' placeholder="example@gmail.com" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword2">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" className='rounded-5' type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicFile2">
                                    <Form.Label>Profile Picture</Form.Label>
                                    <Form.Control name="profilepicture" className='rounded-5' type="file" placeholder="Profile Picture" />
                                </Form.Group>

                                <button className="theme_bg outline-0 border-0 px-5 py-3 fw-bolder text-white rounded">
                                    Register
                                </button>
                                {setRegisterBtnDIsable && <p>.......</p>}
                                {error && <p className='text-danger fw-bold'>{error}</p>}

                            </Form>
                            <div className="d-flex mt-2">
                                Already Registered? <Link className='text-decoration-none ms-2 theme_color fw-bolder' to="/login">Login</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;