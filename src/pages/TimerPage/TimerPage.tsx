import classes from './TimerPage.module.css';
import Timer from '../../components/Timer/Timer';

const TimerPage = () => {
  return (
    <div className={classes.container}>
      <Timer />
    </div>
  );
};

export default TimerPage;