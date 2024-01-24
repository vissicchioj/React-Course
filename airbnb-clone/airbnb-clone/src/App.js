import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cardElements = data.map(cards => {
    return <Card 
      key = {cards.id}
      title = {cards.title}
      description = {cards.description}
      price = {cards.price}
      img = {cards.coverImg}
      stats = {cards.stats}
      location = {cards.location}
      openSpots = {cards.openSpots}
    />
  })
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div className="cards">
        {cardElements}
      </div>
      {/* <Card 
        img = "swimmer.png"
        rating = "5.0"
        reviewCount = {6}
        country = "USA"
        title = "Life Lessons with Katie Zaferes"
        price = {136}
      /> */}
    </div>
  );
}

export default App;
