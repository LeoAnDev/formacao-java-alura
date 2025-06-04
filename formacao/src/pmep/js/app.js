alert('Boas vindas ao jogo do número secreto !');

let chute = 0;
let numeroMaximo = 5;
let tentativas = 1;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo + 1);

while (chute !== numeroSecreto) {
    chute = Number(prompt(`Escolha um número entre 1 e ${numeroMaximo}`));

    if (chute === numeroSecreto) {
        break;
    } else {
        if (chute < numeroSecreto) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí ! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);