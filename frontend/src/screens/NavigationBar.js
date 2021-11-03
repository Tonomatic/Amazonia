import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div>
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

        <header className="rows">
            <div>
                <Link className="brand" to="/">amazonia</Link>
            </div>

            {isLoaded && sessionLinks}
        </header>
    );
}

export default Navigation;
