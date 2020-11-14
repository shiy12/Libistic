import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  //TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

function MyApp() {
  const [selectedDate, handleDateChange] = useState(new Date());
  //const [selectedDate, handleDateChange] = useState(new Date());
  //<TimePicker value={selectedDate} onChange={handleDateChange} />

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker value={selectedDate} onChange={handleDateChange} />
      
    </MuiPickersUtilsProvider>
  );
}

export default MyApp;