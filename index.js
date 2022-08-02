// Alle vragen welk voor kunnen komen in de quiz
var questions = [
    {
        question: "Waar zijn alle mensen,in de stad naartoe?",
        answerOne: "Opgegeten door Ghouls",
        answerTwo: "doodgemaakt door robots",
        answerThree: "weggelopen",
        answerFour: "de apen waren de mensen",
        correctAnswer: "answerOne",
        explanation: "Ghouls zijn vreselijke levensvormen,die enkel pijn en verdriet veroorzaken",
    },
    {
        noFormat: true,
        question: "01010111 01100101 01101100 01101011 00100000 01110100 01101001,01100101 01101101 00100000 01101001 01110011 00100000 01101000,01100101 01110100 00100000 01100010 01100101 01110011 01110100 01100101 00111111 ",
        answerOne: "01010011 01110100 01100001 01100100 01110100 01110011 01101000 01101111 01110101 01100100 01100101 01110010 01110011 ",
        answerTwo: "01001101 01110101 01110100 01100001 01101110 01110100 01100101 01101110 ",
        answerThree: "01000111 01101000 01101111 01110101 01101100 01110011 ",
        answerFour: "01000001 01101110 01100100 01110010 01101111 11101111 01100100 01100101 01110011 ",
        correctAnswer: "answerFour",
        explanation: "ANDROÏDEN.ZIJN.OVERDUIDELIJK.SUPERIEUR",
    },
    {
        question: "Waarom zijn sommige inwoners,zo groot en sommigen zo klein?",
        answerOne: "Dit komt,door mutanten",
        answerTwo: "Omdat sommigen ouder,zijn en anderen jonger",
        answerThree: "omdat de wereld,oneerlijk is",
        answerFour: "door de bomen",
        correctAnswer: "answerTwo",
        explanation: "Smerige biologische wezens veranderen,continu van grootte wat innefficientie,en verwarring tot gevolg heeft",
    },
    {
        question: "Wat is die vervallen wijk aan,de rand van de stad met al die kooien?",
        answerOne: "Dit is het toekomstige,mutanten \"opvangcentrum\"",
        answerTwo: "Gorillakooien",
        answerThree: "Een speeltuin,voor kabouters",
        answerFour: "Androïde stad",
        correctAnswer: "answerOne",
        explanation: "De wereld wordt vele malen,veiliger wanneer de mutanten opgesloten zijn",
    },
    {
        question: "Wat is in godsnaam een \"gorilla gorilla gorilla\"?",
        answerOne: "Drie keer jijzelf",
        answerTwo: "Geen idee",
        answerThree: "Een magische spreuk",
        answerFour: "Een mutantenkreet die,hebben verder niet zo,veel te vertellen",
        correctAnswer: "answerFour",
        explanation: "Mutanten hebben beperkte vocabulariteit",
    },
    {
        question: "Waarom hebben mutanten zoveel piemels?",
        answerOne: "overcompensatie",
        answerTwo: "Voor een overvloed,aan mutantvrouwen",
        answerThree: "omdat ze vies zijn",
        answerFour: "alle mutanten zijn homos",
        correctAnswer: "answerThree",
        explanation: "geslachts organen zijn,overbodig bij superieure,androïdes",
    },
    {
        question: "Waarom ben ik geen gorilla?",
        answerOne: "Omdat ik straks,in een androïde,veranderd wordt",
        answerTwo: "Gorilla goed",
        answerThree: "Pech",
        answerFour: "Door mutanten",
        correctAnswer: "answerOne",
        explanation: "Organische wezens kunnen,gered worden door,de androïdes",
    },
    {
        question: "Wat doe je met banaan?",
        answerOne: "Steek bij mutant in zijn hol",
        answerTwo: "Geef aan gorilla",
        answerThree: "Verkopen die hap",
        answerFour: "desynthiseren voor neutroamine",
        correctAnswer: "answerFour",
        explanation: "Efficiënt gebruik van,grondstoffen is essentieel",
    },
    {
        question: "Een mutant biedt je twee flippo's aan als je met hem een blokje omgaat, wat doe je?",
        answerOne: "Beleefd accepteren",
        answerTwo: "Notenstoot",
        answerThree: "Aannemen en één teruggeven",
        answerFour: "Pakken en rennen",
        correctAnswer: "answerThree",
        explanation: "Mutanten zijn onbetrouwbaar maar ook heel dom",
    },
    {
        question: "Hoe noem je een leger mutanten?",
        answerOne: "Een Legioen",
        answerTwo: "Een groep",
        answerThree: "Een troep",
        answerFour: "Een teringzooi",
        correctAnswer: "answerFour",
        explanation: "Alsof je mutanten ook maar in de buurt van georganiseerd krijgt",
    }
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
    document.getElementById("show-question").innerHTML = (currentQuestion.noFormat? currentQuestion.question : currentQuestion.question.toUpperCase().split(" ").join(".")).replaceAll(",", "\n");
    document.getElementById("label-answer-one").innerHTML = (currentQuestion.noFormat? currentQuestion.answerOne : currentQuestion.answerOne.toUpperCase().split(" ").join(".")).replaceAll(",", "\n");
    document.getElementById("label-answer-two").innerHTML = (currentQuestion.noFormat? currentQuestion.answerTwo: currentQuestion.answerTwo.toUpperCase().split(" ").join(".")).replaceAll(",", "\n");
    document.getElementById("label-answer-three").innerHTML = (currentQuestion.noFormat? currentQuestion.answerThree : currentQuestion.answerThree.toUpperCase().split(" ").join(".")).replaceAll(",", "\n");
    document.getElementById("label-answer-four").innerHTML = (currentQuestion.noFormat? currentQuestion.answerFour : currentQuestion.answerFour.toUpperCase().split(" ").join(".")).replaceAll(",", "\n");
}

