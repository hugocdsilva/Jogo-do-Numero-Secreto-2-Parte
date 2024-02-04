/*let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha o número entre 1 e 10';
*/
let numeroAleatorio = gerarNumeroAleatorio();

function exibirNomeNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirNomeNaTela('h1','Jogo do número secreto');
exibirNomeNaTela('p', 'Escolha o número entre 1 e 10')

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroAleatorio);
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 +1);
}
