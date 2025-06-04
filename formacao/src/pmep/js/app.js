alert('Boas vindas ao jogo do número secreto');
let chute = prompt('Escolha um número entre 1 e 30');
let numeroSecreto = 5;

// Convertendo a string para número e usando ===
if (Number(chute) === numeroSecreto) {
    alert(`Acertou ! Número secreto: ${numeroSecreto}`);
}  else {
    if (Number(chute) < numeroSecreto) {
        alert(`O número secreto é maior que ${chute}`);
    } else {
        alert(`O número secreto é menor que ${chute}`);
    }
}