import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const DateFilter = ({ onDateChange }) => {
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(2); // Use index for months (0 = January)

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const updateMonth = (step) => {
    const newMonth = (month + step + 12) % 12;
    setMonth(newMonth);
    if (newMonth === 11 && step === -1) setYear((prev) => prev - 1); // Dec -> Jan
    if (newMonth === 0 && step === 1) setYear((prev) => prev + 1); // Jan -> Dec
  };

  // Call the onDateChange callback whenever year or month changes
  useEffect(() => {
    if (onDateChange) {
      onDateChange({ year, month: month + 1 }); // Add 1 to month for API (1-12 format)
    }
  }, [year, month, onDateChange]);

  return (
    <div className="flex items-center justify-center space-x-3 px-3 py-1.5 rounded border">
      <button onClick={() => setYear((prev) => prev - 1)}>
        <ChevronsLeft className="h-4 w-4 cursor-pointer" />
      </button>
      <span className="font-medium text-sm">{year}</span>
      <button onClick={() => setYear((prev) => prev + 1)}>
        <ChevronsRight className="h-4 w-4 cursor-pointer" />
      </button>
      <button onClick={() => updateMonth(-1)}>
        <ChevronLeft className="h-4 w-4 cursor-pointer" />
      </button>
      <span className="font-medium text-sm">{months[month]}</span>
      <button onClick={() => updateMonth(1)}>
        <ChevronRight className="h-4 w-4 cursor-pointer" />
      </button>
    </div>
  );
};

export default DateFilter;
