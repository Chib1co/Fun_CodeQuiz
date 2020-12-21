
    var highscore = JSON.parse(localStorage.getItem("score"));
    console.log("highscore", highscore)
    console.log("length", highscore.length)
    

for(var i=0; i<highscore.length; i++){
      
     var orderListEl = document.querySelector("#high_scores_list");
     
         var listEl = document.createElement("li");
         listEl.textContent = 'Name: ' + highscore[i].name + '   Score: ' + highscore[i].score;
         orderListEl.appendChild(listEl);    
}

function compare(a, b){
    b.score - a.score

}




var goHome = document.querySelector("#goHome");
goHome.addEventListener("click", function(){
    document.location.href = "./index.html"
});

var clear = document.querySelector("#clear");
 clear.addEventListener("click", function(){
  window.localStorage.removeItem('score');
 });


