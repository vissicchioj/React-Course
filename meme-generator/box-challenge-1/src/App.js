import './App.css';
import React from "react"
import boxes from "./boxes"

export default function App(props) {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */

    const [boxList, setBoxList] = React.useState(boxes);

    const styles = {
      backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }

    const boxElements = boxList.map(box => (
      <div style={styles} className='box' key = {boxList.id}></div>)
      )

    return (
        <main>
            <h1>Boxes will go here</h1>
            {boxElements}
        </main>
    )
}
