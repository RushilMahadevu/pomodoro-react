import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const resetButton = () => {
    setMinutes(25);
    setSeconds(0);
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let minutes = displayMessage ? 24 : 4;
            let seconds = 3;
            // 24 : 4
            setSeconds(seconds);
            setMinutes(minutes);
            setDisplayMessage(!displayMessage);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [seconds, minutes, isRunning, displayMessage]);

  useEffect(() => {
    // Add this effect to handle body classes
    if (displayMessage) {
      document.body.classList.remove('focus-mode');
      document.body.classList.add('break-mode');
    } else {
      document.body.classList.remove('break-mode');
      document.body.classList.add('focus-mode');
    }
  }, [displayMessage]);
  

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className={`timer-container ${displayMessage ? 'break-mode' : 'focus-mode'}`}>
      <div className="timer">
        <motion.h1
          initial={{ y: 25}}
          animate={{ y: 0}}
          transition={{ duration: 1,  type: "spring", stiffness: 140 }}
          className="title"
        >
          {timerMinutes}:{timerSeconds}
        </motion.h1>
      </div>
      <div className="button-container">  
        <motion.button
          className="start-button"
          onClick={() => setIsRunning(true)}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 1, type: "spring", stiffness: 140 }}
        >
          Start
        </motion.button>

        <motion.button
          className="pause-button"
          onClick={() => setIsRunning(false)}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 1, type: "spring", stiffness: 140 }}
        >
          Pause
        </motion.button>

        <motion.button
          className="reset-button"
          onClick={resetButton}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 1, type: "spring", stiffness: 140 }}
        >
          Reset
        </motion.button>
      </div>

    </div>
  );
}

