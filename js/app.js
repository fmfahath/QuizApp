const questions = [

    {
        question: "Which is the largest animal?",
        answers: [
            {text: "Sark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is not a country in the world map?",
        answers: [
            {text: "Isreal", correct: true},
            {text: "Maldives", correct: false},
            {text: "Syria", correct: false},
            {text: "Palestine", correct: false},
        ]
    },
    {
        question: "largest Desrt?",
        answers: [
            {text: "Kalhari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: true},
            {text: "Saudi", correct: false},
        ]
    },
    {
        question: "Which one is a space research company?",
        answers: [
            {text: "Google", correct: false},
            {text: "Tesla", correct: false},
            {text: "Spce X", correct: true},
            {text: "Microsoft", correct: false},
        ]
    },
];

// console.log(questions);

//getting elements
const questionEl = document.getElementById('question');
const answerBtnEl  = document.getElementById('answer-btn');
const nextBtnEl  = document.getElementById('next-btn');

//variable
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtnEl.innerText = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex].question;
    let questionNo = currentQuestionIndex + 1;
    questionEl.innerHTML =`${questionNo}. ${currentQuestion}`;
}