import React from 'react'

function Stopwatch() {
  var startTimer = setInterval(myTimer, 1000),
    timerElement = document.getElementById("timer"),
    buttonElement = document.getElementById("myButton");

  function myTimer() {
    var current = new Date();
    timerElement = current.toLocaleTimeString();
  }

  function toggle() {
    if (startTimer) {
      clearInterval(startTimer);
      startTimer = null;
      buttonElement = "Start";
    } else {
      buttonElement = "Stop";
      startTimer = setInterval(myTimer, 1000);
    }
  }

  return (
    <div>
      <p id="timer"></p>
      <button id="myButton" onClick= {toggle}>Stop</button>

    </div>
  )
}

export default Stopwatch
