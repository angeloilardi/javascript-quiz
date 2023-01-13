let questionContainer = document.querySelector("#questions");
let quizIntro = document.querySelector("#start-screen")


// create a function that displays a question and the 4 possible answers
function displayQuestion (i) {
    let quizQuestion = document.createElement("h1");
    quizQuestion.innerHTML = questions[i].question;
    console.log(quizQuestion);
    questionContainer.appendChild(quizQuestion);
    console.log(questionContainer);
    for (let j =0; j < questions[i].answers.length; j++){
        let answer = document.createElement("button");
        answer.innerHTML = j+1 + ". " + questions[i].answers[j];
        questionContainer.appendChild(answer);        
    }

}

displayQuestion (0)