
    var highscore = localStorage.getItem("score");
    //highscore.sort((a,b)=>b.score-a.score);

for(var i=0; i<highscore.length; i++){
    let result = JSON.parse(highscore);
    

     var orderListEl = document.querySelector("#high_scores_list");
     
         var listEl = document.createElement("li");
         listEl.textContent = 'Name: ' + result[i].name + '   Score: ' + result[i].score;
         orderListEl.appendChild(listEl);    
}

highscore.sort((a,b)=>b.score-a.score);



var goHome = document.querySelector("#goHome");
goHome.addEventListener("click", function(){
    document.location.href = "./index.html"
});

var clear = document.querySelector("#clear");
 clear.addEventListener("click", function(){
  highscore.innerHTML = [];
 });


