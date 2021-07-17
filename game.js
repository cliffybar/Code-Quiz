var questions = [{
  title: "A function needs to be called to run.",
  choices: ["True", "False"],
  answer: "True"
},
{
  title: "There is only one type of data: Boolean.",
  choices: ["True", "False"],
  answer: "False"
},
{
  title: "appendChild() is NOT a JavaScript method.",
  choices: ["True", "False"],
  answer: "False"
},
{
  title: "A for loop consists 3 parts.",
  choices: ["True", "False"],
  answer: "True"
},
{
  title: "JSON stands for JavaScript Objection Notation.",
  choices: ["True", "False"],
  answer: "True"
}]

var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

function start() {

  timeLeft = 75;
  document.getElementById("timeLeft").innerHTML = timeLeft;

  timer = setInterval(function () {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame();
    };
  }, 1000);

  next();
};

function endGame() {
  clearInterval(timer);

  var quizContent = `
    <h2>Game over!</h2>
    <h3>You got a ` + score + ` /100!</h3>
    <h3>That means you got ` + score / 20 + ` questions correct!</h3>
    <input type="text" id="name" placeholder="First name"> 
    <button onclick="setScore()">Set score!</button>`;
  document.getElementById("quizBody").innerHTML = quizContent;
};

function setScore() {
  localStorage.setItem("highscore", score);
  localStorage.setItem("highscoreName", document.getElementById('name').value);
  getScore();
};

function getScore() {
  var quizContent = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br> 
    <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>`;
  document.getElementById("quizBody").innerHTML = quizContent;
};

function clearScore() {
  localStorage.setItem("highscore", "");
  localStorage.setItem("highscoreName", "");

  resetGame();
};

function resetGame() {
  clearInterval(timer);
  score = 0;
  currentQuestion = -1;
  timeLeft = 0;
  timer = null;

  document.getElementById("timeLeft").innerHTML = timeLeft;

  var quizContent = `
    <h1>
      JavaScript Quiz!
    </h1>
    <h3>
      Click to play!   
    </h3>
    <button onclick="start()">Start!</button>`;
  document.getElementById("quizBody").innerHTML = quizContent;
};

function incorrect() {
  timeLeft -= 15;
  next();
};

function correct() {
  score += 20;
  next();
};

function next() {
  currentQuestion++;

  if (currentQuestion > questions.length - 1) {
    endGame();
    return;
  }

  var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"

  for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
    var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>";
    buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
    if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
      buttonCode = buttonCode.replace("[ANS]", "correct()");
    } else {
      buttonCode = buttonCode.replace("[ANS]", "incorrect()");
    }
    quizContent += buttonCode
  }

  document.getElementById("quizBody").innerHTML = quizContent;
};