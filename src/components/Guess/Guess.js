function Guess({ guess = '' }) {
  return (
    <p className='guess'>
      <span className='cell'>{guess.charAt(0)}</span>
      <span className='cell'>{guess.charAt(1)}</span>
      <span className='cell'>{guess.charAt(2)}</span>
      <span className='cell'>{guess.charAt(3)}</span>
      <span className='cell'>{guess.charAt(4)}</span>
    </p>
  );
}

export default Guess;
