const imagens = [
    "./images/banner1.png",
    "./images/banner2.png",
    "./images/banner3.png"
];

const hero = document.querySelector(".hero");

let indice = 0;

// adiciona transição suave
hero.style.transition = "opacity 0.8s ease-in-out";

function trocarImagem() {
    hero.style.opacity = "0.7";

    setTimeout(() => {
        hero.style.backgroundImage =
            `linear-gradient(to top,
            rgba(0,0,0,.8),
            rgba(0,0,0,.4)),
            url('${imagens[indice]}')`;

        hero.style.opacity = "1";

        indice = (indice + 1) % imagens.length;
    }, 400);
}

trocarImagem();

setInterval(trocarImagem, 5000);