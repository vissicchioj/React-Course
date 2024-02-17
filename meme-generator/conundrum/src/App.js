import React from 'react';
import './App.css';

function App() {
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

    /**
     * Challenge: Map over the thingsArray to generate
     * a <p> element for each item and render them on the page
     * below the button
     */

    const thingsElements = things.map(thing => <p key={thing}> {thing} </p>)
    
    /**
    * Challenge: Add an event listener to the button so when
    * it is clicked, it adds another thing to our array
    * 
    * Hint: use the array length + 1 to determine the number
    * of the "Thing" being added. Also, have you event listener
    * console.log(thingsArray) after adding the new item to the
    * array
    * 
    * Spoiler: the page won't update when new things get added
    * to the array!
    */

    function addItem() {
      const newThingText = `Thing ${things.length + 1}`
      setThings(prevState => [...prevState, newThingText])
    }

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

export default App;
