import React from 'react';
import Gameboard from './components/Gameboard'
import kacki from './kacki.png';
import './App.css';
import data from './sentences.json'

function shuffleArray(arr) {
  return arr;
}

function App() {

  const onRetryClick = () => {
    console.log("Retry pressed");
  }

  return (
    <div className="App">
      <img src={kacki} className="kacki" alt="Kacki" />
      <div>
          <Gameboard data={shuffleArray(data.sentences).slice(0, 25)} />
      </div>
      <button onClick={onRetryClick}>Neu starten</button>
    </div>
  );
}

export default App;
