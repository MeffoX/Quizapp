function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;

    showQuestion()
}


function showQuestion() {

    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateNextQuestion();
    }
}


function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;

    percent = Math.round(percent * 100);
    document.getElementById('progressBar').innerHTML = `${percent}%`;
    document.getElementById('progressBar').style.width = `${percent}%`;
}


function updateNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function gameIsOver() {
    return currentQuestion >= questions.length;
}


function showEndScreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';

    document.getElementById('amountOfQuestions').innerHTML = questions.length;
    document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;
    document.getElementById('headerImage').src = './img/gameover.jpg';
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectetQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectetQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }

    document.getElementById('nextButton').disabled = false;
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextButton').disabled = true;
    resetAnswerButtons();
    showQuestion();


}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function restartQuiz() {
    document.getElementById('headerImage').src = './img/head.jpg';
    document.getElementById('questionBody').style = ''; //show questions
    document.getElementById('endScreen').style = 'display: none'; //hide endScreen

    rightQuestions = 0;
    currentQuestion = 0;
    init();
}