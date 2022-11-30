import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const Register = () => {
    const { createUser, updateUserInfo, logOut } = useContext(AuthContext);
    const googleAuth = new GoogleAuthProvider();

    const [itemUploading, setLoadingStatus] = useState(false)
    const [error, setError] = useState('')
    const imageBbApiKey = process.env.REACT_APP_imageBBAPI;
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault()
        setLoadingStatus(true)
        createUser(e.target.email.value, e.target.password.value)
            .then(res => {
                console.log();
                const currentUser = { email: res.user?.email }
                const accountType = e.target.sellerBuyer.value
                const username = e.target.username.value;
                const email = e.target.email.value;
                const signupby = 'email'
                const formData = new FormData();
                const profilepictureName = e.target.profilepicture.files[0];
                formData.append('image', profilepictureName)
                fetch(`https://api.imgbb.com/1/upload?key=${imageBbApiKey}`, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(imageData => {
                        const userData = { displayName: username, photoURL: imageData.data.url }
                        updateUserInfo(userData)
                            .then(() => { })
                            .catch(err => console.log(err.message))
                        const insertTime = new Date().getTime();
                        const profilepicture = imageData.data.url;
                        const allData = { accountType, username, email, profilepicture, signupby, insertTime }
                       

                        fetch('https://assignment-12-server-gray.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(allData)
                        })
                            .then(res2 => res2.json())
                            .then(data => {
                                setError('')
                                e.target.reset()
                                navigate('/login');
                                fetch('https://assignment-12-server-gray.vercel.app/jwt', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(currentUser)
                                })
                                    .then(res => {
                
                                        if (res.status === 401 || res.status === 403) {
                                            return logOut();
                                        }
                                        return res.json();
                                    })
                                    .then(data => {
                                        localStorage.setItem('access-token', data?.token)
                                        setLoadingStatus(false)
                                        toast.success('Registration Successful')

                                    })
                            })
                    })
                    .catch(err => console.log(err.message))

                // e.target.reset()

            })
            .catch(err => {
                setLoadingStatus(false)
                return setError(err.message)
            });
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
                                    <Form.Control required name="username" type="text" className='rounded-5' placeholder="Username" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicName2">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control required name="email" type="email" className='rounded-5' placeholder="example@gmail.com" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword2">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control required name="password" className='rounded-5' type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicFile2">
                                    <Form.Label>Profile Picture</Form.Label>
                                    <Form.Control required name="profilepicture" className='rounded-5' type="file" placeholder="Profile Picture" />
                                </Form.Group>

                                <button className={`theme_bg outline-0 border-0 px-5 py-2 w-100 fw-bolder text-white rounded ${itemUploading ? 'd-none': 'd-block'}`}>
                                    Register
                                </button>
                                <button className={`btn w-100 btn-primary ${itemUploading ? 'd-block' : 'd-none'}`} type="button" disabled>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Registering...
                            </button>
                                
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