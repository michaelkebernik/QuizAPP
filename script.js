let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Tom Dill",
        "answer_2": "Tim Bernes-Lee",
        "answer_3": "Jason Hiller",
        "answer_4": "Xio-Mee",
        "right_answer": 2
    },  {
        "question": "Welches dieser HTML-Tags erstellt einen Absatz?",
        "answer_1": "<p>",
        "answer_2": "<h1>",
        "answer_3": "<button>",
        "answer_4": "<b>",
        "right_answer": 1
    },  {
        "question": "Was ist HTML?",
        "answer_1": "Ein Computer",
        "answer_2": "Ist ein Computerspiel",
        "answer_3": "Eine Software",
        "answer_4": "Die Sprache des Internets",
        "right_answer": 2
    },  {
        "question": "Was ist ein Attribut?",
        "answer_1": "src",
        "answer_2": "img",
        "answer_3": "a",
        "answer_4": "index",
        "right_answer": 1
    },  {
        "question": "Was ist kein Strukturelement?",
        "answer_1": "header",
        "answer_2": "body",
        "answer_3": "main",
        "answer_4": "Visual Studio",
        "right_answer": 4
    },  {
        "question": "Was ist ein Link?",
        "answer_1": "<ul>",
        "answer_2": "<tr>",
        "answer_3": "<a href=..>",
        "answer_4": "<overflow-x>",
        "right_answer": 3
    },  {
        "question": "Wer passt hier nicht in die Reihe?",
        "answer_1": "ActionScript",
        "answer_2": "LiveScript",
        "answer_3": "JavaScript",
        "answer_4": "AppleScript",
        "right_answer": 4
    },
];


let currentQuestion = 0;


function init(){
    document.getElementById('arrayLenght').innerHTML = questions.length;

    showQuestion();
}


function showQuestion(){
let question = questions[currentQuestion];
quizQuestion(question);

}


function quizQuestion(i){
    document.getElementById('quizAsk').innerHTML = i['question'];
    document.getElementById('answerOne').innerHTML = i['answer_1'];
    document.getElementById('answerTwo').innerHTML = i['answer_2'];
    document.getElementById('answerThree').innerHTML = i['answer_3'];
    document.getElementById('answerFour').innerHTML = i['answer_4'];
}


function answer(selection){
    let question= questions[currentQuestion];
    let questionNumber = selection.slice(-1);
    let answerNumber = question['right_answer'];

    console.log(questionNumber);
    console.log(answerNumber);

    if (questionNumber == answerNumber) {
        console.log('richtige Antwort')
    }else{
        console.log('Falsche Antwort')
    }

}

