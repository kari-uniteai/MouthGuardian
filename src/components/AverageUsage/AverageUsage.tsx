import React, { useState, useEffect } from 'react';
import { firebase } from '../../services/firebase.config.js';
import classes from './AverageUsage.module.css'

const AverageUsage = () => {
    const [averageTime, setAverageTime] = useState(0);

    useEffect(() => {
        const fetchAverageTime = async () => {
            const currentUser = firebase.auth().currentUser;
            const databaseRef = firebase.database().ref(`users/${currentUser?.uid}/timeElapsed`);

            try {
                const snapshot = await databaseRef.once('value');
                const timeElapsedData = snapshot.val();

                if (timeElapsedData) {
                    const elapsedTimes = Object.values(timeElapsedData).map((session: any) => session.timeElapsed);
                    const totalTime = elapsedTimes.reduce((total: number, elapsedTime: number) => total + elapsedTime, 0);
                    const averageTimeInSeconds = totalTime / elapsedTimes.length;
                    const averageTimeInMinutes = Math.round(averageTimeInSeconds / 60);
                    setAverageTime(averageTimeInMinutes);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchAverageTime();
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.title}>Average use time</div>
            <div className={classes.sessionDetails}>
                <div className={classes.sessionItem}></div>
                <div>{averageTime} minutes</div>
            </div>
        </div>
    );
};

export default AverageUsage;
