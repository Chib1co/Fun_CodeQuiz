var quizContainer = document.querySelector("#quiz");
var resultContainer = document.querySelector("#result");
var startBtn = document.querySelector("start");
var questioneEl = document.querySelector("#questions");
var timerEl = document.querySelector("#timer");

//my quiz array
var myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    { question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d"
  }
];

//timer 
i = 0;
var timeLeft = setTimeout(60000);
timeEl.textContent = timeLeft;

    

//presenting the quiz
function presentQuiz(){
    var quiz = document.createElement("div");
    quiz = "";

    myQuestions.forEach(function(currentQ){
    });
}//close tag for presentQuiz function


//when click the start botton =addEventlistener
//timer start and present the quiz
startBtn.addEventListener("click", presentQuiz)





//when user click an answer
answers.addEventListener("click", function(event){
//if answer is incorrect = timer subtracked = condition
//else if answer is correct = give the user a next question = condition
if(event.target.matches(correctAnswer)){
    alert("correct");
    //present next question
    moveBy[i++];
}else {
    alert("wrong");
    timeLeft - 5000;
    //present next question
}
});



//when all the quiz has been answered || time = 0 then game is over 
//user can save their initial and score = getItem
function showScore(){
    if(currentQuestion === myQuestions.length || timer === 0){
        alert("Game Over")
    }
}
