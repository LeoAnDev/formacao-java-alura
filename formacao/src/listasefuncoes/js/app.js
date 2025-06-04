let numeroSecreto = gerarNumeroAleatorio()

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

exibirTextoNaTela('h1', 'Jogo do número secreto')
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')

function verificarChute() {
    console.log(numeroSecreto)
}

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 10 + 1)
}