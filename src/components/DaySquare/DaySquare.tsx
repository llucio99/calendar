import React, { FC } from 'react';
import './DaySquare.css';

interface DaySquareProps {
  day: number;
  color: string;
}

const DaySquare: FC<DaySquareProps> = ({ day, color }) => (
  <div className="day"
  style={{backgroundColor: color}}>
    {day}
  </div>
);

export default DaySquare;
