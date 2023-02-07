var numSecret = parseInt(Math.random() * (1000 - 1) + 1);
var numTentativas = 1;
var tentativas = 5;
alert('Bem vindo ao Mentalist Game, você tem 4 tentativas para acertar o número secreto. Boa Sorte!!! ');



while(numTyped != numSecret){
  var numTyped = prompt('Digite um número entre 1 e 1000');
  if (numTyped == numSecret){
    alert('A resposta está correta :) ');
  }
  else if(numTyped > numSecret){
    alert('Errou... O número é menor' + ' Cuidado!!! Já foram ' + numTentativas + ' tente novamente');
  }
  else if(numTyped < numSecret){
    alert('Errou... O número é maior' + ' Cuidado!!! Já foram ' + numTentativas + ' tente novamente');
  }
    numTentativas++;
    if (numTentativas == tentativas){
      alert('GAME OVER');
      break;
    }
  
}
