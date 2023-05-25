import React, { useState } from 'react';
import { firebase } from '../../services/firebase.config.js';
import classes from './Signup.module.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    };

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();

        if (email.trim() === '' || password.trim() === '') {
            setError('Please enter email and password.');
            return;
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // User signed up successfully
                const user = userCredential.user;
                console.log(user);
                navigate('/dashboard');
            })
            .catch((error) => {
                // Handle signup error
                setError(error.message);
            });
    };

    return (
        <div className={classes.container}>
            <h2>Signup</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSignup}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
};

export default Signup;