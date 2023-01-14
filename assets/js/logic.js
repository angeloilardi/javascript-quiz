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
scoreSubmitButton.addEventListener("click", submitScore);

let i = 0;

let secondsLeft = 61;

// add event listener for the start button
startButton.addEventListener("click", function () {
    // the intro section is hidden
    quizIntro.setAttribute("class", "hide");
    //the questions section is unhidden
    questionContainer.setAttribute("class", "");
    //the timer starts
    timer();
    // the first questions is displayed
    displayQuestion();
}
)


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
        answerButtons[k].addEventListener("click", function(){
            checkAnswer(k);
        });
    }


}

// timer function

function timer() {
    let countdown = setInterval(function () {
        secondsLeft--;
        timerDisplay.textContent = secondsLeft;
        if (secondsLeft <= 0 || i > questions.length -1) {
            clearInterval(countdown);
            gameOver();
        }
    }, 1000);

};


// // function that checks if the answer is correct and if there are questions left or if the time is over
function checkAnswer(selectedChoice){
    if (selectedChoice !== questions[i].correct) {
        // if the answer is wrong, the timer goeas down by 10 sec
        secondsLeft -= 10;
        feedback.classList.remove("hide");
        feedback.innerHTML = ("Wrong!");
        fadeEffect ();
        
    } else {
        feedback.classList.remove("hide");
        feedback.innerHTML = ("Correct!");
        fadeEffect ();
    }
    ;
    i++;
    if (i > questions.length-1) {
        gameOver();
    } else displayQuestion();
}


// function that keeps the result on the screen for 500 ms
function fadeEffect () {
    feedback.classList.remove("hide");
        feedback.innerHTML = ("Wrong!");
    setTimeout(function(){
        feedback.classList.add("hide")
    }, 500);
}



//function that get executed when the game is over

function gameOver(){
    console.log("gameover");
        questionContainer.setAttribute("class", "hide");
    resultsDisplay.classList.remove("hide");
    score.textContent = (secondsLeft);
    
}



