import classes from './TimerPage.module.css';
import Timer from '../../components/Timer/Timer';
import FooterMenu from '../../components/Footer/FooterMenu';

const TimerPage = () => {
  return (
    <div className={classes.container}>
      <Timer />
      <FooterMenu activeIconName={'icon2'} />
    </div>
  );
};

export default TimerPage;