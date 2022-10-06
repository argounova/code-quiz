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

// VARIABLES
var answerA = document.querySelector("#answer-a");
var answerB = document.querySelector("#answer-b");
var answerC = document.querySelector("#answer-c");
var answerD = document.querySelector("#answer-d");
var answerE = document.querySelector("#answer-e");
var answerF = document.querySelector("#answer-f");
var answerG = document.querySelector("#answer-g");
var answerH = document.querySelector("#answer-h");
var answerOfA = answerA.textContent;
var answerOfB = answerB.textContent;
var answerOfC = answerC.textContent;
var answerOfD = answerD.textContent;
var answerOfE = answerE.textContent;
var answerOfF = answerF.textContent;
var answerOfG = answerG.textContent;
var answerOfH = answerH.textContent;
var selectedAnswer;
var timer;
var timerCount;
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var nextQuestionButton = document.querySelector(".next-button");

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
// FUNCTION FOR CLICKING AN ANSWER
function storeAnswer() {
  console.log(selectedAnswer);
  if (selectedAnswer === answerOfB) {
  document.getElementById("correct").style.display = "block";
  } else {
    document.getElementById("not-correct").style.display = "block";
    console.log(timerCount);
    timerCount = timerCount - 10;
    console.log(timerCount);
    timerElement.textContent = timerCount;
  }
  document.getElementById("hide-next-button").style.display = "block";
}
// FUNCTION FOR CLICKING SECOND ANSWER
function storeNextAnswer() {
  console.log(selectedAnswer);
  if (selectedAnswer === answerOfE) {
  document.getElementById("correct").style.display = "block";
  } else {
    document.getElementById("not-correct").style.display = "block";
    console.log(timerCount);
    timerCount = timerCount - 10;
    console.log(timerCount);
    timerElement.textContent = timerCount;
  }
  document.getElementById("hide-next-button").style.display = "block";
}
// FUNCTION FOR WHEN THE NEXT QUESTION BUTTON IS CLICKED
function nextQuestion() {
  document.getElementById("questions-set1").style.display = "none";
  document.getElementById("questions-set2").style.display = "block";
  document.getElementById("correct").style.display = "none";
  document.getElementById("not-correct").style.display = "none";
}
// TIMER FUNCTION
function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}
// Click event to start the quiz and run the function
startButton.addEventListener("click", startQuiz);

// Click event to proceed to the next question
nextQuestionButton.addEventListener("click", nextQuestion);

// Events that happen when the user selects an answer by clicking a button
answerA.addEventListener("click", function () {
  selectedAnswer = answerA.textContent;
  localStorage.setItem("answer", selectedAnswer);
  storeAnswer();
  answerB.disabled = true;
  document.getElementById("answer-b").style.background = "#4d4d4d";
  document.getElementById("answer-b").style.fontFamily = "serif";
  document.getElementById("answer-b").style.color = "#000";
  answerC.disabled = true;
  document.getElementById("answer-c").style.background = "#4d4d4d";
  document.getElementById("answer-c").style.fontFamily = "serif";
  document.getElementById("answer-c").style.color = "#000";
  answerD.disabled = true;
  document.getElementById("answer-d").style.background = "#4d4d4d";
  document.getElementById("answer-d").style.fontFamily = "serif";
  document.getElementById("answer-d").style.color = "#000";
});
answerB.addEventListener("click", function () {
  selectedAnswer = answerB.textContent;
  localStorage.setItem("answer", selectedAnswer);
  storeAnswer();
  answerB.disabled = true;
  document.getElementById("answer-a").style.background = "#4d4d4d";
  document.getElementById("answer-a").style.fontFamily = "serif";
  document.getElementById("answer-a").style.color = "#000";
  answerC.disabled = true;
  document.getElementById("answer-c").style.background = "#4d4d4d";
  document.getElementById("answer-c").style.fontFamily = "serif";
  document.getElementById("answer-c").style.color = "#000";
  answerD.disabled = true;
  document.getElementById("answer-d").style.background = "#4d4d4d";
  document.getElementById("answer-d").style.fontFamily = "serif";
  document.getElementById("answer-d").style.color = "#000";
});
answerC.addEventListener("click", function () {
  selectedAnswer = answerC.textContent;
  localStorage.setItem("answer", selectedAnswer);
  storeAnswer();
  answerB.disabled = true;
  document.getElementById("answer-a").style.background = "#4d4d4d";
  document.getElementById("answer-a").style.fontFamily = "serif";
  document.getElementById("answer-a").style.color = "#000";
  answerC.disabled = true;
  document.getElementById("answer-b").style.background = "#4d4d4d";
  document.getElementById("answer-b").style.fontFamily = "serif";
  document.getElementById("answer-b").style.color = "#000";
  answerD.disabled = true;
  document.getElementById("answer-d").style.background = "#4d4d4d";
  document.getElementById("answer-d").style.fontFamily = "serif";
  document.getElementById("answer-d").style.color = "#000";
});
answerD.addEventListener("click", function () {
  selectedAnswer = answerD.textContent;
  localStorage.setItem("answer", selectedAnswer);
  storeAnswer();
  answerB.disabled = true;
  document.getElementById("answer-a").style.background = "#4d4d4d";
  document.getElementById("answer-a").style.fontFamily = "serif";
  document.getElementById("answer-a").style.color = "#000";
  answerC.disabled = true;
  document.getElementById("answer-b").style.background = "#4d4d4d";
  document.getElementById("answer-b").style.fontFamily = "serif";
  document.getElementById("answer-b").style.color = "#000";
  answerD.disabled = true;
  document.getElementById("answer-c").style.background = "#4d4d4d";
  document.getElementById("answer-c").style.fontFamily = "serif";
  document.getElementById("answer-c").style.color = "#000";
});
//////////////////////////

