import React, { useState } from 'react';
import { firebase } from '../../services/firebase.config.js';
import classes from './Signup.module.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
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
        <div className={classes.container}>
            <h1>Signup sivu</h1>

        </div>
    );
};

export default Signup;