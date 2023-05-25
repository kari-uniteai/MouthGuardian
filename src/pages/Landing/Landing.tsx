import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../../images/placeholderlogo.png';

const Landing = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSignupClick = () => {
        navigate('/signup');
    };

    return (
        <div>
            <div className="logo">
                <img src={logoImage} alt="Logo" />
            </div>
            <div className="title">Title</div>
            <p>Introduction text</p>
            <img src="image.jpg" alt="Image" />
            <div className="button-row">
                <button onClick={handleLoginClick}>Login</button>
                <button onClick={handleSignupClick}>Signup</button>
            </div>
        </div>
    );
};

export default Landing;
