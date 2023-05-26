import classes from './OnBoardingPage.module.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import { getDatabase, ref, update } from 'firebase/database';
import { firebase } from '../../services/firebase.config.js';

const OnBoardingPage = () => {

    const navigate = useNavigate();

    const [currentStep, setCurrentStep] = useState(0);
    const [targetGoal, setTargetGoal] = useState(7);

    const steps = [
        {
            title: 'Step 1: Welcome Screen',
            content: "Welcome to our dental hygiene app, where a healthier smile awaits! Connect your device, unlock the power of optimal oral care, and discover a new level of dental hygiene.",
        },
        {
            title: 'Step 2: Profile Setup',
            content: 'Let`s personalize your experience! What`s your name? We want to get to know you better and tailor our oral care recommendations just for you.',
        },
        {
            title: 'Step 3: Goal Setting',
            content: "We're excited to help you achieve a healthier smile! How many times a week are you aiming to use our device? Let's turn your goals into achievements!",
        },
    ];

    // Logic for moving to the next step
    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handleLogin = async () => {
        try {
            const saveData = () => {
                const currentUser = firebase.auth().currentUser;
                const data = targetGoal;
                const path = `users/${currentUser?.uid}/targetGoal`;
                const database = getDatabase();
                const databaseRef = ref(database, path);
                let dataToSave: any = {};

                dataToSave = {
                    targetGoal: targetGoal
                };

                update(databaseRef, dataToSave);
            };

            saveData();
            navigate('/dashboard');
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    const handleSessionCountChange = (count: number) => {
        setTargetGoal(count);
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
                <div className={classes.title}>
                    {steps[currentStep].title}
                </div>

                <div className={classes.subText}>
                    {steps[currentStep].content}
                </div>

                {currentStep === 2 ?
                    <React.Fragment>
                        <div className={classes.targetGoal}>
                            {[1, 2, 3, 4, 5, 6, 7].map((count) => (
                                <button
                                    key={count}
                                    className={`${classes.sessionButton} ${targetGoal === count ? classes.selectedGoal : ''
                                        }`}
                                    onClick={() => handleSessionCountChange(count)}
                                    disabled={Number(targetGoal) === count}
                                >
                                    {count}
                                </button>
                            ))}
                        </div>


                        <button
                            className={classes.button}
                            onClick={() => handleLogin()}>Get Started
                        </button>

                    </React.Fragment>
                    :
                    <button
                        className={classes.button}
                        onClick={() => handleNext()}>Next
                    </button>
                }

                <div className={classes.alreadyHaveAccount}>
                    Already have an account?&nbsp;<Link to="/login"> Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default OnBoardingPage;