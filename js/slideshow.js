const imagens = [
    "./images/banner1.png",
    "./images/banner2.png",
    "./images/banner3.png"
];

const bg = document.querySelector(".hero-bg");

let indice = 0;

function trocarImagem() {
    bg.style.opacity = "0";

    setTimeout(() => {
        bg.style.backgroundImage = `
            linear-gradient(
                to top,
                rgba(0, 0, 0, 0.8),
                rgba(0, 0, 0, 0.4)
            ),
            url('${imagens[indice]}')
        `;

        bg.style.opacity = "1";

        indice = (indice + 1) % imagens.length;
    }, 1500);
}

bg.style.backgroundImage = `
    linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.4)
    ),
    url('${imagens[0]}')
`;

indice = 1;

setInterval(trocarImagem, 5000);