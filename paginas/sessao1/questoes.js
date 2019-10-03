
const view /** HTML */ = `

    <h1>Questões para fixação</h1> <br>
        <div id="content">
          <h6 id="question"></h6>
          <div id="choices"></div>
          <p><button id="submit"></button></p>
          <p id="score"></p>
        </div>
      </div>

`;
let Questoes = {
    render: async () => view,
    after_render: async () => {
        var quiz = [{
            "question": "É um documento emitido pela seguradora, que formaliza a aceitação do risco, objeto do contrato de seguro. A afirmação citada, trata-se de :",
            "choices": ["Proposta.", "Sinistro.", "Apolice", "ANS",],
            "correct": "Apolice"
        }, {
            "question": "Qual órgão é responsavel pela regulação, supervisão, controle, fiscalização e incentivo das atividades de seguros?",
            "choices": ["CNSP.", "SUSEP", "IRB.", "ANS.",],
            "correct": "SUSEP"
        }, {
            "question": "O que é prêmio do seguro?? ",
            "choices": ["<br>É a soma em dinheiro paga pelo segurado ao segurador para que este assuma a responsabilidade de indenizá-lo por determinado risco  de <br>perda.", "<br>Reserva de sinistros ocorridos, mas não avisados", "<br>É um documento expedido pela seguradora durante a vigência da apólice, que tem como objetivo a alteração, modificação ou transferência <br>de dados do contrato de seguro.", "<br>Documento de aceitação do seguro.",],
            "correct": "<br>É a soma em dinheiro paga pelo segurado ao segurador para que este assuma a responsabilidade de indenizá-lo por determinado risco  de <br>perda."

        }];


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
                choicesHtml += "<input type='radio'  name='quiz" + currentQuestion +
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
                scoreContainer.textContent = "Perguntas corretas:  " + score + " de " +
                    quiz.length + ".";
                submitBtn.textContent = "Confirmar";
            }
        }

        function checkAnswer() {
            // are we asking a question, or proceeding to next question?
            if (askingQuestion) {
                submitBtn.textContent = "Proxima";
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


                debugger

                // setup if they got it right, or wrong
                var labelStyle = document.getElementsByTagName("label")[correctIndex].style;
                labelStyle.fontWeight = "bold";
                if (userpick == quiz[currentQuestion].correct) {
                    score++;
                    labelStyle.color = "green";
                } else {
                    labelStyle.color = "red";
                }

                scoreContainer.textContent = "Perguntas corretas:  " + score + " de " +
                    quiz.length + ".";
            } else { // move to next question
                // setting up so user can ask a question
                askingQuestion = true;
                // change button text back to "Submit Answer"
                submitBtn.textContent = "Confirmar";
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
            content.innerHTML = "<h2>Quiz completado!</h2>" +
                "<h2>Seu resultado:</h2>" +
                "<h3>" + score + "  de " + quiz.length + " questoes, " +
                Math.round(score / quiz.length * 100) + "%<h3>";
        }

        askQuestion();
        //window.addEventListener("load", askQuestion, false);
        submitBtn.addEventListener("click", checkAnswer, false);


    }
}

export default Questoes;
