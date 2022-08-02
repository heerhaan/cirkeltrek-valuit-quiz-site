// Alle vragen welk voor kunnen komen in de quiz
var questions = [
    {
        question: "monke?",
        answerOne: "!!",
        answerTwo: "...",
        answerThree: ":(",
        answerFour: "uergh",
        correctAnswer: "answerOne",
    },
    {
        question: "two",
        answerOne: "one",
        answerTwo: "eeee",
        answerThree: "wieure",
        answerFour: "bami",
        correctAnswer: "answerFour",
    },
    {
        question: "pernis",
        answerOne: "aaa",
        answerTwo: "a",
        answerThree: "b",
        answerFour: "uKATGOEDJAHEELMOOI",
        correctAnswer: "answerTwo",
    },
];
let shuffled = [];

function handleQuestions() {
    while (questions.length > 0) {
        const random = questions.splice(Math.floor(Math.random() * questions.length), 1);
        shuffled.push(random[0]);
    }
}

let currentNumber = 1;
let score = 0;
let wrong = 0;
let index = 0;

function advanceQuestion(num) {
    handleQuestions();
    const currentQuestion = shuffled[num];
    document.getElementById("question-num").innerHTML = currentNumber;
    document.getElementById("play-score").innerHTML = score;
    document.getElementById("show-question").innerHTML = currentQuestion.question;
    document.getElementById("label-answer-one").innerHTML = currentQuestion.answerOne;
    document.getElementById("label-answer-two").innerHTML = currentQuestion.answerTwo;
    document.getElementById("label-answer-three").innerHTML = currentQuestion.answerThree;
    document.getElementById("label-answer-four").innerHTML = currentQuestion.answerFour;
}

function checkForAnswer() {
    const currentQuestion = shuffled[index];
    const currentQuestionAnswer = currentQuestion.correctAnswer;
    const answers = document.getElementsByName("answer");
    let correctOption = null;

    answers.forEach((answer) => {
        if (answer.value === currentQuestionAnswer) {
            correctOption = answer.labels[0].id;
        }
    })

    if (answers[0].checked === false && answers[1].checked === false && answers[2].checked === false && answers[3].checked == false) {
        document.getElementById('answer-options').style.display = "flex"
    }

    answers.forEach((answer) => {
        if (answer.checked === true && answer.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green";
            score++;
            index++;

            setTimeout(() => {
                currentNumber++
            }, 500)
        }

        else if (answer.checked && answer.value !== currentQuestionAnswer) {
            const wrongLabelId = answer.labels[0].id;
            document.getElementById(wrongLabelId).style.backgroundColor = "red";
            document.getElementById(correctOption).style.backgroundColor = "green";
            wrong++;
            index++;

            setTimeout(() => {
                currentNumber++;
            }, 500)
        }
    })
}



function handleQuestionAdvance() {
    checkForAnswer();
    unCheckRadioButtons();

    setTimeout(() => {
        if (shuffled.length > index) {
            advanceQuestion(index);
        }
        else {
            handleEndGame();
        }
        resetOptionBackground();
    }, 500);
}

function resetOptionBackground() {
    const answers = document.getElementsByName("answer");
    answers.forEach((answer) => {
        document.getElementById(answer.labels[0].id).style.backgroundColor = "";
    })
}

// Deselecteerd alle antwoorden
function unCheckRadioButtons() {
    const answers = document.getElementsByName("answer");
    for (let i = 0; i < answers.length; i++) {
        answers[i].checked = false;
    }
}

// Aangeroepen wanneer alle vragen beantwoord zijn
function handleEndGame() {
    let remark = null;
    let remarkColor = null;

    // Print een dom bericht die de vraagsteller beoordeelt
    if (score <= 3) {
        remark = "RADIOACTIVEIT.HEEFT.JE.BREIN.TE.ACTIEF.BESCHADIGD. ELIMENEREN.";
        remarkColor = "red";
    }
    else if (score >= 4 && score < 7) {
        remark = "MATIGE.INTELLIGENTIE.WAARGENOMEN. KANSHEBBER.VOOR.ASSIMILATIE.";
        remarkColor = "orange";
    }
    else if (score >= 7) {
        remark = "HOOGWAARDIGE.INTELLIGENTIE.WAARGENOMEN. DAVEREND.APPLAUS.";
        remarkColor = "green";
    }
    
    // Alle gegevens om te tonen op de scorebord
    document.getElementById('remarks').innerHTML = remark;
    document.getElementById('remarks').style.color = remarkColor;
    document.getElementById('wrong-answers').innerHTML = wrong;
    document.getElementById('correct-answers').innerHTML = score;
    document.getElementById('finish-score').style.display = "flex";
}

// Sluit de resultatenscherm en reset de hele heisa
function closeScoreModal() {
    currentNumber = 1;
    score = 0;
    wrong = 0;
    index = 0;
    questions = shuffled;
    shuffled = [];
    advanceQuestion(index);
    document.getElementById('finish-score').style.display = "none";
}

function closeOptionModal() {
    document.getElementById('answer-options').style.display = "none";
}