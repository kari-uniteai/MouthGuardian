# MouthGuardian

## Prompts used to chatgpt:

___
"Our Customer is a startup with a new business idea in the field 
of dental hygiene. They have a mouth set that cleans bad 
bacteria from the mouth and with frequent use reduces gum 
disease, karies and other mouth problems. The device should 
be used 3 times per week, 10 minutes at a time for best results. 
The customer has approached us to build a mobile application 
to support the use of the device.
*The details of the case are mainly fictional even though inspiration is from our real customer. "

give name for the app"
___
"I want to create login and signup in firebase"

# Prompts
"I need npm install instructions for creating create react app with typescript template. I cant remember command. Project name is mouthguardian."

"Great. Now I need empty app file without all additional webvitals and such."

"Give me good empty CSS  rules for website body so it covers 100% width without margins"

___
Give me good empty CSS  rules for website body so it covers 100% width without margins
___
how to deploy react app to firebase
___
firebase init error: 
=== Storage Setup

Error: Cloud resource location is not set for this project but the operation you are attempting to perform in Cloud Storage requires it. Please see this documentation for more details: https://firebase.google.com/docs/projects/locations
___
This project is set up to use Cloud Firestore in Datastore mode. This mode can only be accessed from the Google Cloud Console
___
Error loading the Firebase SDK, check the console.
___

---
I'm using react app with typescript and firebase. I need a button to start timer and a button to stop timer. I want this in component like this:
import React, { useState } from 'react';
import { firebase } from '../../services/firebase.config.js';
import classes from './Login.module.css';

const Timer = () => {

    return (
        <div className={classes.container}>

        </div>
    );
};

export default Timer;

result after many many iterations:

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

      <div className={classes.targetTime}>
        Target {'10:00'}
      </div>

      <div className={classes.timeCounter}>
        {formatTime(timeElapsed)}
      </div>
      <button className={classes.button} onClick={handleToggleTimer}>
        {timerActive ? 'Stop Timer' : 'Start Timer'}
      </button>
      <DataSaver data={timeElapsed} path={path} />
    </div>
  );
};

export default Timer;

import React from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import classes from './DataSaver.module.css'

interface DataSaverProps {
    data: any;
    path: string;
}

const DataSaver: React.FC<DataSaverProps> = ({ data, path }) => {
    const saveData = () => {
        const database = getDatabase();
        const databaseRef = ref(database, path);
        const timestamp = new Date().getTime();
        let dataToSave: any = {};
      
        if (path.includes("targetTime")) {
          const targetTimeInMillis = data * 60 * 1000; // Convert minutes to milliseconds
          dataToSave = {
            targetTime: targetTimeInMillis
          }
        } else {
          dataToSave = {
            startTime: timestamp,
            stopTime: timestamp + data * 1000,
            timeElapsed: data
          };
        }
      
        push(databaseRef, dataToSave);
      };
      
      
      


    return (
        <button className={classes.button} onClick={saveData}>Save Session</button>
    );
};

export default DataSaver;


---

