document.addEventListener('DOMContentLoaded', () => {
    const RepQuestions = [
        { 
            Question: "Quel est l’autre nom de l’Homme-Mystère?", 
            option1: "Le Sphinx", 
            option2: "Saphir", 
            option3: "Le Joker", 
            reponse: "1",
            image: "assets/Illustrations_game/Batgame_3.png",
            questionNumber: "1/15"
        },
        { 
            Question: "Quelle est l’ancienne profession de Harley Quinn?", 
            option1: "Infirmière", 
            option2: "Psychiatre", 
            option3: "Dentist", 
            reponse: "2",
            image: "assets/Illustrations_game/Batgame_4.png",
            questionNumber: "2/15"
        },
        { 
            Question: "Quel est l’objet fétiche de Double Face?", 
            option1: "Une pièce", 
            option2: "Un livre", 
            option3: "Un couteau", 
            reponse: "1",
            image: "assets/Illustrations_game/Batgame_5.png",
            questionNumber: "3/15"
        },
        { 
            Question: "Qui a produit Batman en 1964?", 
            option1: "Stanley Kubrick", 
            option2: "Andy Warhol", 
            option3: "Peter Jackson", 
            reponse: "3",
            image: "assets/Illustrations_game/Batgame_6.png",
            questionNumber: "4/15"
        },
        { 
            Question: "Batman c’est aussi le nom d’une ville en..", 
            option1: "Turquie", 
            option2: "Islande", 
            option3: "Allemagne", 
            reponse: "1",
            image: "assets/Illustrations_game/Batgame_7.png",
            questionNumber: "5/15"
        },
        { 
            Question: "Quel vilain apparaît pour la première fois dans le Batman 232 ?", 
            option1: "Le Pingouin", 
            option2: "Ra’s al Ghul", 
            option3: "Poison Ivy", 
            reponse: "2",
            image: [
                "assets/Illustrations_game/Batgame_8.png",
                "assets/Illustrations_game/Batgame_9.png",
                "assets/Illustrations_game/Batgame_9-1.png"
            ],
            questionNumber: "6/15"
        },
        { 
            Question: "Quelle ville Batman défend-il ?", 
            option1: "Gotham City", 
            option2: "Starling City", 
            option3: "Hell’s Kitchen", 
            reponse: "1",
            image: "assets/Illustrations_game/Batgame_10.png",
            questionNumber: "7/15"
        },
        { 
            Question: "Tim Burton a réalisé deux Batman, qui jouait Batman ?", 
            option1: "Georges Clooney", 
            option2: "Val Kilmer", 
            option3: "Michael Keaton", 
            reponse: "3",
            image: "assets/Illustrations_game/Batgame_11.png",
            questionNumber: "8/15"
        },
        { 
            Question: "Dans son premier Batman (1989) Jack Nicholson jouait ?", 
            option1: "Le Pingouin", 
            option2: "L’Homme Mystère", 
            option3: "Le Joker", 
            reponse: "3",
            image: [
                "assets/Illustrations_game/Batgame_12.png",
                "assets/Illustrations_game/Batgame_13-1.png",
                "assets/Illustrations_game/Batgame_13.png"
            ],
            questionNumber: "9/15"
        },
        { 
            Question: "Qui est Jonathan Crane ?", 
            option1: "L’Épouvantail", 
            option2: "Le Joker", 
            option3: "Hugo Strange", 
            reponse: "1",
            image: [
                "assets/Illustrations_game/Batgame_14.png",
                "assets/Illustrations_game/Batgame_15.png",
                "assets/Illustrations_game/Batgame_16.png"
            ],
            questionNumber: "10/15"
        },
        { 
            Question: "Qui est l’interprète de Catwoman dans le nouveau Batman de Matt Reeves (2022) ?", 
            option1: "Emma Watson", 
            option2: "Gigi Hadid", 
            option3: "Lola Iolani Momoa", 
            option4: "Zoë Kravitz", 
            reponse: "4",
            image: "assets/Illustrations_game/Batgame_17.png",
            questionNumber: "11/15"
        },
        { 
            Question: "Quel est le prénom des parents du jeune Bruce Wayne ?", 
            option1: "Thomas et Martha", 
            option2: "Elaine et Georges", 
            option3: "Martha et James", 
            reponse: "1",
            image: "assets/Illustrations_game/Batgame_18.png",
            questionNumber: "12/15"
        },
        { 
            Question: "Qui interprète le Joker en 2008 ?", 
            option1: "Heath Ledger", 
            option2: "Haeth Ledger", 
            option3: "Heath Ledger", 
            reponse: "1",
            image: "assets/Illustrations_game/Batgame_19.png",
            questionNumber: "13/15"
        },
        { 
            Question: "En quelle année Robin fait-il sa première apparition ?", 
            option1: "1940", 
            option2: "1939", 
            option3: "1941", 
            reponse: "1",
            image: "assets/Illustrations_game/Batgame_20.png",
            questionNumber: "14/15"
        },
        { 
            Question: "Qui est la fille de Batman et Catwoman (Earth - 2) ?", 
            option1: "Oracle", 
            option2: "Huntress", 
            option3: "Black Canary", 
            reponse: "2",
            image: "assets/Illustrations_game/Batgame_21.png",
            questionNumber: "15/15"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        const questionData = RepQuestions[currentQuestionIndex];
        document.getElementById('question').innerText = questionData.Question;

        let optionsHtml = `
            <div class="option">
                <input type="radio" name="option" value="1"> ${questionData.option1}
            </div>
            <div class="option">
                <input type="radio" name="option" value="2"> ${questionData.option2}
            </div>
            <div class="option">
                <input type="radio" name="option" value="3"> ${questionData.option3}
            </div>
        `;
        if (questionData.option4) {
            optionsHtml += `
                <div class="option">
                    <input type="radio" name="option" value="4"> ${questionData.option4}
                </div>
            `;
        }
        document.getElementById('options').innerHTML = optionsHtml;

        const questionNumber = document.getElementById('question-number');
        const imageContainer = document.getElementById('image-container');
        
        questionNumber.innerText = questionData.questionNumber;

        if (Array.isArray(questionData.image)) {
            imageContainer.innerHTML = questionData.image.map(src => 
                `<img src="${src}" alt="Image de la question">`
            ).join('');
        } else {
            imageContainer.innerHTML = `<img src="${questionData.image}" alt="Image de la question">`;
        }
    }

    function checkAnswer() {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption) {
            const answer = selectedOption.value;
            if (answer === RepQuestions[currentQuestionIndex].reponse) {
                score++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < RepQuestions.length) {
                loadQuestion();
            } else {
                showResult();
            }
        } else {
            alert('Veuillez sélectionner une réponse.');
        }
    }

    function showResult() {
        let resultImage = '';
        let resultMessage = '';
        
        if (score <= 5) {
            resultImage = 'assets/POP UP RESULTATS QUIZ-1.png';
            resultMessage = "Vous pouvez recommencer le quiz.";
        } else if (score <= 10) {
            resultImage = 'assets/POP UP RESULTATS QUIZ-2.png';
            resultMessage = "Vous pouvez recommencer le quiz.";
        } else if (score === 15) {
            resultImage = 'assets/POP UP RESULTATS QUIZ.png';
            resultMessage = "Félicitations, vous avez terminé le quiz avec un score parfait!";
        }

        document.getElementById('quiz').innerHTML = `
            <div id="result-container">
                <img src="${resultImage}" alt="Résultat du quiz">
                <p>${resultMessage}</p>
                <button id="restart-quiz">Recommencer le quiz</button>
            </div>
        `;

        document.getElementById('restart-quiz').addEventListener('click', restartQuiz);
    }

    function restartQuiz() {
        currentQuestionIndex = 0;
        score = 0;

        // Réinitialiser l'affichage du quiz
        document.getElementById('quiz').innerHTML = `
            <div id="question-container">
                <h2 id="question-number">1/15</h2>
                <h3 id="question">Question ici</h3>
                <div id="options"></div>
                <div id="image-container"></div>
                <button id="question-suivante">QUESTION SUIVANTE</button>
            </div>
        `;

        // Recharger la première question
        loadQuestion();

        // Ajouter l'événement pour le bouton de la question suivante
        document.getElementById('question-suivante').addEventListener('click', checkAnswer);

        // Assurer que la section de quiz est visible
        document.querySelector('#section2').style.display = 'block';
        document.querySelector('#section1').style.display = 'none';
    }

    function startQuiz() {
        document.querySelector('#section1').style.display = 'none';
        document.querySelector('#section2').style.display = 'block';
        loadQuestion();
    }

    // Événements pour les boutons
    document.getElementById('start-quiz').addEventListener('click', startQuiz);
    document.getElementById('question-suivante').addEventListener('click', checkAnswer);

    // Initialisation: Cacher la section de quiz et montrer la section de démarrage
    document.querySelector('#section2').style.display = 'none';
});