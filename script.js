function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;

    showQuestion()
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectetQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectetQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
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