
let scores = document.getElementById("highscores");
let scoreList = JSON.parse(localStorage.getItem("updatedList"));
let clearScoresButton = document.getElementById("clear");

// loops that create a li element for each saved score
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
