let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();//it cancels the event if it is cancelable , meaning thatt the default action that belongs to the event will not occur.
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
      newGame(); // Automatically start a new game
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = ''; //it is used for cleanup for the input field

  guessSlot.innerHTML += `${guess} , `;
  numGuess++; //it will update the number of guesses in previous guesses array

  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';

  userInput.setAttribute('disabled', '');//This method sets a new value to an attribute if attribute not exists it will create a new attribute

  p.classList.add('button');
  p.innerHTML = `<button id="newGame">Start new Game</button>`;
  
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newgameButton = document.querySelector('#newGame');
  newgameButton.addEventListener('click', function(e)
{
  playGame = true;
  randomNumber = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = '';
  lowOrHi.innerHTML = '';
  remaining.innerHTML = `${11 - numGuess} `;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);
});
  /*randomNumber = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = '';
  remaining.innerHTML = `${11 - numGuess} `;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);

  playGame = true;*/
}