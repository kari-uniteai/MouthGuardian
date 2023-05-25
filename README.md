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

