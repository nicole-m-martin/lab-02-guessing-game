# Plan!!

Guess a number app

HTML Setup

1. Number Input

- Why? So user can enter their guesses

2. Button

- Why? So user can check their guesses

3. Guesses-remaining guesses
   -Why? to display remaining guesses
4. (too high/too low/ you got it) span

- W? Tell the user whats wrong with their guess (if anything)

1. Go grab these DOM Elements (ids!!)
2. Initialize the state (our global let's)

- Random number: n (const )
- Guesses remaining: 4

3. Add event listener to our button

- on click
  1. state: decrement remaining guesses by 1(--)
  2. store user guess in a variable (Number(`someInput.value`))
     3)compare user guess with random number
  3. VIEW:
     a) if user guess is > the random number as 'too high' our results
     b)
     c) if the user guess is equal to the random number, congrats user.
     - disable the input if they win.
  4. VIEW: check if there are any guesses left, if not, disable the input and add a losing message

* STRETCH \*) add another event listener on the the reset button
  - on click
  1. reset the remaining guesses state to 4
  2. Create a new random number
  3. VIEW: re-enable the input, if they are disabled and fix the game text

Get a number between 1 and 20 randomly:
math.random() _ 20  
 This creates a number between 1 and 20
math.ceil(math.random() _ 20)
