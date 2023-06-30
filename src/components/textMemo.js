import React, { useState, useEffect } from "react";

export default function TextMemo() {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(text.length);
  }, [text]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea value={text} onChange={handleTextChange} />
      <p>Character Count: {charCount}</p>
    </div>
  );
}
