
    var highscore = localStorage.getItem("score");
for(var i=0; i<highscore.length; i++){
    let result = JSON.parse(highscore);
     console.log(highscore) 
     console.log(result)

     result.sort();

     var orderListEl = document.querySelector("#high_scores_list");
     
         var listEl = document.createElement("li");
         listEl.textContent = "Name: " + result[i].name + "   Score: " + result[i].score;
        
         

         orderListEl.appendChild(listEl);
         //orderListEl.appendChild(scorelistEl);
}

var goHome = document.querySelector("#goHome");
goHome.addEventListener("click", function(){
    document.location.href = "./index.html"
});

var clear = document.querySelector("#clear");
 clear.addEventListener("click", function(){
  highscore.innerHTML = [];
 });

/* // Steps to get items from local storage and put them into the HTML.
// This is for the new javascript file that I have created for my new HTML page.
// 1. Get the scores from local storage.
// 2. JSON.parse the string from local storage, put that result into a variable.
// 3. Get the variable for the ordered list HTML component.
// 4. Loop over the items from local storage:
//    5. Create the <li> element for that item, assign to variable.
//    6. Set the text content of the newly created <li> element to be the score/initials of the current player.
//    7. Need to append the <li> element to the ordered list.
// // Code I need to clear the high scores from the local storage by clicking a button.
// 1. Create an event listener for the button.
// 2. In that event listener, we are going to use localstorage.clear to remove the scores from local storage.
//    // Just overwrite with an empty array. Job done :) */ 
