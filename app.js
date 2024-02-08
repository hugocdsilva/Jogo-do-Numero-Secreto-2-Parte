/*let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha o número entre 1 e 10';
*/

let numeroAleatorio = 2;
let tentativas = 1;

function exibirNomeNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibriMensagemInicial(){
exibirNomeNaTela('h1','Jogo do número secreto');
exibirNomeNaTela('p', 'Escolha o número entre 1 e 10')
}

exibriMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroAleatorio){
      exibirNomeNaTela('h1', 'Acertou!');
      let palavraTentativa = tentativas > 1 ? 'tentativa' : 'tentativas'
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
      exibirNomeNaTela('p', mensagemTentativas)
      document.getElementById('reiniciar').removeAttribute('disabled');}
    else{
      if(chute > numeroAleatorio){exibirNomeNaTela('p', 'O número secreto é menor');}
      else{exibirNomeNaTela('p', 'O número secreto é maior');}
      tentativas++;
      limparCampo();
    }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 +1);
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}

function reinicarJogo(){
  numeroAleatorio = gerarNumeroAleatorio(); 
  limparCampo();
  tentativas = 1;
  exibriMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true)
}