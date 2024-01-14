import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="contacts">
      <Contact 
        img  = "whiskers.png"
        name = "Whiskers"
        phone = "(123) 456-7890"
        email = "whiskers@meow.com"
      />
      <Contact 
        img  = "cheese.png"
        name = "Cheese"
        phone = "(123) 456-7891"
        email = "cheese@meow.com"
      />
      <Contact 
        img  = "skelly.png"
        name = "Skelly"
        phone = "(123) 456-7892"
        email = "skelly@meow.com"
      />
      <Contact 
        img  = "bobbie.png"
        name = "Bobbie"
        phone = "(123) 456-7893"
        email = "bobbie@meow.com"
      />
    </div>
  );
}

export default App;
