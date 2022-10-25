let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Tom Dill",
        "answer_2": "Tim Bernes-Lee",
        "answer_3": "Jason Hiller",
        "answer_4": "Xio-Mee",
        "right_answer": 2
    }, {
        "question": "Welches dieser HTML-Tags erstellt einen Absatz?",
        "answer_1": "p",
        "answer_2": "h1",
        "answer_3": "button",
        "answer_4": "b",
        "right_answer": 1
    }, {
        "question": "Was ist HTML?",
        "answer_1": "Ein Computer",
        "answer_2": "Ist ein Computerspiel",
        "answer_3": "Eine Software",
        "answer_4": "Die Sprache des Internets",
        "right_answer": 4
    }, {
        "question": "Was ist ein Attribut?",
        "answer_1": "src",
        "answer_2": "img",
        "answer_3": "a",
        "answer_4": "index",
        "right_answer": 1
    }, {
        "question": "Was ist kein Strukturelement?",
        "answer_1": "header",
        "answer_2": "body",
        "answer_3": "main",
        "answer_4": "Visual Studio",
        "right_answer": 4
    }, {
        "question": "Was ist ein Link?",
        "answer_1": "ul",
        "answer_2": "tr",
        "answer_3": "a href=..",
        "answer_4": "overflow-x",
        "right_answer": 3
    }, {
        "question": "Wer passt hier nicht in die Reihe?",
        "answer_1": "ActionScript",
        "answer_2": "LiveScript",
        "answer_3": "JavaScript",
        "answer_4": "AppleScript",
        "right_answer": 4
    },
];

let rightQuestions = 0;

let currentQuestion = 0;


function init() {
    document.getElementById('arrayLenght').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';
        document.getElementById('arrayLastPage').innerHTML = questions.length;
        document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;
        document.getElementById('headerImage').src = 'img/Pokal.png';
    } else {
        let percent =(currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progressBar').innerHTML =`${percent} %`;
        document.getElementById('progressBar').style = `width: ${percent}%`;
        console.log('Fortschirtt', percent);
        
        let question = questions[currentQuestion];
        quizQuestion(question);
    }
}


function quizQuestion(i) {
    document.getElementById('currentPage').innerHTML = currentQuestion + 1;
    document.getElementById('quizAsk').innerHTML = i['question'];
    document.getElementById('answer_1').innerHTML = i['answer_1'];
    document.getElementById('answer_2').innerHTML = i['answer_2'];
    document.getElementById('answer_3').innerHTML = i['answer_3'];
    document.getElementById('answer_4').innerHTML = i['answer_4'];
}


function answer(selection) {
    let question = questions[currentQuestion];
    let questionNumber = selection.slice(-1);
    let answerNumber = question['right_answer'];
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (questionNumber == answerNumber) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    nextButton();
}


function nextButton() {
    document.getElementById('nextButton').disabled = false;  //wird aktiviert
}


function nextQuestion() {
    currentQuestion++;  //Wird von 0 auf 1 erhöht
    document.getElementById('nextButton').disabled = true;
    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}


function restartGame(){
    document.getElementById('headerImage').src = 'img/quiz.png';
    document.getElementById('endScreen').style = 'display: none';
    document.getElementById('questionBody').style = '';
    currentQuestion = 0;
    rightQuestions = 0;
    init();
}
