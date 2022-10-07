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
var submitButton = document.querySelector("#submit");

// FUNCTION TO START THE QUIZ
function startQuiz() {
  document.getElementById("start").style.display = "none";
  document.getElementById("questions-set1").style.display = "block";
  timerCount = 20;
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
    timerCount = timerCount - 5;
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
    timerCount = timerCount - 5;
    console.log(timerCount);
    timerElement.textContent = timerCount;
  }
  stopTimer();
  document.getElementById("hide-next-button").style.display = "none";
  document.getElementById("form").style.display = "block";
  document.getElementById("submit").style.display = "block";
}
// FUNCTION FOR WHEN THE NEXT QUESTION BUTTON IS CLICKED
function nextQuestion() {
  document.getElementById("questions-set1").style.display = "none";
  document.getElementById("questions-set2").style.display = "block";
  document.getElementById("correct").style.display = "none";
  document.getElementById("not-correct").style.display = "none";
}
// START TIMER 
function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      // clearInterval(timer);
      // gameOver();
    }
  }, 1000);
}
// GAME OVER FUNCTION IF TIME EXPIRES
// function gameOver () {

// }

// STOP TIMER
function stopTimer() {
  clearInterval(timer);
}
// FUNCTION TO SUBMIT INITIALS
function submitInitials() {
  var initials = document.querySelector("#initials").value;
  console.log(initials);
  localStorage.setItem("initials", initials);
  document.getElementById("questions-set2").style.display = "none";
  document.getElementById("high-scores").style.display = "block";
  var score = timerCount*88888;
  localStorage.setItem("high score", score);
  var x = document.createElement("LI");
  var t = document.createTextNode(initials + ":  " + score);
  x.appendChild(t);
  document.getElementById("scores-list").appendChild(x);
}

// Click event to start the quiz and run the function
startButton.addEventListener("click", startQuiz);

// Click event to proceed to the next question
nextQuestionButton.addEventListener("click", nextQuestion);

// Click event to submit player initials
submitButton.addEventListener("click", submitInitials);

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

// Events that happen when the user selects an answer by clicking a button
  answerE.addEventListener("click", function () {
  selectedAnswer = answerE.textContent;
  localStorage.setItem("answer", selectedAnswer);
  storeNextAnswer();
  // stopTimer();
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
  // stopTimer();
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
  // stopTimer();
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
  // stopTimer();
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