
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAMSIrRM3EqGWVNPqwmM_4wWFJLYup1Ge8",
    authDomain: "mouthguardian-b2bfe.firebaseapp.com",
    projectId: "mouthguardian-b2bfe",
    storageBucket: "mouthguardian-b2bfe.appspot.com",
    messagingSenderId: "263137471727",
    appId: "1:263137471727:web:aeeb803730c86102a8ff1a",
    databaseURL: 'https://mouthguardian-b2bfe-default-rtdb.europe-west1.firebasedatabase.app/',
};

firebase.initializeApp(firebaseConfig);

export { firebase };


