    
let randomNumber = Math.floor(Math.random() * 100) + 1
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let compteur = document.querySelector('.chance')
let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 9;
let resetButton = document.querySelector('.button');
resetButton.style.display = 'none';

guessField.focus();
console.log(randomNumber);
var input = document.querySelector('.guessField');
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector('.guessSubmit').click();
    
  }
});
function checkGuess() 
{
  let userGuess = Number(guessField.value);
  compteur.textContent = ` Number of turns:${guessCount} `;
   guesses.textContent += userGuess + ' ';
  if (guessCount>= 8 && userGuess === randomNumber )
  {
    lastResult.textContent = 'True, you are a genius !!!';
    lastResult.style.backgroundColor = 'green';
    setGameOver();
  }

  else if (guessCount<= 7  && userGuess === randomNumber )
  {
    lastResult.textContent = `Congratulations, you won after ${guessCount = 10 - guessCount} Turns`
    lastResult.style.backgroundColor = 'green';
    setGameOver();
  }
  
  else if (guessCount === 0) 
  {
     lastResult.textContent =  'Game over!!';

     setGameOver();
  }
     else 
     {
     lastResult.textContent = 'False !';
     lastResult.style.backgroundColor = 'red';
     }

     if (userGuess < randomNumber) 
     
      lowOrHi.textContent = `${userGuess} is lower`;
     
     else if (userGuess > randomNumber) 
    
      lowOrHi.textContent = `${userGuess} is higher`;
    
     if (userGuess < 1 || userGuess > 100) 
    {
      alert("please enter a number between 1 and 100");
      compteur.textContent = 'Number of turns:';
      guesses.textContent = 'Previous Guess:';
      lastResult.textContent = 'True or False';
      lowOrHi.textContent = 'Low or High';
      lastResult.style.backgroundColor = '';
      guessCount = 10;
   }
  
   guessCount--;
   guessField.value = '';
   guessField.focus();


}
guessSubmit.addEventListener('click', checkGuess);


function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton.style.display = 'block';
  resetButton.textContent = 'Start new game';
  resetButton.style.backgroundColor = 'green';

  resetButton.addEventListener('click', resetGame);
  }
function resetGame() {
  window.location.reload();
}


  


