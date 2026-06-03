const imagens = [
    "./images/banner1.png",
    "./images/banner2.png",
    "./images/banner3.png"
];

const hero = document.querySelector(".hero");

let indice = 0;

function trocarImagem() {
    hero.style.backgroundImage =
        `linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,.4)),
        url('${imagens[indice]}')`;

    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }
}

trocarImagem();

setInterval(trocarImagem, 5000);