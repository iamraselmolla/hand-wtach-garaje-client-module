import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handlelogOut = () => {
        logOut()
            .then(() => {
                toast.success("Logout Successfully!")
            })
            .catch(() => { })
    }
    return (
        <header className='navbar-light bg-light'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to="/"><Navbar.Brand> <img width="60" src="https://i.ibb.co/hFhmqHh/logo.png" alt="logo" /> </Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">

                            <NavLink className="text-decoration-none fw-bolder text-black px-2 py-3" to="/">Home</NavLink>
                            <NavLink className="text-decoration-none fw-bolder text-black px-2 py-3" to="/all-items">All Watches</NavLink>
                            <NavLink className="text-decoration-none fw-bolder text-black px-2 py-3" to="/blog">Blog</NavLink>
                            {!user &&
                                <>
                                    <NavLink className="text-decoration-none fw-bolder text-black px-2 py-3" to="/login">Login</NavLink>
                                    <NavLink className="text-decoration-none fw-bolder text-black px-2 py-3" to="/register">Register</NavLink>

                                </>
                            }
                            {user && <img width="60" className='rounded-circle ms-4' src={user?.photoURL} />}
                            {user && <NavDropdown className='fw-bolder mt-2' title={`Hello ${user?.displayName || user?.email}`} id="basic-nav-dropdown">
                                <Link className='text-decoration-none d-block fw-bolder p-1 px-2 text-black' to="/dashboard">Dashboard</Link>
                                <Link className='text-decoration-none d-block fw-bolder p-1 px-2 text-black' to="/profile">Profile</Link>
                                <NavLink onClick={handlelogOut} className="text-decoration-none px-2 fw-bolder text-black px-2">Logout</NavLink>
                            </NavDropdown>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;