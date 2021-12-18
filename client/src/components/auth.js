import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import decode from 'jwt-decode';

import { signup, signin } from "../actions/auth";
import * as actionType from "../constants/actionTypes";

export default function Auth() {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const emailRef2 = useRef("");
    const passwordRef2 = useRef("");
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    // const location = useLocation();
    const history = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        setUser(null);
    }

    const signupSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: emailRef.current.value,
            firstName: "Husein",
            lastName: "Adza",
            password: passwordRef.current.value
        }
        dispatch(signup(data, history));
        setUser(data);
    }

    const signinSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: emailRef2.current.value,
            password: passwordRef2.current.value
        }
        dispatch(signin(data, history));
        setUser(data);
    }

    return (
        <>
            <form className="form" onSubmit={signupSubmit}>
                <h1>SIGN UP</h1>
                <input type="text" placeholder="Email" ref={emailRef} />
                <input type="text" placeholder="Password" ref={passwordRef} />
                <button type="submit">Submit</button>
            </form>
            <form className="form" onSubmit={signinSubmit}>
                <h1>SIGN IN</h1>
                <input type="text" placeholder="Email" ref={emailRef2} />
                <input type="text" placeholder="Password" ref={passwordRef2} />
                <button type="submit">Submit</button>
            </form>
            <button style={{ width: "150px", height: "25px" }} onClick={logout}>logaut</button>
            {console.log(user)}
        </>
    )
}