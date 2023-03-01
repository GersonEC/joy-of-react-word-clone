import React from 'react';
import { WORDS } from '../../data';
import { sample } from '../../utils';
import Banner from '../Banner/Banner';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [status, setStatus] = React.useState('running'); //running | won | lost
  const inputDisabled = status !== 'running';

  const handleGuessSubmit = (newGuess) => {
    const newGuessList = [...guessList, newGuess];
    setGuessList(newGuessList);
    if (newGuessList.length > 5) setStatus('lost');
    if (newGuess === answer) setStatus('won');
  };

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });
  return (
    <>
      <div>
        <GuessResults guessList={guessList} answer={answer} />
        <GuessInput
          onGuessSubmit={handleGuessSubmit}
          disabled={inputDisabled}
        />
      </div>
      {status === 'won' && (
        <Banner variant='happy'>
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{guessList.length} guesses</strong>.
          </p>
        </Banner>
      )}
      {status === 'lost' && (
        <Banner variant='sad'>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </Banner>
      )}
    </>
  );
}

export default Game;
