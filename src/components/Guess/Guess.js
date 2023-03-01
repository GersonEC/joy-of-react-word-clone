import { checkGuess } from '../../game-helpers';

function Guess({ answer, guess = '' }) {
  const guessChecked = checkGuess(guess, answer);
  const statusList = guessChecked?.map((item) => item.status);

  return (
    <p className='guess'>
      <span className={`cell ${statusList ? statusList[0] : null}`}>
        {guess.charAt(0)}
      </span>
      <span className={`cell ${statusList ? statusList[1] : null}`}>
        {guess.charAt(1)}
      </span>
      <span className={`cell ${statusList ? statusList[2] : null}`}>
        {guess.charAt(2)}
      </span>
      <span className={`cell ${statusList ? statusList[3] : null}`}>
        {guess.charAt(3)}
      </span>
      <span className={`cell ${statusList ? statusList[4] : null}`}>
        {guess.charAt(4)}
      </span>
    </p>
  );
}

export default Guess;
