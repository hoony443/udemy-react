import React, { useState } from "react";
import Timer from "./timer";

export default function ToggleTimer() {
  const [showTimer, setShowTimer] = useState(true);

  const handleToggleTimer = () => {
    setShowTimer((prev) => !prev);
  };
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={handleToggleTimer}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
    </div>
  );
}
