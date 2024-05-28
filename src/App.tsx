import React, { useState, useEffect } from "react";
import Hangman from "./components/Hangman";
import Welcome from "./components/Welcome";

const words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi'];

function App() {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeElapsed(prevTime => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="App">
      <Welcome />
      <div>Tiempo transcurrido: {formatTime(timeElapsed)}</div>
      <Hangman words={words} />
    </div>
  );
}

export default App;
