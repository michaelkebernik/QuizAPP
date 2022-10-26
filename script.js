//JSON Array Questions 7 Module
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


//Varialblen
let rightQuestions = 0;  //Zähler richtige Antworten
let currentQuestion = 0;  //Aktuelle Fragenzähler
let Audio_Success = new Audio('audio/success.mp3');  //MusAik Richtig
let Audio_Fail = new Audio('audio/wrong.mp3');  //Musik Falsch
let Audio_Win = new Audio('audio/win.mp3');  //Ergebnismusik

// Initalisierung
function init() {
    document.getElementById('arrayLenght').innerHTML = questions.length;  //Gibt im Footer die Anzahl der Seiten an
    showQuestion();
}


// Fragebogen wird geladen
function showQuestion() {
    if (gameIsOver()) {  //Wenn das Spiel zu Ende ist
        showEndScreen();  //Wird die letzte Seite Angezeigt
    } else {  // Wenn das Spiel noch weiter geht
        upDateToNextQuestion();  //Frage mit Antworten
        upDateProgressBar();  //stand Progressbar
    }
}


// Spiel ist vor bei wenn die Fragen länge erreicht wird
function gameIsOver() {
    return currentQuestion >= questions.length;

}


// Progressbar abfrage
function upDateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;  //CurrentQuestion soll bei 1 anfangen und soll durch die Menge 7 geteilt werden
    percent = Math.round(percent * 100);  // das Ergebnis soll keine Kommastelle haben
    document.getElementById('progressBar').innerHTML = `${percent} %`;  //Hier wird die Prozentzahl ausgegeben
    document.getElementById('progressBar').style = `width: ${percent}%`;  //Hier wird im Style die Breite vom Progressbar ausgeben
}


// Fragen mit Antwort
function upDateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('currentPage').innerHTML = currentQuestion + 1;  //Zähler wird mit jeder Frage erhöht
    document.getElementById('quizAsk').innerHTML = question['question'];  //Fragestellung
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


//Spiel beendet, Resultat und Pokal
function showEndScreen() {
    document.getElementById('endScreen').style = '';  // neuer Div wird geladen
    document.getElementById('questionBody').style = 'display: none';  // div wird ausgeblendet
    document.getElementById('arrayLastPage').innerHTML = questions.length; // Zahl von Fragen
    document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;  //Zahl von richtigen Fragen
    document.getElementById('headerImage').src = 'img/Pokal.png';  //Bild Pokal
    Audio_Win.play();  //Musik
}


//Richtige Antwort oder Falsche Antwort
function answer(selection) {  //Selection ist meine angeclickte Antwort: anwer('answer_x')
    let question = questions[currentQuestion];  //Aktuelle Frage
    let questionNumber = selection.slice(-1);  // nimmt die letzte zahl/Buchstabe aus dem Selection bsp. ('anser_x) somit das x
    let answerNumber = question['right_answer'];  //Meine Antwort
    let idOfRightAnswer = `answer_${question['right_answer']}`; //Richtige Antwort

    if (rightAnswerSelected(questionNumber, answerNumber)) {
        document.getElementById(selection).parentNode.classList.add('bg-success');  //Antwort wird Grün
        Audio_Success.play();  //Musik Richtig
        rightQuestions++;  //Zähler richtige Antwort wird erhöht
    } else {  //Wenn die Frage Falsche beantwortet wurde
        document.getElementById(selection).parentNode.classList.add('bg-danger');  //Ausgwählte antwort wird Rot
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');  //Richtig gewesene Antwort wird grün
        Audio_Fail.play();  //Musik Falsche Antwort
    }
    nextButton();  //Button Weiter wird auf false gesetzt
}


function rightAnswerSelected(questionNumber, answerNumber) {
    return questionNumber == answerNumber;  //Wenn die Ausgewählte Antwort gleich ist wie die Richtige Antwort
}


function nextButton() {
    document.getElementById('nextButton').disabled = false;  //wird aktiviert, wenn keine Antwort abgegen wurde bleibt der Button deaktiviert
}


function nextQuestion() {
    currentQuestion++;  //Aktuellezahl wird auf 1 erhöht
    document.getElementById('nextButton').disabled = true;  //Button für weiter wird aktiviert
    resetAnswerButtons();
    showQuestion();
}


//Fragenfarben werden resetet
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


//Spiel neustarten
function restartGame() {
    document.getElementById('headerImage').src = 'img/quiz.png';  //Anfangs Bild
    document.getElementById('endScreen').style = 'display: none';  // Div wird entfernt
    document.getElementById('questionBody').style = '';  //Div mit Fragen werden hinzugefügt
    currentQuestion = 0;  //Aktuelle Frage wird wieder auf 0 gesetzt
    rightQuestions = 0;  //Zähler richtige Frage wird auf 0 gesetzt
    init();  // Initalisierung Start
}
