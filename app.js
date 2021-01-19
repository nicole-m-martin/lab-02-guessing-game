import { compareNumbers } from './compareNumbers.js';

const guessInput = document.getElementById('guess-input');
const goButton = document.getElementById('go-button');
const resultsSpan = document.getElementById('results');

let userGuesses = 4;
let correctNumber = Math.ceil(Math.random() * 20);


goButton.addEventListener('click', () => { 
//  console.log(correctNumber);
    --userGuesses;
    if (userGuesses === 0) {
        goButton.disabled = true;    
    }

    const numberInput = Number(guessInput.value);
    const gameResults = compareNumbers(numberInput, correctNumber);

    if (gameResults === -1) {
        resultsSpan.textContent = `To Low! Try again to beat me! You have ${userGuesses} left.... `;
    }
    if (gameResults === 1) {
        resultsSpan.textContent = `To High! Guess again if you must! You now have ${userGuesses} to go.....`;
    }
    if (gameResults === 0) {
        resultsSpan.textContent = 'Ok...I knew you were smart! You got the correct number!!';
    }

});