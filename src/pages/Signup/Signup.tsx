import React, { useState } from 'react';
import { firebase } from '../../services/firebase.config.js';
import classes from './Signup.module.css';
import { useNavigate } from 'react-router-dom';
import { getDatabase } from 'firebase/database';

const Signup = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const database = getDatabase();
    const navigate = useNavigate();

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();

        if (email.trim() === '' || password.trim() === '' || userName.trim() === '') {
            setError('Please enter email and password and username');
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
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
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