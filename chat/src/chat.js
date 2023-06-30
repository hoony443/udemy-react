import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001"); // 서버의 URL에 맞게 변경

function Chat() {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    socket.on("message", handleMessage);
    return () => {
      socket.off("message", handleMessage);
    };
  }, []);

  const handleMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleMessageSend = () => {
    if (inputValue.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString();
      socket.emit("message", {
        username,
        content: inputValue,
        time: currentTime,
      });
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="사용자 이름"
      />

      <h2>채팅</h2>
      <div>
        {messages.map((message, index) => (
          <p key={index} style={{ color: message.color }}>
            {message.username}: {message.content} - {message.time}
          </p>
        ))}
      </div>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleMessageSend}>전송</button>
    </div>
  );
}

export default Chat;
