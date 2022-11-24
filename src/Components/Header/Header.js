import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';

const Header = () => {
    const { user,logOut } = useContext(AuthContext);

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
                    <Link to="/"><Navbar.Brand> <img width="60" src="logo.png" alt="logo" /> </Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">

                            <NavLink className="text-decoration-none fw-bolder text-black px-2" to="/">Home</NavLink>
                            {!user &&
                                <>
                                    <NavLink className="text-decoration-none fw-bolder text-black px-2" to="/login">Login</NavLink>
                                    <NavLink className="text-decoration-none fw-bolder text-black px-2" to="/register">Register</NavLink>

                                </>
                            }
                            {user&& <NavLink onClick={handlelogOut} className="text-decoration-none fw-bolder text-black px-2">Logout</NavLink>}
                            <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;