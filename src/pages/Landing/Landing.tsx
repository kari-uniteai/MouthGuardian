import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/logo.png';
import image2 from '../../images/tooth.png';
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
            <div className={classes.top}>
                <img
                    src={Logo}
                    className={classes.logo}
                />
            </div>
            <div className={classes.bottom}>
                <img
                    className={classes.image2}
                    src={image2}
                    alt="Image2"
                />
                <div className={classes.title}>Mouth Guardian</div>
                <div className={classes.description}>Reimagine Dental Care, Embrace the Power of Innovation!</div>

                <div className={classes.buttonRow}>
                    <button onClick={handleLoginClick}>Login</button>
                    <button onClick={handleSignupClick}>Signup</button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
