import React, { useState, useEffect } from 'react';
import { firebase } from '../../services/firebase.config.js';
import classes from './HelloContainer.module.css';
import Avatar from '../../images/avatar.png';

interface Props {
    userName: string
}

const HelloContainer = ({ userName }: Props) => {
    const [timerActive, setTimerActive] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const currentUser = firebase.auth().currentUser;
    const path = `users/${currentUser?.uid}/timeElapsed`;

    useEffect(() => {

    }, []);

    return (
        <div className={classes.helloContainer}>
            <div className={classes.left}>
                <div className={classes.helloText}>
                    Hello, {userName}
                </div>
                <div className={classes.subText}>
                    Let's see where you're at.
                </div>
            </div>
            <div className={classes.right}>
                <img
                    className={classes.avatar}
                    src={Avatar}
                    alt="avatar"
                />
            </div>

        </div>
    );
};

export default HelloContainer;
