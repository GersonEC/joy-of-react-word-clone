import Guess from '../Guess/Guess';

function GuessResults({ guessList = [] }) {
  const renderCells = (guess) => {
    const guessArray = guess.split('');
    return (
      <>
        {guessArray.map((char, index) => (
          <span key={index} class='cell'>
            {char}
          </span>
        ))}
      </>
    );
  };
  return (
    <div class='guess-results'>
      {guessList.map((item, index) => (
        <p key={index} className='guess'>
          {item}
        </p>
      ))}
      <Guess />
      <Guess />
      <Guess />
      <Guess />
      <Guess />
    </div>
  );
}

export default GuessResults;
