import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
