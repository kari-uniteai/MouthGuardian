import React from 'react';
import { getDatabase, ref, push } from 'firebase/database';

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
        <button onClick={saveData}>Save Data</button>
    );
};

export default DataSaver;