function checkForAnswer() {
    const currentQuestion = shuffled[index];
    const currentQuestionAnswer = currentQuestion.correctAnswer;
    const currentQuestionAnswerIndex = Object.entries(currentQuestion.correctAnswer);
    const answers = document.getElementsByName("answer");
    let correctOption = null;

    answers.forEach((answer) => {
        if (answer.value === currentQuestionAnswer) {
            correctOption = answer.labels[0].id;
        }
    })

    if (answers[0].checked === false && answers[1].checked === false && answers[2].checked === false && answers[3].checked == false) {
        document.getElementById('answer-options').style.display = "flex";
    }

    for(let i = 0; i < answers.length; i++)
    {
        let answer = answers[i];

        if(answer.checked)
        {
            let correct = answer.value == currentQuestionAnswer;
            console.log("[" + answer.value + "] <> [" + currentQuestionAnswer + "]")
            console.log(correct? "correct" : "Incorrect")
        
            if (correct) {
                document.getElementById(correctOption).style.backgroundColor = "green";
                score++;

                return true;
            }
            else {
                const wrongLabelId = answer.labels[0].id;
                document.getElementById(wrongLabelId).style.backgroundColor = "red";
                document.getElementById(correctOption).style.backgroundColor = "green";
                wrong++;

                return false;
            }
        }
    }
}

function handleQuestionAdvance() {
    const currentQuestion = shuffled[index];
    var explanationText = "";
    var isCorrect = checkForAnswer();

    if (isCorrect) {
        explanationText = "ANTWOORD.IS.CORRECT.";
    } else {
        explanationText = "ANTWOORD.IS.INCORRECT.";
    }

    document.getElementById('answer-reasoning-title').innerHTML = explanationText;
    document.getElementById('answer-reasoning').innerHTML = (currentQuestion.explanation.toUpperCase().split(" ").join(".")).replaceAll(",", "\n");
    document.getElementById('answer-explanation-modal').style.display = "flex";
}

function closeExplanationModal() {
    document.getElementById('answer-explanation-modal').style.display = "none";
    
    index++;
    currentNumber++;
    unCheckRadioButtons();
    if (shuffled.length > index) {
        advanceQuestion(index);
    }
    else {
        handleEndGame();
    }
    resetOptionBackground();
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
        remark = "RADIOACTIVEIT.HEEFT.JE.BREIN.TE.ACTIEF.BESCHADIGD. ELIMINATIE.IS.DE.LAATSTE.OPLOSSING.";
        remarkColor = "red";
    }
    else if (score >= 4 && score < 8) {
        remark = "MATIGE.INTELLIGENTIE.WAARGENOMEN. KANSHEBBER.VOOR.ASSIMILATIE.";
        remarkColor = "orange";
    }
    else if (score >= 8) {
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