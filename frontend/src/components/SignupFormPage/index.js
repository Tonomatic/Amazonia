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
        <div class="form_wrapper">
            <div class="form_container">
                <div class="title_container">
                    <h2>Register</h2>
                </div>
                <div class="row clearfix">
                    <div class="">
                        <form>
                            <div class="input_field"> <span className="icoon"><i aria-hidden="true" class="fa fa-envelope"></i></span>
                                <input type="email" name="email" placeholder="Email" required />
                            </div>
                            <div class="row clearfix">
                                <div class="col_half">
                                    <div class="input_field"> <span className="icoon"><i aria-hidden="true" class="fa fa-user"></i></span>
                                        <input type="text" name="name" placeholder="Username" required />
                                    </div>
                                </div>
                            </div>
                            <div class="input_field"> <span className="icoon"><i aria-hidden="true" class="fa fa-lock"></i></span>
                                <input type="password" name="password" placeholder="Password" required />
                            </div>
                            <div class="input_field"> <span className="icoon"><i aria-hidden="true" class="fa fa-lock"></i></span>
                                <input type="password" name="password" placeholder="Re-type Password" required />
                            </div>
                        </form>
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
