'use client';

import React, { useState, useEffect } from "react";

export default function Time() {  // Use PascalCase for component name
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format the time for the Philippines timezone (Asia/Manila)
  const formattedTime = time.toLocaleTimeString("en-US", {
    timeZone: "Asia/Manila",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return <span>{formattedTime}</span>;
}
