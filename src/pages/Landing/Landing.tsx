import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../../images/logo.png';
import image2 from '../../images/placeholderlogo.png';
import classes from './Landing.module.css';

const Landing = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSignupClick = () => {
        navigate('/signup');
    };

    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <img src={logoImage} alt="Logo" />
            </div>
            <div className={classes.title}>Mouth Guardian</div>
            <div className={classes.description}>Puhtaat hampaat, parempi mieli!</div>
            <img
                src={classes.image2}
                alt="Image2"
            />
            <div className={classes.buttonRow}>
                <button onClick={handleLoginClick}>Login</button>
                <button onClick={handleSignupClick}>Signup</button>
            </div>
        </div>
    );
};

export default Landing;
