"use client"
import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

export const BookDate = ({ date, setDate }) => {
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const formattedDate = date instanceof Date ? format(date, "d MMM yy") : "Invalid Date";
  const formattedDate2 = date instanceof Date ? format(date, "EEE") : "Invalid Date";
  
  
  const openCalendar = () => {
    setCalendarVisible(true);
  };

  const handleCalendarChange = (newDate) => {
    setDate(newDate);
    setCalendarVisible(false);
  };

  const calendarRef = useRef(null);

  const handleClickOutside = (e) => {
    if (calendarRef.current && !calendarRef.current.contains(e.target)) {
      setCalendarVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <h1
        className="text-2xl sm:text-1xl md:2xl font-semibold cursor-pointer"
        onClick={openCalendar}
      >
        {formattedDate}
      </h1>
      <h1 className="font-semibold">{formattedDate2}</h1>
      {isCalendarVisible && (
        <div
          className="absolute z-50 top-12 sm:right-0 -right-20"
          ref={calendarRef}
        >
          <div className="bg-white border border-gray-300 shadow-md p-2 rounded-lg relative">
            <button
              type="button"
              className="absolute top-2 right-2 bg-sky-300 hover:bg-sky-500 p-2 rounded-full"
              onClick={() => setCalendarVisible(false)}
            >
              <svg
                className="h-6 w-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Calendar onChange={handleCalendarChange} value={date} />
          </div>
        </div>
      )}
    </div>
  );
};
