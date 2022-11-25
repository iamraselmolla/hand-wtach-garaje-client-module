import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';


const Login = () => {
    const googleAuth = new GoogleAuthProvider();
    const { loginWithGoogle, login } = useContext(AuthContext);
    const [loginError, setError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    // Google login
    const handleGoogleSign = () => {
        loginWithGoogle(googleAuth)
            .then(res => {

                const accountType = 'buyer'
                const username = res.user.displayName || 'Not Provided from authentic site';
                const email = res.user.email;
                const insertTime = new Date().getTime();
                const profilepicture = res.user.photoURL || 'Not provided from authentic site';
                const signupby = 'google'
                const allData = { accountType, username, email, profilepicture,signupby, insertTime }


                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(allData)
                })
                    .then(res2 => res2.json())
                    .then(data => {
                        setError(null)
                        navigate(from, { replace: true });
                        toast.success('Login with Google Successful')
                    })
                    .catch(err => console.log(err.message))
            })
            .catch(err => setError(err.message))
    }
    // Email Login
    const handleEmailLogin = (e) => {
        e.preventDefault()
        login(e.target.email.value, e.target.password.value)
            .then(res => {
                console.log(res.user)

            })
            .catch(err => setError(err.message))
    }
    return (
        <section className='py-5 text-center'>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="px-4 theme_border py-5 rounded">
                            <h1 className="fw-bolder mb-3">
                                Login
                            </h1>
                            <Form onSubmit={handleEmailLogin} className='text-start'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" type="email" className='rounded-5' placeholder="example@gmail.com" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" className='rounded-5' type="password" placeholder="Password" />
                                </Form.Group>
                                <button className="theme_bg outline-0 border-0 px-5 py-3 fw-bolder text-white rounded">
                                    Login
                                </button>
                                {loginError && <p className='text-danger fw-bolder'>{loginError}</p>}
                            </Form>

                            <div className="login-with-google">
                                <h4 className="mt-3 fw-bolder">
                                    Sign in using
                                </h4>
                                <Button onClick={handleGoogleSign} variant="theme_bg" className='w-100 fw-bolder text-white'><FaGoogle></FaGoogle> Google</Button>


                            </div>
                            <div className="d-flex mt-2 justify-content-between">
                                <Link className='text-decoration-none theme_color fw-bolder' to="/forget-password">Forget Password?</Link>
                                <span className='text-white fw-bolder'>
                                    New Here?
                                    <Link className='text-decoration-none theme_color fw-bolder' to="/register"> Register!</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;