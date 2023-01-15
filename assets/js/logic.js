// created a target for all the elements in the DOM that need to be manipulated
let questionContainer = document.querySelector("#questions");
let quizIntro = document.querySelector("#start-screen");
let startButton = document.querySelector("#start");
let quizQuestion = document.querySelector("#question-title");
let quizAnwsers = document.querySelector("#choices");
let timerDisplay = document.querySelector("#time");
let feedback = document.getElementById("feedback");
let resultsDisplay = document.getElementById("end-screen");
let score = document.getElementById("final-score");
let initials = document.getElementById("initials");
let scoreSubmitButton = document.getElementById("submit");
let initialsInput = document.getElementById("initials");
scoreSubmitButton.addEventListener("click", submitScore);


// variables for sfx files
let correctSound = new Audio("./assets/sfx/correct.wav");
let incorrectSound = new Audio("./assets/sfx/incorrect.wav");

// a global index that keeps track of the question currently in use
let i = 0;

// the countdown starting point in seconds
let secondsLeft = 60;

// adds an event listener for the start button
startButton.addEventListener("click", function () {
    // the intro section is hidden by adding the hide class
    quizIntro.classList.add("hide");
    //the questions section is unhidden by removing the hide class
    questionContainer.classList.remove("hide");
    //the timer starts
    timer();
    // the first questions is displayed
    displayQuestion();
}
)

// timer function

function timer() {
    let countdown = setInterval(function () {
        secondsLeft--;
        timerDisplay.textContent = secondsLeft;
        if (secondsLeft <= 0 || i > questions.length - 1) {
            clearInterval(countdown);
            gameOver();
        }
    }, 1000);

};


// create a function that displays a question and the 4 possible answers
function displayQuestion() {
    // displays the title of the question
    quizQuestion.innerHTML = questions[i].question;
    // resets the choices buttons
    choices.innerHTML = "";
    // creates a button for each choice
    for (let j = 0; j < questions[i].answers.length; j++) {
        let answer = document.createElement("button");
        answer.setAttribute("class", "answer");
        answer.innerHTML = j + 1 + ". " + questions[i].answers[j];
        choices.appendChild(answer);
    }
    // targets all the newly created buttons with a class of answer
    let answerButtons = document.getElementsByClassName("answer")
    console.log(answerButtons);
    // adds and event listener to the buttons
    for (let k = 0; k < answerButtons.length; k++) {
        // each time a button is clicked the function checks if the answer selected is correct or not
        answerButtons[k].addEventListener("click", function () {
            checkAnswer(k);
        });
    }


}


// function that checks if the answer is correct and if there are questions left 
function checkAnswer(selectedChoice) {
    if (selectedChoice !== questions[i].correct) {
        // if the answer is wrong, the timer goeas down by 10 sec
        secondsLeft -= 10;
        feedback.classList.remove("hide");
        feedback.innerHTML = ("Wrong!");
        fadeEffect();
        incorrectSound.play();

    } else {
        feedback.classList.remove("hide");
        feedback.innerHTML = ("Correct!");
        fadeEffect();
        correctSound.play();
    }
    ;
    i++;
    if (i > questions.length - 1) {
        gameOver();
    } else displayQuestion();
}


// function that keeps the result on the screen for 500 ms
function fadeEffect() {
    feedback.classList.remove("hide");
    feedback.innerHTML = ("Wrong!");
    setTimeout(function () {
        feedback.classList.add("hide")
    }, 500);
}



//function that get executed when the game is over

function gameOver() {
    console.log("gameover");
    questionContainer.setAttribute("class", "hide");
    resultsDisplay.classList.remove("hide");
    if (secondsLeft < 0) {
        score.textContent = 0;
    } else score.textContent = (secondsLeft);

}

// function to submit the initials and the score
scoreSubmitButton.addEventListener("click", submitScore);
function submitScore(event) {
    //prevent deafult is used for the submit button
    event.preventDefault();
    // JSON parse is used to turn the object stored in the local storage into a JavaScript object
    let scoreList = JSON.parse(localStorage.getItem("updatedList"));
    // if the object is empty, we set scoreList to an empty array to start with
    if (scoreList === null) scoreList = [];
    // a new object with the last score is created
    let newSubmittedScore = {
        initials: initialsInput.value,
        score: score.textContent
    }
    // the new score is saved in the local storage
    localStorage.setItem("score", JSON.stringify(newSubmittedScore));
    // the new score is added to the existing array
    scoreList.push(newSubmittedScore);
    // we update the existing object with the update array
    localStorage.setItem("updatedList", JSON.stringify(scoreList));
    // the highscores.html file replaces index.html
    window.open("highscores.html", ("_self"));
}