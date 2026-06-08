function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

const allQuestions = [
    {
        question: "Qual é o principal objetivo do GeoVision?",
        answers: [
            { text: "Planejamento urbano inteligente", correct: true },
            { text: "Venda de imóveis", correct: false },
            { text: "Streaming", correct: false },
            { text: "Controle bancário", correct: false }
        ]
    },

    {
        question: "Qual tecnologia é utilizada pelo GeoVision?",
        answers: [
            { text: "Satélites", correct: true },
            { text: "DVD", correct: false },
            { text: "Fax", correct: false },
            { text: "Disquete", correct: false }
        ]
    },

    {
        question: "O sensoriamento remoto permite analisar:",
        answers: [
            { text: "Temperatura e vegetação", correct: true },
            { text: "Jogos online", correct: false },
            { text: "Receitas", correct: false },
            { text: "Filmes", correct: false }
        ]
    },

    {
        question: "O GeoVision auxilia na identificação de:",
        answers: [
            { text: "Áreas críticas urbanas", correct: true },
            { text: "Redes sociais", correct: false },
            { text: "Filmes", correct: false },
            { text: "Músicas", correct: false }
        ]
    },

    {
        question: "Qual benefício o GeoVision oferece?",
        answers: [
            { text: "Monitoramento em tempo real", correct: true },
            { text: "Streaming", correct: false },
            { text: "Entrega de comida", correct: false },
            { text: "Jogos", correct: false }
        ]
    },

    {
        question: "As análises preditivas servem para:",
        answers: [
            { text: "Prever necessidades futuras", correct: true },
            { text: "Criar jogos", correct: false },
            { text: "Editar fotos", correct: false },
            { text: "Baixar arquivos", correct: false }
        ]
    },

    {
        question: "Quem pode utilizar o GeoVision?",
        answers: [
            { text: "Gestores públicos", correct: true },
            { text: "Gamers", correct: false },
            { text: "Músicos", correct: false },
            { text: "Médicos apenas", correct: false }
        ]
    },

    {
        question: "O monitoramento climático ajuda a detectar:",
        answers: [
            { text: "Ilhas de calor", correct: true },
            { text: "Planetas", correct: false },
            { text: "Buracos negros", correct: false },
            { text: "Satélites", correct: false }
        ]
    },

    {
        question: "As áreas verdes contribuem para:",
        answers: [
            { text: "Sustentabilidade urbana", correct: true },
            { text: "Poluição", correct: false },
            { text: "Trânsito", correct: false },
            { text: "Ruído", correct: false }
        ]
    },

    {
        question: "O GeoVision transforma dados em:",
        answers: [
            { text: "Decisões estratégicas", correct: true },
            { text: "Filmes", correct: false },
            { text: "Jogos", correct: false },
            { text: "Redes sociais", correct: false }
        ]
    }

    // ...perguntas seguem exatamente o mesmo padrão...
];

const questions = shuffle([...allQuestions]).slice(0, 25);

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

function showQuestion() {
    const current = questions[currentQuestion];

    questionElement.innerText = current.question;
    answersElement.innerHTML = "";

    const shuffledAnswers = shuffle([...current.answers]);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement("button");

        button.innerText = answer.text;
        button.classList.add("answer-btn");

        button.addEventListener("click", () => {
            if (answer.correct) {
                score++;
            }

            document.querySelectorAll(".answer-btn").forEach(btn => {
                btn.disabled = true;
            });

            nextButton.style.display = "block";
        });

        answersElement.appendChild(button);
    });
}

nextButton.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
        nextButton.style.display = "none";
    } else {
        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("result").style.display = "block";

        document.getElementById("score").innerText =
            `Você acertou ${score} de ${questions.length} perguntas!`;
    }
});

showQuestion();
nextButton.style.display = "none";