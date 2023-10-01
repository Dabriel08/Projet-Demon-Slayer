const botoes = document.querySelectorAll(".botao");

const persona = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        persona[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personaselec = document.querySelector(".personagem.selecionado");
    personaselec.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoselec = document.querySelector(".botao.selecionado");
    botaoselec.classList.remove("selecionado");
}