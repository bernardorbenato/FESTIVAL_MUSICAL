


function bernardo_trocarCor(cor) {
  document.body.style.backgroundColor = cor;
}

function bernardo_alternarTema() {
  
  
  document.body.classList.toggle("bernardo_claro");

  const botao = document.getElementById("bernardo_botao_tema");

  
  if (document.body.classList.contains("bernardo_claro")) {
    botao.innerText = "Ativar modo escuro";
  } else {
    botao.innerText = "Ativar modo claro";
  }

  
}



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
  
  
  bernardo_limparAbas();

  const conteudo = document.getElementById("bernardo_" + nome);
  conteudo.classList.add("bernardo_exibida");

  
  const botao = document.getElementById("bernardo_botao_" + nome);
  botao.classList.add("bernardo_ativo");

  
}
