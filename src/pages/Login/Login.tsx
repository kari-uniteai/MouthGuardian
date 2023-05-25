import React, { useState } from 'react';
import { firebase } from '../../services/firebase.config.js';
import classes from './Login.module.css';
import { useNavigate } from 'react-router-dom';

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
            <h1>Login</h1>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button onClick={() => handleLogin()}>Login</button>
        </div>
    );
};

export default Login;