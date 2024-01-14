import logo from './logo.svg';
import './App.css';
import React from "react"

function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12){
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else if (hours >= 17 && hours < 20) {
    timeOfDay = "evening"
  } else {
    timeOfDay = "night"
  }

  return (
    <h1>Good {timeOfDay}!</h1>
  );
}

export default App;
