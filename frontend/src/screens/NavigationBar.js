import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import Button from '@restart/ui/esm/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'
function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const [show, setShow] = useState(false);
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div className="rightSide">
                <Link to="/cart">Cart {cartItems.length > 0 && (
                    <span className="badge">{cartItems.length}</span>
                )}
                </Link>
                <ProfileButton user={sessionUser} />

            </div>
        );
    } else {
        sessionLinks = (
            <div  >
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </div>
        );
    }

    return (
        <header className="rows headerBar header2">
            <div className="sidebar">
                <div>
                    <Button variant="primary" style={{ backgroundColor: "#203040", border: "none", color: "white" }} onClick={handleShow} className="fas fa-bars" />
                    <Offcanvas show={show} scroll={true} backdrop={false} onHide={handleClose} style={{ backgroundColor: "#efefef", padding: "20px" }}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title style={{ fontSize: "1.6rem", fontWeight: "bold" }}>Categories</Offcanvas.Title>
                        </Offcanvas.Header>
                        <div className="sidebarContent">
                            <li>
                                <Link to="/">Clothing</Link>
                            </li>
                            <li>
                                <Link to="/">Jewelry</Link>
                            </li>
                            <li>
                                <Link to="/">Technology</Link>
                            </li>
                        </div>
                    </Offcanvas>
                </div>
                <Link className="brand" to="/">amazonia</Link>
            </div>
            {isLoaded && (
                <div className="search-container">
                    <form action="/action_page.php" style={{ display: "flex", alignItems: "center" }}>
                        <input type="text" placeholder="Search.." name="search" style={{ cursor: "text", borderRadius: "0px", height: "3rem" }} />
                        <button type="submit" className="searchButton"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            )}
            {isLoaded && sessionLinks}
        </header>
    );
}

export default Navigation;
