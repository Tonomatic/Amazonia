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

        <header className="rows headerBar">
            <div>
                {/* <button type="button" class="fas fa-bars"/> */}
                <div>
                    <Button variant="primary" onClick={handleShow}>
                        Launch
                    </Button>

                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            Some text as placeholder. In real life you can have the elements you
                            have chosen. Like, text, images, lists, etc.
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
                <Link className="brand" to="/">amazonia</Link>
            </div>
            <div class="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search" style={{ cursor: "text" }} />
                    <button type="submit" style={{ backgroundColor: '#f0c040' }}><i class="fa fa-search"></i></button>
                </form>
            </div>
            {isLoaded && sessionLinks}
        </header>
    );
}

export default Navigation;
