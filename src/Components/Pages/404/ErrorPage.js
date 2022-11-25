import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='text-center'>
            <div className="container">
                <img className='img-fluid' src="404.png" alt="" />
            </div>
            <div className="mt-4 pb-3">
                <p className="fw-bolder">
                    The page your requested has moved or deleted!
                </p>
                <Link to="/">
                <button className="theme_bg outline-0 border-0 px-5 py-3 fw-bolder text-white rounded">
                        Back to Home
                    </button>
                </Link>

            </div>
        </section>
    );
};

export default ErrorPage;