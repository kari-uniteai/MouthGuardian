import CalendarComponent from '../../components/Calendar/Calendar';
import classes from './CalendarPage.module.css';
import FooterMenu from '../../components/Footer/FooterMenu';

const CalendarPage = () => {
  return (
    <div className={classes.container}>
      <CalendarComponent />
      <FooterMenu activeIconName={'icon3'} />
    </div>
  );
};

export default CalendarPage;