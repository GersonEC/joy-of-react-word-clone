import Guess from '../Guess/Guess';

function GuessResults({ guessList = [] }) {
  return (
    <div className='guess-results'>
      <Guess guess={guessList[0] ?? ''} />
      <Guess guess={guessList[1] ?? ''} />
      <Guess guess={guessList[2] ?? ''} />
      <Guess guess={guessList[3] ?? ''} />
      <Guess guess={guessList[4] ?? ''} />
      <Guess guess={guessList[5] ?? ''} />
    </div>
  );
}

export default GuessResults;
