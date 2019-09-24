var quiz = [{
    "question": "1 – É um documento emitido pela seguradora, que formaliza a aceitação do risco, objeto do contrato de seguro. . A afirmação citada acima, trata-se de :",
    "choices": ["a)	Proposta.", "b)	Sinistro.", "c)	IRB" , "d)	ANS"],
    "correct": "b)	SUSEP"
}, {
    "question": "3 – O que é prêmio do seguro?",
    "choices": ["a ) É a soma em dinheiro paga pelo segurado ao segurador para que este assuma a responsabilidade de indenizá-lo por determinado risco de perda.", "a)	Reserva de sinistros ocorridos, mas não avisados", "b)	É um documento expedido pela seguradora durante a vigência da apólice, que tem como objetivo a alteração, modificação ou transferência de dados do contrato de seguro.", "c)	Documento de aceitação do seguro.", "d)	Garantia de proteção contra risco de determinado evento."],
    "correct": "a ) É a soma em dinheiro paga pelo segurado ao segurador para que este assuma a responsabilidade de indenizá-lo por determinado risco de perda"
}]
    ;


var content = $("content"),
    questionContainer = $("question"),
    choicesContainer = $("choices"),
    scoreContainer = $("score"),
    submitBtn = $("submit");

// init vars
var currentQuestion = 0,
    score = 0,
    askingQuestion = true;

function $(id) { // shortcut for document.getElementById
    return document.getElementById(id);
}

function askQuestion() {
    var choices = quiz[currentQuestion].choices,
        choicesHtml = "";

    // loop through choices, and create radio buttons
    for (var i = 0; i < choices.length; i++) {
        choicesHtml += "<input type='radio' name='quiz" + currentQuestion +
            "' id='choice" + (i + 1) +
            "' value='" + choices[i] + "'>" +
            " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
    }


    const split = quiz[currentQuestion].question.split("#nova-linha#")
    
    // load the question
    
    questionContainer.setAttribute('style', 'white-space: pre;');

    questionContainer.textContent = "Q" + (currentQuestion + 1) + ". ";
    split.forEach(x => questionContainer.textContent += ("\r\n" + x));
    //questionContainer.textContent +=  quiz[currentQuestion].question;

    // load the choices
    choicesContainer.innerHTML = choicesHtml;

    // setup for the first time
    if (currentQuestion === 0) {
        scoreContainer.textContent = "Score: 0 right answers out of " +
            quiz.length + " possible.";
        submitBtn.textContent = "Submit Answer";
    }
}

function checkAnswer() {
    // are we asking a question, or proceeding to next question?
    if (askingQuestion) {
        submitBtn.textContent = "Next Question";
        askingQuestion = false;

        // determine which radio button they clicked
        var userpick,
            correctIndex,
            radios = document.getElementsByName("quiz" + currentQuestion);
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) { // if this radio button is checked
                userpick = radios[i].value;
            }

            // get index of correct answer
            if (radios[i].value == quiz[currentQuestion].correct) {
                correctIndex = i;
            }
        }

        // setup if they got it right, or wrong
        var labelStyle = document.getElementsByTagName("label")[correctIndex].style;
        labelStyle.fontWeight = "bold";
        if (userpick == quiz[currentQuestion].correct) {
            score++;
            labelStyle.color = "green";
        } else {
            labelStyle.color = "red";
        }

        scoreContainer.textContent = "Score: " + score + " right answers out of " +
            quiz.length + " possible.";
    } else { // move to next question
        // setting up so user can ask a question
        askingQuestion = true;
        // change button text back to "Submit Answer"
        submitBtn.textContent = "Submit Answer";
        // if we're not on last question, increase question number
        if (currentQuestion < quiz.length - 1) {
            currentQuestion++;
            askQuestion();
        } else {
            showFinalResults();
        }
    }
}

function showFinalResults() {
    content.innerHTML = "<h2>You've complited the quiz!</h2>" +
        "<h2>Below are your results:</h2>" +
        "<h2>" + score + " out of " + quiz.length + " questions, " +
        Math.round(score / quiz.length * 100) + "%<h2>";
}

window.addEventListener("load", askQuestion, false);
submitBtn.addEventListener("click", checkAnswer, false);

