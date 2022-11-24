import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <section className='py-5 text-center'>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="px-4 theme_border py-5 rounded">
                            <h1 className="fw-bolder mb-3">
                                Register Now!
                            </h1>
                            <Form className='text-start'>
                                <Form.Group className="mb-3" controlId="formBasicEmail2">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" className='rounded-5' placeholder="Username" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicName2">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" className='rounded-5' placeholder="example@gmail.com" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword2">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className='rounded-5' type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicFile2">
                                    <Form.Label>Profile Picture</Form.Label>
                                    <Form.Control className='rounded-5' type="file" placeholder="Profile Picture" />
                                </Form.Group>

                                <button className="theme_bg outline-0 border-0 px-5 py-3 fw-bolder text-white rounded">
                                    Register
                                </button>

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