import React, { useState } from 'react';

function GuessingGame() {
  const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  function handleGuess(event) {
    event.preventDefault();
    const numGuess = parseInt(guess);
    if (isNaN(numGuess)) {
      setMessage('Please enter a  number.');
    } else if (numGuess < luckyNumber) {
      setAttempts(attempts + 1);
      setMessage(`You guessed ${numGuess}. That's too low!`);
    } else if (numGuess > luckyNumber) {
      setAttempts(attempts + 1);
      setMessage(`You guessed ${numGuess}. That's too high!`);
    } else {
      setAttempts(attempts + 1);
      setMessage(`Congratulations! You guessed the number ${luckyNumber} in ${attempts + 1} attempts!`);
    }
  }

  return (
    <div>
      <button onClick={handleGuess}>
        <label>
          Guess the number (1-100):
          <input type="text" value={guess} onChange={event => setGuess(event.target.value)} />
        </label>
        <button type="submit">Guess</button>
      </button>
      <p>{message}</p>
    </div>
  );
}

export default GuessingGame;

