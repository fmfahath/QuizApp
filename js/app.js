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

//start quiz
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtnEl.innerText = "Next";
    // console.log("current index: ", currentQuestionIndex);
    // console.log("score: ", score);

    showQuestion();
}

//dislay questions & answers
function showQuestion(){
    //remove previous anser buttons
    resetState();

    //display quetion
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEl.innerHTML =`${questionNo}. ${currentQuestion.question}`;

    //display answer
    currentQuestion.answers.forEach(answer => {
        const btnEl = document.createElement('button');
        btnEl.classList.add('btn');
        btnEl.innerText = answer.text;
        answerBtnEl.appendChild(btnEl);

        //get and store ture/false value in dataset attribute
        if(answer.correct){
            btnEl.dataset.correct = answer.correct;
        }

        //select answer event
        btnEl.addEventListener('click', (e) => {
            const target = e.target;
            selectAnswer(target);
        }); 
    });
}

//function to remove previous answer buttons
function  resetState(){
    nextBtnEl.style.display = 'none';

    while(answerBtnEl.firstChild){
        answerBtnEl.removeChild(answerBtnEl.firstChild);
    }
}

//select answer function
function selectAnswer(target){
    const selectedBtn = target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }

    //disbale click after  the selection
    Array.from(answerBtnEl.children).forEach(btn =>{
        if(btn.dataset.correct === 'true'){
            btn.classList.add('correct');
        }

        btn.disabled = true;
    });

    nextBtnEl.style.display = 'block';
}

startQuiz();
