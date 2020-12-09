var quizContainer = document.querySelector("#quiz");
var resultContainer = document.querySelector("#result");
var startBtn = document.querySelector("#start");
var questionEl = document.querySelector("#questions");
var qElem = document.querySelector("#question")
var timerEl = document.querySelector("#timer");
var h1El = document.querySelector("#startheader");
var pEl = document.querySelector("#starttext");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answersEl = document.querySelector("#answers")
var answerResult = document.querySelector("#answerResult");
var formEl = document.querySelector("#result");
var scoreEl = document.querySelector("#score");
var initialEl = document.querySelector("#initial");
var timerInterval;
var saveBtn = document.querySelector("#saveScore");



formEl.style.visibility = "hidden";
questionEl.style.visibility ="hidden";
saveBtn.style.visibility = "hidden";

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

var secondsLeft = 45;
secondsLeft >= 0;
var count = document.createElement("div");
    count.setAttribute("id", "timer"); 



//when all the quiz has been answered || time = 0 then game is over 
//user can save their initial and score = getItem
function triggerGameOver(){
    
    console.log('game over');
    formEl.style.visibility = "visible";
    count.style.visibility = "hidden"
    saveBtn.style.visibility = "visible";

  

    scoreEl.textContent = "Your Score " + secondsLeft;  

    qElem.textContent = "";
    answersEl.textContent = "";
    answerResult.innerHTML = "";   

  
  saveBtn.addEventListener("click", function(event){
        event.preventDefault();

    var highScores = JSON.parse(localStorage.getItem("score")) || [];
    console.log(highScores)
    

    //var scores = localStorage.setItem("score", JSON.stringify([]));
    

    //var scores = JSON.parse(results);

    var score = {"name": initialEl.value, "score": secondsLeft};
   
    highScores.push(score);
    console.log(highScores)
    localStorage.setItem("score", JSON.stringify(scores));

    //create new button to redirect to high score page 
    //goggle how to redirect to a new URL page

    //window.location.href = "./highscore.html";

   });

};


function showQuestion(index) {
    if(index >= myQuestions.length || secondsLeft === 0){
            
        // return will stop function execution
        clearInterval(timerInterval);   
        triggerGameOver();
        return 
    }

    questionEl.style.visibility ="visible";

    var question = myQuestions[index];
    qElem.textContent = question.question;
    
    var answerChoice1 = document.createElement("button");
    answerChoice1.setAttribute("id", "answerA");
    answerChoice1.textContent = question.answers.a;
    answerA.textContent = "";
    answerA.append(answerChoice1);
    console.log(myQuestions[questionNum].answers.a)
    
    var answerChoice2 = document.createElement("button");
    answerChoice2.setAttribute("id", "answerB")
    answerChoice2.textContent = question.answers.b
    answerB.textContent = "";
    answerB.append(answerChoice2);
    console.log(myQuestions[questionNum].answers.b)
    
    var answerChoice3 = document.createElement("button");
    answerChoice3.setAttribute("id", "answerC")
    answerChoice3.textContent = question.answers.c
    answerC.textContent = "";
    answerC.append(answerChoice3);
    console.log(myQuestions[questionNum].answers.c)
}

//presenting the quiz
var questionNum = 0;

function presentQuiz(){
    questionEl.style.visibility ="visible";
   
    showQuestion(questionNum)
    
  qElem.textContent = myQuestions[questionNum].question
   
    //Hide the start botton 
    //hide the start text
  startBtn.style.visibility = "hidden";
  h1El.style.visibility = "hidden";
  pEl.style.visibility = "hidden";

}//close tag for presentQuiz function



  //timer 
 function setTime() {

    
  
  timerInterval = setInterval(function() {
        secondsLeft--;
        count.textContent ="Time Left " + secondsLeft;
       timerEl.append(count);  
  
    }, 1000);
    
}

//when click the start botton =addEventlistener
//timer start and present the quiz
 startBtn.addEventListener("click", function(){

    setTime();
    presentQuiz();
 });//closing tag for start button event listner


//when user click an answer
answersEl.addEventListener("click", function(event){
    // check if correct
    if(event.target.innerText === myQuestions[questionNum].correctAnswer){
        answerResult.innerHTML = "correct answer"
    }else {
        answerResult.innerHTML = "wrong answer"
        secondsLeft = secondsLeft -3;    
        console.log(secondsLeft)    
    }

    questionNum++
    showQuestion(questionNum)


});





