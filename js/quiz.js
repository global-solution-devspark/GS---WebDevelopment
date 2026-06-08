function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

const allQuestions = [

{
question: "Qual é o principal objetivo do GeoVision?",
answers:[
{text:"Planejamento urbano inteligente",correct:true},
{text:"Venda de imóveis",correct:false},
{text:"Streaming",correct:false},
{text:"Controle bancário",correct:false}
]
},

{
question: "Qual tecnologia é utilizada pelo GeoVision?",
answers:[
{text:"Satélites",correct:true},
{text:"DVD",correct:false},
{text:"Fax",correct:false},
{text:"Disquete",correct:false}
]
},

{
question: "O sensoriamento remoto permite analisar:",
answers:[
{text:"Temperatura e vegetação",correct:true},
{text:"Jogos online",correct:false},
{text:"Receitas",correct:false},
{text:"Filmes",correct:false}
]
},

{
question: "O GeoVision auxilia na identificação de:",
answers:[
{text:"Áreas críticas urbanas",correct:true},
{text:"Redes sociais",correct:false},
{text:"Filmes",correct:false},
{text:"Músicas",correct:false}
]
},

{
question: "Qual benefício o GeoVision oferece?",
answers:[
{text:"Monitoramento em tempo real",correct:true},
{text:"Streaming",correct:false},
{text:"Entrega de comida",correct:false},
{text:"Jogos",correct:false}
]
},

{
question: "As análises preditivas servem para:",
answers:[
{text:"Prever necessidades futuras",correct:true},
{text:"Criar jogos",correct:false},
{text:"Editar fotos",correct:false},
{text:"Baixar arquivos",correct:false}
]
},

{
question: "Quem pode utilizar o GeoVision?",
answers:[
{text:"Gestores públicos",correct:true},
{text:"Gamers",correct:false},
{text:"Músicos",correct:false},
{text:"Médicos apenas",correct:false}
]
},

{
question: "O monitoramento climático ajuda a detectar:",
answers:[
{text:"Ilhas de calor",correct:true},
{text:"Planetas",correct:false},
{text:"Buracos negros",correct:false},
{text:"Satélites",correct:false}
]
},

{
question: "As áreas verdes contribuem para:",
answers:[
{text:"Sustentabilidade urbana",correct:true},
{text:"Poluição",correct:false},
{text:"Trânsito",correct:false},
{text:"Ruído",correct:false}
]
},

{
question: "O GeoVision transforma dados em:",
answers:[
{text:"Decisões estratégicas",correct:true},
{text:"Filmes",correct:false},
{text:"Jogos",correct:false},
{text:"Redes sociais",correct:false}
]
},

{
question: "Qual problema urbano pode ser monitorado?",
answers:[
{text:"Expansão desordenada",correct:true},
{text:"Novelas",correct:false},
{text:"Esportes",correct:false},
{text:"Cinema",correct:false}
]
},

{
question: "O GeoVision utiliza informações:",
answers:[
{text:"Espaciais",correct:true},
{text:"Musicais",correct:false},
{text:"Literárias",correct:false},
{text:"Jurídicas",correct:false}
]
},

{
question: "Os satélites ajudam a obter:",
answers:[
{text:"Imagens da superfície terrestre",correct:true},
{text:"Músicas",correct:false},
{text:"Filmes",correct:false},
{text:"Podcasts",correct:false}
]
},

{
question: "Uma cidade inteligente depende de:",
answers:[
{text:"Dados e tecnologia",correct:true},
{text:"Sorte",correct:false},
{text:"Jogos",correct:false},
{text:"Cinema",correct:false}
]
},

{
question: "O planejamento urbano busca:",
answers:[
{text:"Melhorar a qualidade de vida",correct:true},
{text:"Aumentar poluição",correct:false},
{text:"Gerar congestionamentos",correct:false},
{text:"Reduzir áreas verdes",correct:false}
]
},

{
question: "Qual área é monitorada pelo GeoVision?",
answers:[
{text:"Mobilidade urbana",correct:true},
{text:"Streaming",correct:false},
{text:"Cinema",correct:false},
{text:"Games",correct:false}
]
},

{
question: "O sensoriamento remoto coleta dados:",
answers:[
{text:"À distância",correct:true},
{text:"Somente presencialmente",correct:false},
{text:"Por telefone",correct:false},
{text:"Por cartas",correct:false}
]
},

{
question: "As análises ajudam gestores a:",
answers:[
{text:"Tomar decisões",correct:true},
{text:"Criar filmes",correct:false},
{text:"Jogar online",correct:false},
{text:"Editar vídeos",correct:false}
]
},

{
question: "O GeoVision contribui para:",
answers:[
{text:"Sustentabilidade",correct:true},
{text:"Desmatamento",correct:false},
{text:"Poluição",correct:false},
{text:"Congestionamento",correct:false}
]
},

{
question: "Qual setor se beneficia do GeoVision?",
answers:[
{text:"Órgãos municipais",correct:true},
{text:"Streaming",correct:false},
{text:"Cinema",correct:false},
{text:"Games",correct:false}
]
},

{
question: "Mapas inteligentes permitem:",
answers:[
{text:"Visualizar dados urbanos",correct:true},
{text:"Assistir filmes",correct:false},
{text:"Ouvir músicas",correct:false},
{text:"Editar imagens",correct:false}
]
},

{
question: "O crescimento urbano pode ser:",
answers:[
{text:"Monitorado",correct:true},
{text:"Ignorado",correct:false},
{text:"Cancelado",correct:false},
{text:"Desligado",correct:false}
]
},

{
question: "A tecnologia espacial ajuda no:",
answers:[
{text:"Planejamento urbano",correct:true},
{text:"Streaming",correct:false},
{text:"Cinema",correct:false},
{text:"Marketing musical",correct:false}
]
},

{
question: "O GeoVision apoia decisões baseadas em:",
answers:[
{text:"Dados",correct:true},
{text:"Achismos",correct:false},
{text:"Sorte",correct:false},
{text:"Opiniões aleatórias",correct:false}
]
},

{
question: "O objetivo final do GeoVision é:",
answers:[
{text:"Construir cidades mais inteligentes",correct:true},
{text:"Criar jogos",correct:false},
{text:"Produzir filmes",correct:false},
{text:"Vender computadores",correct:false}
]
}

];

const questions = shuffle([...allQuestions]).slice(0, 5);

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

            if(answer.correct){
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

    if(currentQuestion < questions.length){

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