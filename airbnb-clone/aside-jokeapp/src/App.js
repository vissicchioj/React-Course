import logo from './logo.svg';
import './App.css';
import Joke from './components/Joke';
import jokesData from './jokesData';

function App() {
  const jokeElements = jokesData.map(joke => {
    return <Joke setup = {joke.setup} punchline = {joke.punchline} />
  })
  return (
    <div className="App">
      <h1>Cheesy Pickup Lines</h1>
      <div className = "jokes">
        {jokeElements}
      </div>
    </div>
  );
}

export default App;
      /* <Joke 
        setup = "I really have to download Waze..."
        punchline = "Cuz I keep getting lost in your eyes."
      />
      <Joke 
        setup = "Are you from Tennessee"
        punchline = "Cuz you're the only ten I see."
      />
      <Joke 
        setup = "Is your name Google?"
        punchline = "Cuz you are everything I've been searching for."
      />
      <Joke 
        setup = "Are you a camera?"
        punchline = "Cuz I can't help but smile in front of you."
      />
      <Joke 
        setup = "I didn't think I'd get this far..."
        punchline = ""
      /> */