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

// Primeiro retiramos as classes de exibição e destaque dos seis pares.
// As chamadas explícitas seguem a função de limpeza do exemplo do professor.
function bernardo_limparAbas() {
  document.getElementById("bernardo_festival").classList.remove("bernardo_exibida");
  document.getElementById("bernardo_atracoes").classList.remove("bernardo_exibida");
  document.getElementById("bernardo_programacao").classList.remove("bernardo_exibida");
  document.getElementById("bernardo_estrutura").classList.remove("bernardo_exibida");
  document.getElementById("bernardo_galeria").classList.remove("bernardo_exibida");
  document.getElementById("bernardo_inscricao").classList.remove("bernardo_exibida");

  document.getElementById("bernardo_botao_festival").classList.remove("bernardo_ativo");
  document.getElementById("bernardo_botao_atracoes").classList.remove("bernardo_ativo");
  document.getElementById("bernardo_botao_programacao").classList.remove("bernardo_ativo");
  document.getElementById("bernardo_botao_estrutura").classList.remove("bernardo_ativo");
  document.getElementById("bernardo_botao_galeria").classList.remove("bernardo_ativo");
  document.getElementById("bernardo_botao_inscricao").classList.remove("bernardo_ativo");
}

function bernardo_mostrarAba(nome) {
  // nome recebe textos como "festival" ou "galeria" enviados pelo onclick.
  // A limpeza vem antes da abertura: nunca deixamos duas abas abertas.
  bernardo_limparAbas();

  const conteudo = document.getElementById("bernardo_" + nome);
  conteudo.classList.add("bernardo_exibida");

  // O mesmo sufixo localiza o botão que deve receber o destaque visual.
  const botao = document.getElementById("bernardo_botao_" + nome);
  botao.classList.add("bernardo_ativo");

  // Nenhuma cor ou classe de tema é alterada ao navegar entre as abas.
}
