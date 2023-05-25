import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import classes from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={classes.container}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>

  );
};

export default App;