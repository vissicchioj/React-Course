import React from "react"
import './App.css';

function App() {
  function handleClick(){
    console.log("I was clicked!")
  }

  function handleMouseOver(){
    console.log("You hovered over the image!")
  }
  
  return (
    <div className="container">
      <img 
        src="https://picsum.photos/640/360" 
        onMouseOver={handleMouseOver}
      />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
