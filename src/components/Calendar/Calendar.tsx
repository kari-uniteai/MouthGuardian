import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { get, orderByChild, query, ref } from 'firebase/database';
import React, { useState } from 'react';
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

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
    if (onDateChange) {
      onDateChange(newDate);
    }
  };

  // read timeElapsed from Firebase Realtime database current user
  const currentUser = firebase.auth().currentUser;
  console.log(currentUser);

  // add null check
  if (currentUser) {

    const userId = currentUser.uid;
    console.log("user:" + userId);
    const databaseRef = firebase.database().ref('timeElapsed').child(userId);
    console.log(databaseRef);
    // read all events from Firebase Realtime database
    databaseRef.once('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // TODO: this is not reading the rows yet
        snapshot.forEach((childSnapshot) => {
          const startTime = new Date(childSnapshot.val().startTime * 1000); // Convert epoch timestamp to milliseconds
          const stopTime = new Date(childSnapshot.val().stopTime * 1000); // Convert epoch timestamp to milliseconds
          console.log("starttime:" + startTime);


          // startTime is epoch time, convert to Date
          // stopTime is epoch time, convert to Date
          // add to events array

          allEvents.push({ title: "x", date: startTime });

          //allEvents.push({ title: "x  ", date: new Date() });
        });
      }
    });

  }

  // Example of events data
  const allEvents: Event[] = [
    // create one event for  today
    { title: 'X', date: new Date() },
    { title: 'Event 1', date: new Date(1900, 1, 1) },
  ];

  const getEventsForDay = (day: Date) => {
    return allEvents.filter((event) => {
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

      <Calendar value={date} tileContent={calendarTileContent} />
    </div>
  );
};

export default CalendarComponent;
