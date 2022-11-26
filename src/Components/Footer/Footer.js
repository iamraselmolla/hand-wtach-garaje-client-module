import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='py-3 text-center bg-black'>
            <div className="container">
                <div className="row">
                    <div className="justify-content-center align-content-center col d-flex">
                        <img width="60" src="https://i.ibb.co/hFhmqHh/logo.png" alt="Footer logo" />
                        <div className="d-flex gap-4 ms-3 mt-3">
                            <Link className='text-decoration-none text-white py-1  fw-bolder' to="/">Home</Link>
                            <Link className='text-decoration-none text-white py-1  fw-bolder' to="/login">Login</Link>
                            <Link className='text-decoration-none text-white py-1  fw-bolder' to="/register">Register</Link>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;