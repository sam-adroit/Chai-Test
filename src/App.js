import React, { useState } from "react";

function App() {
  function Countdown() {
    const [timeLeft, setTimeLeft] = useState(30);

    const decrementTimeLeft = () => {
      if (timeLeft <= 15 && timeLeft > 10) {
        setTimeLeft((timeLeft) => timeLeft - 1);
      } else if (timeLeft === 10) {
        setTimeLeft((timeLeft) => timeLeft - 1);
        alert("5 seconds remaining");
      } else if (timeLeft <= 5 && timeLeft > 0) {
        setTimeLeft((timeLeft) => timeLeft - 1);
      } else if (timeLeft === 0) {
        clearInterval(timerId);
        alert("Time is up!");
      } else {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }
    };

    const timerId = setInterval(decrementTimeLeft, 1000);

    return (
      <div>
        <h1>Countdown: {timeLeft} seconds</h1>
      </div>
    );
  }
}

export default App;
