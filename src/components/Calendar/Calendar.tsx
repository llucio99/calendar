import React, { FC } from 'react';
import DaySquare from '../DaySquare/DaySquare';
import './Calendar.css';

interface CalendarProps {}

const data = [
  { number: 28, color: "#D3D3D3" },
  { number: 29, color: "#D3D3D3" },
  { number: 30, color: "#D3D3D3" },
  { number: 31, color: "#D3D3D3" },
  { number: 1, color: "#44B444" },
  { number: 2, color: "#DE3218" },
  { number: 3, color: "#F3E636" },
  { number: 4, color: "#44B444" },
  { number: 5, color: "#F3E636" },
  { number: 6, color: "#F3E636" },
  { number: 7, color: "#DE3218" },
  { number: 8, color: "#DE3218" },
  { number: 9, color: "#DE3218" },
  { number: 10, color: "#DE3218" },
  { number: 11, color: "#44B444" },
  { number: 12, color: "#F3E636" },
  { number: 13, color: "#F3E636" },
  { number: 14, color: "#44B444" },
  { number: 15, color: "#F3E636" },
  { number: 16, color: "#44B444" },
  { number: 17, color: "#DE3218" },
  { number: 18, color: "#44B444" },
  { number: 19, color: "#F3E636" },
  { number: 20, color: "#F3E636" },
  { number: 21, color: "#44B444" },
  { number: 22, color: "#F3E636" },
  { number: 23, color: "#44B444" },
  { number: 24, color: "#44B444" },
  { number: 25, color: "#44B444" },
  { number: 26, color: "#F3E636" },
  { number: 27, color: "#F3E636" },
  { number: 28, color: "#44B444" },
  { number: 29, color: "#F3E636" },
  { number: 1, color: "#D3D3D3" },
  { number: 2, color: "#D3D3D3" },
];

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Calendar = () => (
  <div className="calendar">
    {daysOfWeek.map((day, index) => (
      <div key={index} className="day-of-week">{day}</div>
    ))}
    {data.map((item, index) => (
      <DaySquare key={index} day={item.number} color={item.color} />
    ))}
  </div>
);

export default Calendar;
