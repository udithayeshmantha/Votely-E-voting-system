import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const events = [
    { date: "2024-12-10", title: "Project Deadline" },
    { date: "2024-12-15", title: "Team Meeting" },
    { date: "2024-12-25", title: "Holiday Celebration" },
  ];

  // Check if the date is an event day
  const isEventDay = (currentDate) => {
    return events.some(
      (event) => event.date === currentDate.toISOString().split("T")[0]
    );
  };

  // Find event details for the selected date
  const getEventDetails = (date) => {
    return events.find((event) => event.date === date) || null;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5 flex flex-col items-center">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-5 text-center">
          Event Calendar
        </h1>

        {/* Calendar Component */}
        <Calendar
          onChange={(date) => {
            const formattedDate = date.toISOString().split("T")[0];
            setSelectedDate(formattedDate);
          }}
          tileDisabled={({ date }) => !isEventDay(date)}
          tileClassName={({ date }) =>
            isEventDay(date) ? "rounded-full" : ""
          }
        />

        {/* Selected Date Details */}
        {selectedDate && (
          <div className="mt-6 bg-blue-100 text-blue-800 rounded-lg p-4">
            <h2 className="text-xl font-semibold">
              Events on {new Date(selectedDate).toDateString()}
            </h2>
            <p className="mt-2">
              <strong>Details:</strong>{" "}
              {getEventDetails(selectedDate)?.title || "No events today."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCalendar;
