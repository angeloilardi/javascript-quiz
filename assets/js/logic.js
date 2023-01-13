let questionContainer = document.querySelector("#questions");
let quizIntro = document.querySelector("#start-screen");
let startButton = document.querySelector("#start");
let quizQuestion = document.querySelector("#question-title");
let quizAnsers =  document.querySelector("#choices");
let timerDisplay = document.querySelector("#time");

let secondsLeft = 61;


// create a function that displays a question and the 4 possible answers
function displayQuestion (i) {
    quizQuestion.innerHTML = questions[i].question;
    for (let j =0; j < questions[i].answers.length; j++){
        let answer = document.createElement("button");
        answer.innerHTML = j+1 + ". " + questions[i].answers[j];
        choices.appendChild(answer);        
    }

}

// add event listener for the start button
startButton.addEventListener("click", function() {
   
    quizIntro.setAttribute("class", "hide");
    questionContainer.setAttribute("class", "");
    displayQuestion(0);
    timer();

}
)

// timer function

function timer () {
    let countdown = setInterval(function(){
        secondsLeft--;
        timerDisplay.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(countdown)
        }
    }, 1000);
    
}

//add event listener to the answers buttons

