import React from 'react';

function GuessInput({ onGuessSubmit, disabled }) {
  const [guess, setGuess] = React.useState('');

  const onGuessChange = (e) => {
    const value = e.target.value;
    const newGuess = value.toUpperCase();
    if (newGuess.length < 6) setGuess(newGuess);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(guess);
    onGuessSubmit(guess);
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
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        value={guess}
        disabled={disabled}
        onChange={onGuessChange}
      />
    </form>
  );
}

export default GuessInput;
