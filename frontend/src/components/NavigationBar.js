import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import Button from '@restart/ui/esm/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'
function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const products = useSelector(state => state.productList.products)
    const loading = useSelector(state => state.productList.loading)
    const [category, setCategory] = useState("electronics")

    const [show, setShow] = useState(false);
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;


    const categories = (x) => {
        if (x !== category) {
            setCategory(x)
            return true;
        } else {
            return false
        }
    }
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
                    <Button variant="primary" onClick={handleShow} className="fas fa-bars" />
                    <Offcanvas show={show} scroll={true} backdrop={true} onHide={handleClose} style={{ backgroundColor: "#efefef", padding: "20px" }}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title style={{ fontSize: "1.6rem", fontWeight: "bold" }}>Categories</Offcanvas.Title>
                        </Offcanvas.Header>
                        <div className="sidebarContent">
                            <li>
                                <Link to={`/categories/electronics`} onClick={handleClose}>Electronics</Link>
                            </li>
                            <li>
                                <Link to="/categories/jewelery" onClick={handleClose}>Jewelery</Link>
                            </li>
                            <li>
                                <Link to="/categories/mensClothing" onClick={handleClose}>Men's Clothing</Link>
                            </li>
                            <li>
                                <Link to="/categories/womensClothing" onClick={handleClose}>Women's Clothing</Link>
                            </li>
                            <li>
                                <Link to="/all" onClick={handleClose}>All</Link>
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
