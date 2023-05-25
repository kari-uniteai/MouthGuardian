import CalendarComponent from '../../components/Calendar/Calendar';
import classes from './CalendarPage.module.css';

const CalendarPage = () => {

  return (
    <div className={classes.container}>
      <CalendarComponent />
    </div>
  );
};

export default CalendarPage;