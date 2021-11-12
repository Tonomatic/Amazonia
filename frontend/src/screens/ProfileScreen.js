import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Profile() {
    const user = useSelector(state => state.session.user);
    const [show, setShow] = useState(false);
    const cart = useSelector(state => state.cart);

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
