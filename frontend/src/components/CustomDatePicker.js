import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CustomDatePicker({ selectedDate, onChange }) {
  const [isPresent, setIsPresent] = useState(false);

  const handleDateChange = (date) => {
    onChange(date);
    setIsPresent(false);
  };

  const handlePresentOption = () => {
    if (!isPresent) {
      onChange(null); // Set the date to null when "Present" is selected
    }
    setIsPresent(!isPresent);
  };

  return (
    <div>
      <label>Date: </label>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM yyyy"
        showMonthYearPicker
      />
      <label>
        <input
          type="checkbox"
          checked={isPresent}
          onChange={handlePresentOption}
        />{' '}
        Present
      </label>
    </div>
  );
}

export default CustomDatePicker;
