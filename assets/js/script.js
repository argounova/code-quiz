// // variables to keep track of quiz state
//     // currentQuestion
//     // time
//     // timerId

// // variables to reference DOM elements
// var questionsEl = document.getElementById('questions');




// /// FUNCTION TO GET/SHOW EACH QUESTION ///
// function getQuestion() {
//   // get current question object from array

//   // update title with current question

//   // clear out any old question choices

//   // loop over choices
//     // FOR {
//       // create new button for each choice
  
//       // display on the page
      
//     // } 
// }

// /// FUNCTION FOR CLICKING A QUESTION ///
// function questionClick(event) {

//   // if the clicked element is not a choice button, do nothing.
//   if (something) {

//   }

//   if (something) {
//   // check if user guessed wrong
//     // penalize time

//     // display new time on page

//     // give them feedback, letting them know it's wrong
//   } else {
//     // give them feedback, letting them know it's right
//   }

//   // flash right/wrong feedback on page for a short period of time

//   // move to next question

//   // check if we've run out of questions
//     // if so, end the quiz
//     // else, get the next question
// }

// /// FUNCTION TO END THE QUIZ ///
// function quizEnd() {
//   // stop timer

//   // show end screen

//   // show final score

//   // hide questions section
// }

// /// FUNCTION FOR UPDATING THE TIME ///
// function clockTick() {
//   // update time

//   // check if user ran out of time
// }

// function saveHighscore() {
//   // get value of input box - for initials

//   // make sure value wasn't empty
//     // get saved scores from localstorage, or if not any, set to empty array

//     // format new score object for current user

//     // save to localstorage

//     // redirect to next page
// }

// /// CLICK EVENTS ///
//   // user clicks button to submit initials

//   // user clicks button to start quiz

//   // user clicks on element containing choices

// function printHighscores() {
//     // either get scores from localstorage or set to empty array
  
//     // sort highscores by score property in descending order
  
//     // loop through scores
//       // create li tag for each high score
  
//       // display on page
//   }
  
//   /// FUNCTION TO CLEAR SCORES ///
//   function clearHighscores() {
//     // remove an item from local storage
//     // reload the page
//   }
  
//   /// CLICK EVENT TO RUN THE CLEAR SCORES FUNCTION ///
  
//   // run function when page loads
//   printHighscores();

  /////////////////////////////////////

var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];

// Array of words the user will guess
var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];

// The init function is called when the page loads 
function init() {
  getWins();
  getlosses();
} 


//   // show starting time

//   getQuestion();

// FUNCTION TO START THE QUIZ
function startQuiz() {
  // hide start screen
  document.getElementById("start").style.display = "none";
  // un-hide questions section
  document.getElementById("questions-set1").style.display = "block";
  // start timer
  timerCount = 75;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  startTimer();
}


// The winGame function is called when the win condition is met
function winGame() {
  wordBlank.textContent = "YOU WON!!!🏆 ";
  winCounter++
  startButton.disabled = false;
  setWins()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  wordBlank.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}
startButton.addEventListener("click", startQuiz);

// Updates win count on screen and sets win count to client storage
function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
}

// These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winCount");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }
  //Render win count to page
  win.textContent = winCounter;
}

function getlosses() {
  var storedLosses = localStorage.getItem("loseCount");
  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = storedLosses;
  }
  lose.textContent = loseCounter;
}

function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
  if (chosenWord === blanksLetters.join("")) {
    // This value is used in the timer function to test if win condition is met
    isWin = true;
  }
}

// Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {
  var letterInWord = false;
  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var j = 0; j < numBlanks; j++) {
      if (chosenWord[j] === letter) {
        blanksLetters[j] = letter;
      }
    }
    wordBlank.textContent = blanksLetters.join(" ");
  }
}

// Attach event listener to document to listen for key event
document.addEventListener("keydown", function(event) {
  // If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }
  // Convert all keys to lower case
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  // Test if key pushed is letter
  if (alphabetNumericCharacters.includes(key)) {
    var letterGuessed = event.key;
    checkLetters(letterGuessed)
    checkWin();
  }
});

// Attach event listener to start button to call startGame function on click


// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);