// import { compareNumbers } from '../compareNumbers.js';

// import { compareNumbers } from "./compareNumbers";

const guessInput = document.getElementById('user-input');
const goButton = document.getElementById('go-button');
const countDown = document.getElementById('count-down');
const results = document.getElementById('results');
// console.log(guessInput, goButton, countDown, results);


let allGuesses = 4;
let rightNumber = Math.ceil(Math.random() * 20);

goButton.addEventListener('click', () => {
    // console.log(rightNumber);
    allGuesses--;

    const numberInput = Number(guessInput.value);
    // const compareResults = compareNumbers (guess, correctNumber);

    countDown.textContent = `There's ${allGuesses} guesses left!`;
    
    if (allGuesses === 0) {
        goButton.disabled = true;
    }

    const endResult = compareNumbers(numberInput, rightNumber);

    
    if (endResult === -1); {
        results.textContent = `To Low! Guess again!`;
    }
   
    if (endResult === +1); {
        results.textContent = `To High! Guess again!`;
    }

    if (endResult === 0); {
        results.textContent = `Winner Winner!`;
    }

    
    
});

