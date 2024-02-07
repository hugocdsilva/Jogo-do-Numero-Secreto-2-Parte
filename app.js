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
    if(chute == numeroAleatorio){
      exibirNomeNaTela('h1', 'Acertou!');
      exibirNomeNaTela('p', 'Você descobriu o número secreto!')}
    else{
      if(chute > numeroAleatorio){exibirNomeNaTela('p', 'O número secreto é menor');}
      else{exibirNomeNaTela('p', 'O número secreto é maior');}
    }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 +1);
}
