import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const DateFilter = () => {
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState("March");

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

  const handlePreviousYear = () => setYear((prev) => prev - 1);
  const handleNextYear = () => setYear((prev) => prev + 1);

  const handlePreviousMonth = () => {
    const currentIndex = months.indexOf(month);
    const newIndex = currentIndex === 0 ? months.length - 1 : currentIndex - 1;
    setMonth(months[newIndex]);

    // If we go back from January, also decrement the year
    if (currentIndex === 0) {
      setYear((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    const currentIndex = months.indexOf(month);
    const newIndex = currentIndex === months.length - 1 ? 0 : currentIndex + 1;
    setMonth(months[newIndex]);

    // If we go forward from December, also increment the year
    if (currentIndex === months.length - 1) {
      setYear((prev) => prev + 1);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-3 px-3 py-1.5 rounded border">
      {/* Year Navigation */}
      <button onClick={handlePreviousYear}>
        <ChevronsLeft className="h-4 w-4 cursor-pointer" />
      </button>
      <div className="flex items-center space-x-2">
        <span className="font-medium text-sm">{year}</span>
      </div>
      {/* Year Navigation */}
      <button onClick={handleNextYear}>
        <ChevronsRight className="h-4 w-4 cursor-pointer" />
      </button>
      {/* Month Navigation */}
      <button onClick={handlePreviousMonth}>
        <ChevronLeft className="h-4 w-4 cursor-pointer" />
      </button>

      {/* Year and Month Display */}
      <div className="flex items-center space-x-2">
        <span className="font-medium text-sm">{month}</span>
      </div>

      {/* Month Navigation */}
      <button onClick={handleNextMonth}>
        <ChevronRight className="h-4 w-4 cursor-pointer" />
      </button>
    </div>
  );
};

export default DateFilter;
