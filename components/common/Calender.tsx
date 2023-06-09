import React, { useState } from 'react';
import dayjs from 'dayjs'; // a lightweight date library
import 'dayjs/locale/en'; // set the locale to English
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'; // import icons from Heroicons
import clsx from 'clsx'; // a utility for constructing className strings

// type Props = {
//   selectedDate: Date;
//   // onChange: (date: Date) => void;
// };

const Calendar: React.FC = () => {
  //onchange
  let selectedDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(dayjs(selectedDate).startOf('month'));

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => prevMonth.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => prevMonth.add(1, 'month'));
  };

  const weekdaysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const renderDays = () => {
    const monthStart = currentMonth.startOf('month');
    const monthEnd = currentMonth.endOf('month');
    const startDate = monthStart.startOf('week');
    const endDate = monthEnd.endOf('week');
    const days: JSX.Element[] = [];

    let day = startDate;
    while (day.isBefore(endDate)) {
      days.push(
        <div
          key={day.format('YYYY-MM-DD')}
          className={clsx(
            'text-sm',
            day.isSame(selectedDate, 'day') && 'bg-blue-500 text-white',
            day.month() !== currentMonth.month() && 'text-gray-500',
            'cursor-pointer p-1 rounded-full flex justify-center items-center',
          )}
          // onClick={() => onChange(day.toDate())}
        >
          {day.format('D')}
        </div>,
      );
      day = day.add(1, 'day');
    }

    return days;
  };

  return (
    <div className=" bg-white shadow-md rounded-md w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth}>
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <h2 className="text-lg font-medium">{currentMonth.format('MMMM YYYY')}</h2>
        <button onClick={handleNextMonth}>
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekdaysShort.map((day) => (
          <div key={day} className="text-sm font-medium text-gray-500 flex justify-center items-center">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">{renderDays()}</div>
    </div>
  );
};

export default Calendar;
