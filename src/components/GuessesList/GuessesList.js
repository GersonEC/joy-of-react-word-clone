function GuessesList({ guessList = [] }) {
  return (
    <div className='guess-results'>
      {guessList.map((item, index) => (
        <p key={index} className='guess'>
          {item}
        </p>
      ))}
    </div>
  );
}

export default GuessesList;
