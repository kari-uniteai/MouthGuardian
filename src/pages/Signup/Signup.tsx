import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, push, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import classes from './Signup.module.css';
import Logo from '../../images/logo.png';

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '' || userName.trim() === '') {
      setError('Please enter email, password, and username');
      return;
    }

    const auth = getAuth();
    const database = getDatabase();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed up successfully
        const user = userCredential.user;
        const userId = user?.uid;

        // Save the username to the Realtime Database
        const usersRef = ref(database, `/users/${userId}`);
        set(usersRef, {
          username: userName,
        });

        console.log(user);
        navigate('/onboarding');
      })
      .catch((error) => {
        // Handle signup error
        setError(error.message);
      });
  };

  return (
    <div className={classes.container}>

      <div className={classes.top}>
        <img
          src={Logo}
          alt='loko'
          className={classes.logo}
        />
      </div>

      <form
        className={classes.bottom}
        onSubmit={handleSignup}>
        <input
          className={classes.inputfield}
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className={classes.inputfield}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={classes.inputfield}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={classes.button}
          type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;