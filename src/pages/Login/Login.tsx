import React, { useState } from 'react';
import { firebase } from '../../services/firebase.config.js';
import classes from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/logo.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        try {
            console.log("heop");
            await firebase.auth().signInWithEmailAndPassword(email, password);
            // Login successful, do something (e.g., redirect)
            console.log(firebase.auth().currentUser)
            navigate('/dashboard');
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className={classes.loginContainer}>
            <div className={classes.top}>
                <img
                    src={Logo}
                    className={classes.logo}
                />
            </div>

            <div className={classes.bottom}>

                <input
                    className={classes.inputfield}
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                />


                <input
                    className={classes.inputfield}
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                />

                <button
                    className={classes.button}
                    onClick={() => handleLogin()}>Login</button>
            </div>
        </div>
    );
};

export default Login;