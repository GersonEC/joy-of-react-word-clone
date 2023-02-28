import React from 'react';
import Game from '../Game';
import GuessInput from '../GuessInput/GuessInput';
import GuessesList from '../GuessesList/GuessesList';
import Header from '../Header';

function App() {
  const [guessList, setGuessList] = React.useState([]);

  const handleGuessSubmit = (newGuess) => {
    setGuessList([...guessList, newGuess]);
  };

  return (
    <div className='wrapper'>
      <Header />

      <div className='game-wrapper'>
        <Game />
        <GuessesList guessList={guessList} />
        <GuessInput onGuessSubmit={handleGuessSubmit} />
      </div>
    </div>
  );
}

export default App;
