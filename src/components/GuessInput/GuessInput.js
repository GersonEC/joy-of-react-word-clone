import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  const onGuessChange = (e) => {
    const value = e.target.value;
    const newGuess = value.toUpperCase();
    if (newGuess.length < 6) setGuess(newGuess);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (guess.length !== 5) return;
    console.log(guess);
    setGuess('');
  };

  return (
    <form onSubmit={onSubmit} className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={onGuessChange}
      />
    </form>
  );
}

export default GuessInput;
