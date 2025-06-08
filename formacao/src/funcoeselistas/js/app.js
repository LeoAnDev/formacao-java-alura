let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial()

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    
    if (chute === numeroSecreto) {
        exibirMensagemAcerto();
        alternarBotoes();
    } else {
        exibirMensagemErro(chute);
        limparCampo();
        tentativas++;
    }
}

function exibirMensagemAcerto() {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
}

function exibirMensagemErro(chute) {
    let mensagem = chute > numeroSecreto ? 'O número secreto é menor!' : 'O número secreto é maior!';
    exibirTextoNaTela('p', mensagem);
}

function alternarBotoes() {
    document.getElementById('reiniciar').removeAttribute('hidden');
    document.getElementById('chutar').setAttribute('hidden', 'true');
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = Math.floor(Math.random() * 4 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista === numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('hidden', 'true');
    document.getElementById('chutar').removeAttribute('hidden');
}