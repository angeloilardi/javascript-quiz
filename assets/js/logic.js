let questionContainer = document.querySelector("#questions");
let quizIntro = document.querySelector("#start-screen");
let startButton = document.querySelector("#start");
let quizQuestion = document.querySelector("#question-title");
let quizAnwsers = document.querySelector("#choices");
let timerDisplay = document.querySelector("#time");
let i = 0;

let secondsLeft = 61;

// add event listener for the start button
startButton.addEventListener("click", function () {
    console.log("hey");
    quizIntro.setAttribute("class", "hide");
    questionContainer.setAttribute("class", "");
    timer();
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
        // each time a button is clicked the function checks if the answer is correct oor not
        answerButtons[k].addEventListener("click", function(){
            checkAnswer(k)

        });
        

    }


}

// timer function

function timer() {
    let countdown = setInterval(function () {
        secondsLeft--;
        timerDisplay.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(countdown)
        }
    }, 1000);

}

//add event listener to the answers buttons

function checkAnswer(selectedChoice) {


    if (selectedChoice === questions[i].correct) {
        i++;
        displayQuestion(i);
    } else {
        secondsLeft -= 10;
        i++;
        displayQuestion(i);
    }
}






