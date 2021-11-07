import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import Button from '@restart/ui/esm/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'

function Profile() {
    const user = useSelector(state => state.session.user);
    const [show, setShow] = useState(false);
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // let sessionLinks;
    // if (sessionUser) {
    //     sessionLinks = (
    //         <div className="rightSide">
    //             <Link to="/cart">Cart {cartItems.length > 0 && (
    //                 <span className="badge">{cartItems.length}</span>
    //             )}
    //             </Link>
    //             <ProfileButton user={sessionUser} />

    //         </div>
    //     );
    // } else {
    //     sessionLinks = (
    //         <div  >
    //             <NavLink to="/login">Log In</NavLink>
    //             <NavLink to="/signup">Sign Up</NavLink>
    //         </div>
    //     );
    // }
    return (
        <div>
            <li>
                Usernxame: {user?.username}
            </li>
            <li>
                Email: {user?.email}
            </li>
        </div>
    );
}

export default Profile;
