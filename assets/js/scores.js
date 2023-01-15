
//targets the ordered list with a class of highscores
let scores = document.getElementById("highscores");
// the object with all the saved scores stored locally is parsed into a JS object
let scoreList = JSON.parse(localStorage.getItem("updatedList"));
//targets the 'clear highscores' button
let clearScoresButton = document.getElementById("clear");

// loop that creates a li element for each saved score
for (i = 0; i < scoreList.length; i++){
    let newScore = document.createElement("li");
    newScore.textContent= `${scoreList[i].initials} - ${scoreList[i].score}`;
    scores.appendChild(newScore);
};

// added event listener to the 'clear highscores' button that clears the data in the local storage
clearScoresButton.addEventListener("click", function(){
    localStorage.removeItem("updatedList");
    scores.innerHTML = "";
});
