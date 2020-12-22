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
let initialContainerEl = document.querySelector("#initial-container")


formEl.style.display = "none";
questionEl.style.display ="none";
saveBtn.style.display = "none";

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




function triggerGameOver(){
    
    console.log('game over');
    formEl.style.display = "inherit";
    count.style.display = "none"
    saveBtn.style.display = "inherit";

  

    scoreEl.textContent = "Your Score " + secondsLeft;  

    qElem.textContent = "";
    answersEl.textContent = "";
    answerResult.innerHTML = "";   

  
  saveBtn.addEventListener("click", function(event){
        event.preventDefault();

    let highScores = JSON.parse(localStorage.getItem("score")) || [];
    console.log(highScores)
    

    var score = {"name": initialEl.value, "score": secondsLeft};
   
    highScores.push(score);
   
    localStorage.setItem("score", JSON.stringify(highScores));

    //redirectiong to new html for highscore list
    window.location.href = "./highscore.html";

   });

};


function showQuestion(index) {
    if(index >= myQuestions.length || secondsLeft === 0){
            
        // return will stop function execution
        clearInterval(timerInterval);   
        triggerGameOver();
        return 
    }

    questionEl.style.display ="flex";

    var question = myQuestions[index];
    qElem.textContent = question.question;
    
    var answerChoice1 = document.createElement("button");
    answerChoice1.setAttribute("id", "answerA");
    answerChoice1.setAttribute("class", "beautiful-btn");
    answerChoice1.textContent = question.answers.a;
    answerA.textContent = "";
    answerA.append(answerChoice1);
    console.log(myQuestions[questionNum].answers.a)
    
    var answerChoice2 = document.createElement("button");
    answerChoice2.setAttribute("id", "answerB")
    answerChoice2.setAttribute("class", "beautiful-btn");
    answerChoice2.textContent = question.answers.b
    answerB.textContent = "";
    answerB.append(answerChoice2);
    console.log(myQuestions[questionNum].answers.b)
    
    var answerChoice3 = document.createElement("button");
    answerChoice3.setAttribute("id", "answerC");
    answerChoice3.setAttribute("class", "beautiful-btn");
    answerChoice3.textContent = question.answers.c
    answerC.textContent = "";
    answerC.append(answerChoice3);
    console.log(myQuestions[questionNum].answers.c)
}

//presenting the quiz
var questionNum = 0;

function presentQuiz(){
    questionEl.style.display ="flex";
   
    showQuestion(questionNum)
    
  qElem.textContent = myQuestions[questionNum].question
   
    //Hide the start botton 
    //hide the start text
  initialContainerEl.style.display = "none";
  // h1El.style.display = "none";
  // pEl.style.display = "none";

}//close tag for presentQuiz function



  //timer 
 function setTime() {

    
  
  timerInterval = setInterval(function() {
        secondsLeft--;
        if(secondsLeft<=0){
          triggerGameOver();
          clearTimer();
        }
        count.textContent ="Time Left " + secondsLeft;
       timerEl.append(count);  
  
    }, 1000);
    
}

function clearTimer() {
  clearInterval(timerInterval)
}
 
 startBtn.addEventListener("click", function(){

    setTime();
    presentQuiz();
 });//closing tag for start button event listner


//when user click an answer
answersEl.addEventListener("click", function(event){
    // check if correct
    if(event.target.innerText === myQuestions[questionNum].correctAnswer){
        answerResult.innerHTML = "correct answer!!"
    }else {
        answerResult.innerHTML = "wrong answer!!"
        secondsLeft = secondsLeft -3;    
        console.log(secondsLeft)    
    }

    questionNum++
    showQuestion(questionNum)


});





