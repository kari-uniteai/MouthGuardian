import React, { useState, useEffect } from 'react';
import { firebase } from '../../services/firebase.config.js';
import classes from './HelloSessionContainer.module.css';

const HelloSessionContainer = () => {
    const [timerActive, setTimerActive] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const currentUser = firebase.auth().currentUser;
    const path = `users/${currentUser?.uid}/timeElapsed`;

    useEffect(() => {

    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.title}>Your Sessions</div>
            <div className={classes.sessionDetails}>
                <div className={classes.sessionItem}>
                    <div className={classes.smallTitle}>Last</div>
                    <div className={classes.value}>{'Jan 16'}</div>
                </div>
                <div className={classes.sessionItem}>
                    <div className={classes.smallTitle}>Next</div>
                    <div className={classes.value}>{'Jan 18'}</div>
                </div>
                <div className={classes.sessionItem}>
                    <div className={classes.smallTitle}>Total</div>
                    <div className={classes.value}>{'48'}</div>
                </div>
            </div>
        </div >
    );
};

export default HelloSessionContainer;
