import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import React from 'react';

function App() {
  const [darkMode, setDarkMode] = React.useState(false) 
  
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className='container'>
      <Navbar darkMode ={darkMode}  toggleDarkMode = {toggleDarkMode}/>
      <Main darkMode ={darkMode}/>
    </div>
  );
}

export default App;
