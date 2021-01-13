// import functions and grab DOM elements
const goButton = document.getElementById('go-button');
const guessInput = document.getElementById('number-input');
const guessRemain = document.getElementById('guesses-remaining');
const result = document.getElementById('results');

// console.log(goButton, guessInput, guessRemain, result);

// // initialize state

let randomNumber = Math.ceil(Math.random() * 20);
let guessAmount = 4;



// // set event listeners to update state and DOM
goButton.addEventListener('click', () => {
    // console.log(randomNumber);
    
    guessAmount--;

    guessRemain.textContent = guessAmount;

    // const guessInput = randomNumber(guessInput.value);

    guessRemain.textContent = `You have ${guessRemain} guesses to go!`;

    if (guessInput ===0) {
        result.textContent = `Game Over!`;
        goButton.disabled = true;
    }
    

 

});










