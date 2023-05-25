import classes from './Dashboard.module.css';
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';



const Dashboard = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const currentUser = firebase.auth().currentUser;
        console.log(currentUser);
      
        if (currentUser) {
          const userId = currentUser.uid;
          console.log(userId);
          const usersRef = firebase.database().ref('users').child(userId);
          console.log(usersRef);
      
          // Fetch the user data
          usersRef.once('value')
            .then((snapshot) => {
              const userData = snapshot.val();
              console.log(userData);
              setUserName(userData.username);
              // Update the userData state or perform any other operations with the data
            })
            .catch((error) => {
              console.error('Error fetching user data:', error);
            });
        }
      }, []);
    return (
        <div>
            Hello, {userName} 
        </div>
    )
};

export default Dashboard;