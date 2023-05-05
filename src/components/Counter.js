import React, { useState, useEffect } from "react";

const Counter = () => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const now = new Date();
    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const midnight = new Date(tomorrow.setHours(0, 0, 0, 0));
    const timeUntilMidnight = midnight.getTime() - now.getTime();

    setRemainingTime(timeUntilMidnight);

    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
  const seconds = Math.floor((remainingTime / 1000) % 60);

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 w-full text-primaryColor p-4">
      <p className="text-xl md:text-3xl font-semibold">
        Essas ofertas só valem por:{" "}
      </p>
      <div className="text-xl md:text-3xl font-semibold">
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  );
};

export default Counter;
