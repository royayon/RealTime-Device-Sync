import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../../Utils/Common';
import { API_URL } from '../../API/api-config';

import './Login.css'

function Login(props) {
    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);

    // handle button click of login form
    const handleLogin = () => {
        setError(null);
        setLoading(true);
        axios.post(API_URL + "/login", { email: username.value, password: password.value }).then(response => {
            setLoading(false);
            console.log("login response---", response)
            setUserSession(response.data, response.data);
            props.history.push('/devices');
        }).catch(error => {
            console.log("error login---", error.response)
            setLoading(false);
            if (error.response.status === 401) setError(error.response.data);
            else setError("Something went wrong. Please try again later.");
        });
    }

    return (
        <div className="login-bg">
            <div className="login-body">
                <div className="login-heading">
                    Login
                </div>
                <div className="login-email" >
                    <i className="fa fa-envelope fa-sm"></i>
                    <input type="text" {...username} autoComplete="new-password" placeholder="Email Address" />
                </div>
                <div className="login-pass" >
                    <i className="fa fa-exclamation-circle fa-sm"></i>
                    <input type="password" {...password} autoComplete="new-password" placeholder="Password" />
                </div>
                

                <div className="login-btn" >
                    <input type="button" value={loading ? 'Loging In...' : 'LOG IN'} onClick={handleLogin} disabled={loading} /><br />
                </div>

                {error && <><center><small className="errorMSG">{error}</small><br /></center></>}<br />
            </div>

            
        </div>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login;