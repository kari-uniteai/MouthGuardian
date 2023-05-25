import React, { useState, useEffect } from 'react';
import DataSaver from '../DataSaver/DataSaver';
import { firebase } from '../../services/firebase.config.js';
import classes from './Timer.module.css';

const Timer = () => {
  const [timerActive, setTimerActive] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [user, setUser] = useState({});
  const [path, setPath] = useState('');
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (timerActive) {
      const id = setInterval(() => {
        setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + 1);
      }, 1000);
      setIntervalId(id);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [timerActive]);

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    setUser({ ...currentUser });
    setPath(`users/${currentUser?.uid}/timeElapsed`);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const handleToggleTimer = () => {
    if (timerActive) {
      clearInterval(intervalId);
      setTimerActive(false);
    } else {
      setTimerActive(true);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>Timer</div>
      <div className={classes.timeCounter}>{formatTime(timeElapsed)}</div>
      <button className={classes.button} onClick={handleToggleTimer}>
        {timerActive ? 'Stop Timer' : 'Start Timer'}
      </button>
      <DataSaver data={timeElapsed} path={path} />
    </div>
  );
};

export default Timer;
