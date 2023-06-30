import React, { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("리턴되었습니다.");
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p>초 : {seconds}</p>
    </div>
  );
}
