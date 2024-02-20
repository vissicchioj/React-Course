import React from 'react';
import './App.css';
import Count from './components/Count';

/*
Quiz:

1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   
a. New value of state (setCount(42))
b. Callback function - whatever the callback function 
   returns === new value of state


2. When would you want to pass the first option (from answer
   above) to the state setter function?
Whenever you don't need the previous value of state to determine
what the new value of state should be.


3. When would you want to pass the second option (from answer
   above) to the state setter function?
Whenever you DO need the previous value to determine the new value

*/

export default function App() {
  /**
   * Challenge: Set up state to track our count (initial value is 0)
   */

  /**
     * Challenge: Create a function called `add` that runs
     * when the + button is clicked. (Can just console.log("add") for now)
     */

  /**
     * Challenge: 
     * See if you can think of a way to add 1 to the count
     * every time the + button is clicked
     */

  /**
     * Challenge: 
     * Add functionality to the minus button
     */

  const [count, setCount] = React.useState(0)

  /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */

  function add(){
    setCount(prevCount => prevCount + 1)
  }

  function subtract(){
    setCount(prevCount => prevCount - 1)
  }

   /**
     * Challenge:
     * - Create a new component named Count
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the whole div.counter--count
     *      and display the incoming prop `number`
     * - Replace the div.counter--count below with an instance of
     *   the new Count component
     */

  return (
      <div className="counter">
          <button className="counter--minus" onClick={subtract}>–</button>
          <Count 
            number = {count}
          />
          <button className="counter--plus" onClick={add}>+</button>
      </div>
  )
}
