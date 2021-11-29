    
let randomNumber = Math.floor(Math.random() * 100) + 1
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let compteur = document.querySelector('.chance')

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 9;
let resetButton;
guessField.focus();
console.log(randomNumber);
function checkGuess() {
  let userGuess = Number(guessField.value);
 
  if (guessCount === 10) {
    guesses.textContent = 'Propositions précédentes : ';
  }
  compteur.textContent = ` Tentative:${guessCount} `;
  guesses.textContent += userGuess + ' ';
  if (guessCount>= 8 && userGuess === randomNumber ) {
    lastResult.textContent = 'Bravo, vous etes un Génie !!!';
    lastResult.style.backgroundColor = 'green';
  }
  else if (guessCount<= 7  && userGuess === randomNumber ) {
    lastResult.textContent = `Félicitations, vous avez gagné après ${guessCount = 10 - guessCount} Tentatives`
    lastResult.style.backgroundColor = 'green';
  }
  
  else if (guessCount === 0) {
     lastResult.textContent =  'Cest raté !!';
     setGameOver();
  }
     else {
     lastResult.textContent = 'Faux !';
     lastResult.style.backgroundColor = 'red';
     if (userGuess < randomNumber) {
      lowOrHi.textContent = `${userGuess} is smaller`;

     } else if (userGuess > randomNumber) {
      lowOrHi.textContent = `${userGuess} is higher`;
     }
     if (userGuess < 1 || userGuess > 100) {
      alert("please enter a number between 1 and 100");
      compteur.textContent = '';
      guesses.textContent = '';
      lastResult.textContent = '';
      lowOrHi.textContent = '';
      lastResult.style.backgroundColor = '';
      guessCount = 10;
  }

  }
  guessCount--;
  guessField.value = '';
  guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
  }
  function resetGame() {
    guessCount = 10;
  
    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }

  


