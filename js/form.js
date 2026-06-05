const form = document.getElementById("contactForm");
form.addEventListener("submit", function(event){
    event.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if(nome === ""){
        alert("Digite seu nome.");
        return;
    }

    if(email === ""){
        alert("Digite seu e-mail.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){
        alert("Digite um e-mail válido.");
        return;
    }

    if(mensagem === ""){
        alert("Digite sua mensagem.");
        return;
    }

    alert("Mensagem enviada com sucesso!");
    form.reset();
});