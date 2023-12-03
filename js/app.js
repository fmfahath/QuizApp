const questions = [

    {
        question: "Which is not a programming language?",
        answers: [
            {text: "JavaScript", correct: false},
            {text: "HTML 5", correct: true},
            {text: "Python", correct: false},
            {text: "Java", correct: false},
        ]
    },
    {
        question: "Which will return a node list?",
        answers: [
            {text: "querySelectorAll", correct: true},
            {text: "elementById", correct: false},
            {text: "elementsByClass", correct: false},
            {text: "elementsByTagName", correct: false},
        ]
    },
    {
        question: "The 'function' and 'var' are known as:",
        answers: [
            {text: "Keywords", correct: false},
            {text: "Data Types", correct: false},
            {text: "Declaration Statments", correct: true},
            {text: "Prototypes", correct: false},
        ]
    },
    {
        question: "Which one of the following also known as Conditional Expression:",
        answers: [
            {text: "Alternative to if-else", correct: false},
            {text: "Switch statement", correct: false},
            {text: "If-then-else statement", correct: false},
            {text: "immediate if", correct: true},
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
    //remove previous answer buttons
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

//next button evennt
nextBtnEl.addEventListener('click', () => { 
    if(currentQuestionIndex < questions.length){
        handleNextBtn();
    }
    else{
        startQuiz();
    }
});


//next button function
function handleNextBtn(){
     currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

//show score function
function showScore(){
    resetState();
    questionEl.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextBtnEl.innerText = 'Play Again';
    nextBtnEl.style.display = 'block';
}



startQuiz();
