import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import classes from './App.module.css';
import Landing from './pages/Landing/Landing';
import TimerPage from './pages/TimerPage/TimerPage';
import CalendarPage from './pages/CalendarPage/CalendarPage';

const App: React.FC = () => {

  return (
    <div className={classes.container}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/timer' element={<TimerPage />} />
        <Route path='/calendar' element={<CalendarPage />} />
      </Routes>
    </div>
  );
};

export default App;