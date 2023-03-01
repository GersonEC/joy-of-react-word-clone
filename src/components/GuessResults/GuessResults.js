import Guess from '../Guess/Guess';

function GuessResults({ guessList, answer }) {
  return (
    <div className='guess-results'>
      <Guess answer={answer} guess={guessList[0] ?? ''} />
      <Guess answer={answer} guess={guessList[1] ?? ''} />
      <Guess answer={answer} guess={guessList[2] ?? ''} />
      <Guess answer={answer} guess={guessList[3] ?? ''} />
      <Guess answer={answer} guess={guessList[4] ?? ''} />
      <Guess answer={answer} guess={guessList[5] ?? ''} />
    </div>
  );
}

export default GuessResults;
