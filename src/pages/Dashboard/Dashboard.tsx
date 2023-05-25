import classes from './Dashboard.module.css';
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { useNavigate } from 'react-router-dom';
import HelloSessionContainer from '../../components/HelloSessionContainer/HelloSessionContainer';
import HelloContainer from '../../components/HelloContainer/HelloContainer';
import CalendarComponent from '../../components/Calendar/Calendar';
import FooterMenu from '../../components/Footer/FooterMenu';

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

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
    } else {
      navigate('/login');
    }
  }, []);

  const handleLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        // Logout successful
        // Perform any additional actions after logout if needed
        navigate('/');
      })
      .catch((error) => {
        // Handle logout error
        console.error('Error logging out:', error);
      });
  };
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <HelloContainer
          userName={userName}
        />
        <HelloSessionContainer />
      </div>

      <div>

      </div>
      {/* <div>
        <button onClick={() => handleLogout()}>Logout</button>
      </div> */}
      <FooterMenu activeIconName={'icon1'} />
    </div >
  )
};

export default Dashboard;