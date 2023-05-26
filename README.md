# MouthGuardian

## AI Tools used for code generation

### https://chat.openai.com/
### https://github.com/hillis/gpt-4-chat-ui  (used with Younite-AI's API key)
### https://github.com/features/copilot

## Prompts

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
___
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

___
Create Calendar.tsx component with react and typescript using some existing nice looking calendar library
___
// read timeElapsed from Firebase Realtime database current user
___
modify this so that startTime and stopTimes are taken from db:
if (currentUser) {
    const userId = currentUser.uid;
    console.log(userId);
    const databaseRef = firebase.database().ref('timeElapsed').child(userId);
    console.log(databaseRef);
}
___
fix this to refresh when rows are got from database:

Calendar.tsx content...
___




---

Sitten lisäsin alle tekstin, jossa pitäisi olla ohjaus login näkymään. Kysyin seuraavaa:

Can you adjust this so that “Log in” acts as link to other page?
<div className={classes.alreadyHaveAccount}>
Already have an account? Log in
</div>

Sitten kysymysmerkin ja log in tekstin välissä ei ollut rakoa:

there’s no space between question mark and log in text when rendered

Sitten pyysin ideaa asettaa target goal valintaa napin yläpuolelle

Do you have idea to some target goal selection field/roll or whatever number selection that would be above get started button? I will show it in last step.

Lopputulos oli ruma, pyysin jotain kauniimpaa. TÄLLAINEN KOMENTO HERKÄSTI AKTIVOI ERI KIRJASTOJEN HAUN

That time selection is quite ugly, can you provide something more beautiful and user-friendly?

Chatgpt ehdotti datepickeriä ja antoi valmiin koodin, jossa tuli error. Kysyin asiasta chatgpt:ltä

ERROR in src/pages/OnBoardingPage/OnBoardingPage.tsx:45:35 TS7006: Parameter ‘date’ implicitly has an ‘any’ type. 43 | }; 44 | > 45 | const handleGoalTimeChange = (date) => { | ^^^^ 46 | setGoalTime(date); 47 | }; 48 |

Sitten sanoin etten halua datea, vaan ihan numeron. Chatgpt ehdotti ensin timepickeriä, joka oli hours and minutes kaltainen. Sain kuitenkin suuntaa jo siihen, mitä tarvitaan ja oli valmis runko asioille.

Actually replace whole inputfield with buttons that have numbers from 1 to 7.

Lopputulos oli hyvä, lähdin parantelemaan tyylejä ja halusin nappien olevan pyöreitä

button needs to be circle (round corners) how to make it so?
.sessionButton { background-color: #15104D; padding: 5px; color: white; }

Napit näyttivät hyvältä, mutta ympärille jäi varjoja yms borderia:

There seems to be some border in there with shadow or something like that. How to remove it?

Napit oli jo ok, mutta niiden välissä ei ollut rakoa:

Great, now I need to have some space between buttons.

Napit toimivat kuten pitää, mutta halusin niihin vielä valintaefektin:

How can I make it so that whichever goal circle is selected, it will show different color in there?
