import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from '../../reducers/userReducer';
import './SignupForm.css'


function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <div className="first_wrapper">
            <div className="form_wrapper">
                <div className="form_container">
                    <div className="title_container">
                        <h1>Register</h1>
                    </div>
                    <div className="row clearfix">
                        <div className="">
                            <form>
                                <div className="input_field"> <span className="icoon"><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                    <input type="email" name="email" placeholder="Email" required />
                                </div>
                                <div className="row clearfix">
                                    <div className="col_half">
                                        <div className="input_field"> <span className="icoon"><i aria-hidden="true" className="fa fa-user"></i></span>
                                            <input type="text" name="name" placeholder="Username" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="input_field"> <span className="icoon"><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input type="password" name="password" placeholder="Password" required />
                                </div>
                                <div className="input_field"> <span className="icoon"><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input type="password" name="password" placeholder="Re-type Password" required />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <form onSubmit={handleSubmit}>
        //     <ul>
        //         {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        //     </ul>
        //     <label>
        //         Email
        // <input
        //             type="text"
        //             value={email}
        //             onChange={(e) => setEmail(e.target.value)}
        //             required
        //         />
        //     </label>
        //     <label>
        //         Username
        // <input
        //             type="text"
        //             value={username}
        //             onChange={(e) => setUsername(e.target.value)}
        //             required
        //         />
        //     </label>
        //     <label>
        //         Password
        // <input
        //             type="password"
        //             value={password}
        //             onChange={(e) => setPassword(e.target.value)}
        //             required
        //         />
        //     </label>
        //     <label>
        //         Confirm Password
        // <input
        //             type="password"
        //             value={confirmPassword}
        //             onChange={(e) => setConfirmPassword(e.target.value)}
        //             required
        //         />
        //     </label>
        //     <button type="submit">Sign Up</button>
        // </form>
    );
}

export default SignupFormPage;
