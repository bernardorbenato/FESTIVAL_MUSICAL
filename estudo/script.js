// onclick no HTML chama esta função e envia uma cor como argumento.
// O parâmetro cor recebe esse valor e backgroundColor muda o fundo do body.
// Os painéis têm fundos próprios para manter a leitura com qualquer uma das cinco cores.
function bernardo_trocarCor(cor) {
  document.body.style.backgroundColor = cor;
}

function bernardo_alternarTema() {
  // toggle() adiciona a classe quando ela não existe e a remove quando já existe.
  // Sem a classe, vale o tema escuro inicial; com ela, valem as regras do modo claro.
  document.body.classList.toggle("bernardo_claro");

  const botao = document.getElementById("bernardo_botao_tema");

  // contains() verifica o tema atual. O texto informa a ação do próximo clique.
  if (document.body.classList.contains("bernardo_claro")) {
    botao.innerText = "Ativar modo escuro";
  } else {
    botao.innerText = "Ativar modo claro";
  }

  // Esta função não modifica backgroundColor: a cor escolhida continua aplicada.
}
