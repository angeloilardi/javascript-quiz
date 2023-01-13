let questions = [
    {
        question: "What does DOM stand for?",
        answers: ["Domain Object Model", "Document Object Module", "Debugging Object Module", "Document Object Model"],
        correct: function() {return this.answers[3]}
    },
    {
        question: "Using the push() method in an array",
        answer1: "adds an element at the end of the array",
        answer2: "adds an element at the start of the array",
        answer3: "removes an element at the start of the array",
        answer4: "removes an element at the end of the array",
        correct: function() {return this.answer1}
    },
    {
        question: "Which one of the following is not a primitive data type?",
        answer1: "letter",
        answer2: "boolean",
        answer3: "number",
        answer4: "symbol",
        correct: function() {return this.answer1}
    },
    {
        question: "What iterable method executes a callback on every item and returns undefined?",
        answer1: "map()",
        answer2: "every()",
        answer3: "forEach()",
        answer4: "reduce()",
        correct: function() {return this.answer3}
    },
    {
        question: "JavaScript has an in-built function JSON.parse() that:",
        answer1: "converts JSON strings into JavaScript objects",
        answer2: "converting an object into a JSON string:",
        answer3: "converts a string into a number",
        answer4: "converts a number into a string",
        correct: function() {return this.answer1}
    }
]