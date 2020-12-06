var quizContainer = document.querySelector("#quiz");
var resultContainer = document.querySelector("#result");
var startBtn = document.querySelector("#start");
var questioneEl = document.querySelector("#questions");
var timerEl = document.querySelector("#timer");
var h1El = document.querySelector("#startheader");
var pEl = document.querySelector("#starttext");
var anserA = document.querySelector("answerA");
var anserB = document.querySelector("answerB");
var anserC = document.querySelector("answerC");
var answersEl = document.querySelector("#answers")
var answerResult = document.querySelector("#answerResult");

//my quiz array
var myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "Brendan Eich"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "npm"
    },
    { question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "ESLint",
      b: "jQuery",
      c: "RequireJS",
    },
    correctAnswer: "ESLint"
  }
];


//var questionNum = 0;


//timer 

//var timeLeft = setIntereval(60000);
//timeEl.textContent = timeLeft;



//presenting the quiz
function presentQuiz(){
    //1. start the timer
    //2. put the first question, answer choices
  var qElem = document.querySelector("#question")
  qElem.textContent = myQuestions[0].question



var answerChoice1 = document.createElement("button");
answerChoice1.setAttribute = ("id", "answerA")
answerChoice1.textContent = myQuestions[0].answers.a
answerA.append(answerChoice1);
console.log("myQuestions[0].answers.a: ", myQuestions[0].answers.a)

var answerChoice2 = document.createElement("button");
answerChoice2.setAttribute = ("id", "answerB")
answerChoice2.textContent = myQuestions[0].answers.b
answerB.append(answerChoice2);
console.log("myQuestions[0].answers.a: ", myQuestions[0].answers.b)

var answerChoice3 = document.createElement("button");
answerChoice3.setAttribute = ("id", "answerC")
answerChoice3.textContent = myQuestions[0].answers.c
answerC.append(answerChoice3);
console.log("myQuestions[0].answers.a: ", myQuestions[0].answers.c)
console.log(myQuestions[0].answers.c)

   // myQuestions.forEach(function(currentQ){
    //3.Hide the start botton 
startBtn.style.visibility = "hidden";
h1El.style.visibility = "hidden";
pEl.style.visibility = "hidden";


}//close tag for presentQuiz function


//when click the start botton =addEventlistener
//timer start and present the quiz
startBtn.addEventListener("click", presentQuiz);




//when user click an answer
answersEl.addEventListener("click", function(event){
//showing next question
console.log(myQuestions[1].question);
console.log(myQuestions[1].answers.a);
//if answer is incorrect = timer subtracked = condition
//else if answer is correct = give the user a next question = condition
console.log(event.target.innerText)
console.log(myQuestions[0].correctAnswer);
if(event.target.innerText === myQuestions[0].correctAnswer){
    answerResult.innerHTML = "correct answer"
}else {
    answerResult.innerHTML = "wrong answer"
    //subtract timer
}

});



//when all the quiz has been answered || time = 0 then game is over 
//user can save their initial and score = getItem
function showScore(){
    if(currentQuestion === myQuestions.length || timer === 0){
        alert("Game Over")
    }
}
