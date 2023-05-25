import React, { useState } from 'react';
import DataSaver from '../DataSaver/DataSaver';
import { firebase } from '../../services/firebase.config.js';

const TargetTime = () => {
  const [targetTime, setTargetTime] = useState(0);
  const currentUser = firebase.auth().currentUser;
  const path = `users/${currentUser?.uid}/targetTime`;

  return (
    <div>
      <label htmlFor="targetTime">Target Time (minutes): </label>
      <input
        type="string"
        id="targetTime"
        value={targetTime}
        onChange={(e) => setTargetTime(Number(e.target.value))}
      />
      <DataSaver path={path} data={targetTime} />
    </div>
  );
};

export default TargetTime;
