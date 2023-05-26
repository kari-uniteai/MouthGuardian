import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { getDatabase, push, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import classes from './Calendar.module.css';

interface CalendarProps {
  onDateChange?: (date: Date) => void;
}

interface Event {
  title: string;
  date: Date;
}

const CalendarComponent: React.FC<CalendarProps> = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [user, setUser] = useState({});
  const [path, setPath] = useState('');

  useEffect(() => {
    // read timeElapsed from Firebase Realtime database current user
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      const userId = currentUser.uid;
      const databaseRef = firebase.database().ref(`users/${userId}/timeElapsed`);

      // read all events from Firebase Realtime database
      databaseRef.once('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const fetchedEvents: Event[] = [];
          snapshot.forEach((childSnapshot) => {
            const startTime = new Date(childSnapshot.val().startTime);
            console.log(startTime);
            const stopTime = new Date(childSnapshot.val().stopTime);
            
            // if startime later than now, add O to calendar
            if (startTime.getTime() > Date.now()) {
              fetchedEvents.push({
                title: "O",
                date: startTime,
              });
            } else {
              fetchedEvents.push({
                title: "X",
                date: startTime,
              });
            } 
          });
          setEvents(fetchedEvents);
          handleDateChange(date);
        }
      });
    }
  }, [setUser,user]);

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
    if (onDateChange) {
      onDateChange(newDate);
    }
  };

  const handleTileClick = (value: Date, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const startTime = value.getTime();

    const endTime = startTime + 10 * 60; // Add 10 minutes to startTime

    // Perform your desired logic with startTime and endTime

    console.log("startTime:", startTime);
    console.log("endTime:", endTime);


    const currentUser = firebase.auth().currentUser;
    setUser({ ...currentUser });
    const path = `users/${currentUser?.uid}/timeElapsed`;

    // add null check
    if (user) {
        const database = getDatabase();
        const databaseRef = ref(database, path);

        let dataToSave = {
            startTime: startTime,
            stopTime: endTime,
            timeElapsed: 10 * 60
        }
        push(databaseRef, dataToSave);
    }   
  };  


  const getEventsForDay = (day: Date) => {
    return events.filter((event) => {
      const eventDate = new Date(event.date.getFullYear(), event.date.getMonth(), event.date.getDate());
      return eventDate.getTime() === day.getTime();
    });
  };

  const calendarTileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const eventsForDay = getEventsForDay(date);
      return (
        <div>
          {eventsForDay.map((event, index) => (
            <div key={index}>{event.title}</div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>Calendar</div>
      <Calendar value={date} 
      onClickDay={handleTileClick}
      tileContent={calendarTileContent}  />
    </div>
  );
};

export default CalendarComponent;