// Events that happen when the user selects an answer by clicking a button
  answerE.addEventListener("click", function () {
  selectedAnswer = answerE.textContent;
  localStorage.setItem("answer", selectedAnswer);
  storeNextAnswer();
  answerF.disabled = true;
  document.getElementById("answer-f").style.background = "#4d4d4d";
  document.getElementById("answer-f").style.fontFamily = "serif";
  document.getElementById("answer-f").style.color = "#000";
  answerG.disabled = true;
  document.getElementById("answer-g").style.background = "#4d4d4d";
  document.getElementById("answer-g").style.fontFamily = "serif";
  document.getElementById("answer-g").style.color = "#000";
  answerH.disabled = true;
  document.getElementById("answer-h").style.background = "#4d4d4d";
  document.getElementById("answer-h").style.fontFamily = "serif";
  document.getElementById("answer-h").style.color = "#000";
});
  answerF.addEventListener("click", function () {
  selectedAnswer = answerF.textContent;
  localStorage.setItem("answer", selectedAnswer);
  storeNextAnswer();
  answerE.disabled = true;
  document.getElementById("answer-e").style.background = "#4d4d4d";
  document.getElementById("answer-e").style.fontFamily = "serif";
  document.getElementById("answer-e").style.color = "#000";
  answerG.disabled = true;
  document.getElementById("answer-g").style.background = "#4d4d4d";
  document.getElementById("answer-g").style.fontFamily = "serif";
  document.getElementById("answer-g").style.color = "#000";
  answerH.disabled = true;
  document.getElementById("answer-h").style.background = "#4d4d4d";
  document.getElementById("answer-h").style.fontFamily = "serif";
  document.getElementById("answer-h").style.color = "#000";
});
answerG.addEventListener("click", function () {
  selectedAnswer = answerG.textContent;
  localStorage.setItem("answer", selectedAnswer);
  storeNextAnswer();
  answerE.disabled = true;
  document.getElementById("answer-e").style.background = "#4d4d4d";
  document.getElementById("answer-e").style.fontFamily = "serif";
  document.getElementById("answer-e").style.color = "#000";
  answerF.disabled = true;
  document.getElementById("answer-f").style.background = "#4d4d4d";
  document.getElementById("answer-f").style.fontFamily = "serif";
  document.getElementById("answer-f").style.color = "#000";
  answerH.disabled = true;
  document.getElementById("answer-h").style.background = "#4d4d4d";
  document.getElementById("answer-h").style.fontFamily = "serif";
  document.getElementById("answer-h").style.color = "#000";
});
answerH.addEventListener("click", function () {
  selectedAnswer = answerH.textContent;
  localStorage.setItem("answer", selectedAnswer);
  storeNextAnswer();
  answerE.disabled = true;
  document.getElementById("answer-e").style.background = "#4d4d4d";
  document.getElementById("answer-e").style.fontFamily = "serif";
  document.getElementById("answer-e").style.color = "#000";
  answerF.disabled = true;
  document.getElementById("answer-f").style.background = "#4d4d4d";
  document.getElementById("answer-f").style.fontFamily = "serif";
  document.getElementById("answer-f").style.color = "#000";
  answerG.disabled = true;
  document.getElementById("answer-g").style.background = "#4d4d4d";
  document.getElementById("answer-g").style.fontFamily = "serif";
  document.getElementById("answer-g").style.color = "#000";
});

// // These functions are used by init
// function getWins() {
//   // Get stored value from client storage, if it exists
//   var storedWins = localStorage.getItem("winCount");
//   // If stored value doesn't exist, set counter to 0
//   if (storedWins === null) {
//     winCounter = 0;
//   } else {
//     // If a value is retrieved from client storage set the winCounter to that value
//     winCounter = storedWins;
//   }
//   //Render win count to page
//   win.textContent = winCounter;
// }

// // Attach event listener to document to listen for key event
// document.addEventListener("keydown", function(event) {
//   // If the count is zero, exit function
//   if (timerCount === 0) {
//     return;
//   }
//   // Convert all keys to lower case
//   var key = event.key.toLowerCase();
//   var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
//   // Test if key pushed is letter
//   if (alphabetNumericCharacters.includes(key)) {
//     var letterGuessed = event.key;
//     checkLetters(letterGuessed)
//     checkWin();
//   }
// });

// Attach event listener to start button to call startGame function on click


// Calls init() so that it fires when page opened
// init();

// // Bonus: Add reset button
// var resetButton = document.querySelector(".reset-button");

// function resetGame() {
//   // Resets win and loss counts
//   winCounter = 0;
//   loseCounter = 0;
//   // Renders win and loss counts and sets them into client storage
//   setWins()
//   setLosses()
// }
// // Attaches event listener to button
// resetButton.addEventListener("click", resetGame);