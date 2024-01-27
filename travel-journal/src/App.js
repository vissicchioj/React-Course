import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

function App() {
  const cardElements = data.map(item => {
    return (<Card
        key = {item.id}
        item = {item}
      />)
  })

  return (
    <div>
      <Navbar />
      {cardElements}
    </div>
  );
}


export default App;
