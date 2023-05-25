import React, { useState, useEffect } from 'react';
import DataSaver from '../DataSaver/DataSaver';
import { firebase } from '../../services/firebase.config.js';
import classes from './Timer.module.css';

const Timer = () => {
  const [timerActive, setTimerActive] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const currentUser = firebase.auth().currentUser;
  const path = `users/${currentUser?.uid}/timeElapsed`;

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (timerActive) {
      intervalId = setInterval(() => {
        setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timerActive]);

  const handleStart = () => {
    setTimerActive(true);
  };

  const handleStop = () => {
    setTimerActive(false);
  };

  return (
    <div className={classes.container}>
      <div>Time Elapsed: {timeElapsed} seconds</div>
      <button onClick={handleStart}>Start Timer</button>
      <button onClick={handleStop}>Stop Timer</button>
      <DataSaver data={timeElapsed} path={path} />
    </div>
  );
};

export default Timer;
