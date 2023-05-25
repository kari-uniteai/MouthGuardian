import classes from './Calendar.module.css';
// Datepicker imports
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
    return (
        <div className={classes.container}>
            <DatePicker
                selected={
                    null
                }
                peekNextMonth
                showYearDropdown
                showMonthDropdown
                dropdownMode='select'
                onChange={(date) => {

                }}
                maxDate={new Date()}
            />
        </div>
    )
}
export default Calendar;