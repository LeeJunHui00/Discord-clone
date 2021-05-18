import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Discord_Old_Logo.svg" alt="" />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;
