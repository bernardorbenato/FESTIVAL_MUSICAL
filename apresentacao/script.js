


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



const bernardo_fotos = [
  "img/anirap.jpg",
  "img/m4rkim.png",
  "img/oshaman.png",
  "img/7minutoz.png",
  "img/BLXCK.png",
  "img/enygma.png",
  "img/daarui.png",
  "img/anny.png",
  "img/mistery.png"
];

const bernardo_legendas = [
  "AniRap — foto em um estúdio.",
  "M4rkim — retrato em preto e branco.",
  "oShaman — ilustração de personagem de cabelos alaranjados.",
  "7 Minutoz — composição ilustrada com o texto 7MZ.",
  "BLXCK — ilustração de personagem com linhas luminosas cruzadas.",
  "Enygma — ilustração de personagem com a mão no rosto.",
  "Daarui — ilustração de personagem de óculos e chapéu.",
  "Anny — retrato com jaqueta clara e escura.",
  "Mistery — ilustração de personagem com microfone em tons vermelhos."
];


let bernardo_indiceFoto = 0;

function bernardo_atualizarCarrossel() {
  const foto = document.getElementById("bernardo_foto_carrossel");
  foto.src = bernardo_fotos[bernardo_indiceFoto];
  
  foto.alt = bernardo_legendas[bernardo_indiceFoto];
  document.getElementById("bernardo_legenda_carrossel").innerText =
    bernardo_legendas[bernardo_indiceFoto];
  document.getElementById("bernardo_contador_carrossel").innerText =
    (bernardo_indiceFoto + 1) + " de " + bernardo_fotos.length;
}

function bernardo_mudarFoto(direcao) {
  bernardo_indiceFoto = bernardo_indiceFoto + direcao;

  
  
  if (bernardo_indiceFoto >= bernardo_fotos.length) {
    bernardo_indiceFoto = 0;
  } else if (bernardo_indiceFoto < 0) {
    
    bernardo_indiceFoto = bernardo_fotos.length - 1;
  }

  bernardo_atualizarCarrossel();
}


bernardo_atualizarCarrossel();



let bernardo_focoAnterior = null;

function bernardo_abrirModal(titulo, mensagem) {
  const modal = document.getElementById("bernardo_modal");

  if (!modal.classList.contains("bernardo_modal_visivel")) {
    bernardo_focoAnterior = document.activeElement;
  }

  
  
  document.getElementById("bernardo_titulo_modal").innerText = titulo;
  document.getElementById("bernardo_mensagem_modal").innerText = mensagem;

  
  modal.classList.add("bernardo_modal_visivel");
  
  document.getElementById("bernardo_pagina").inert = true;
  document.getElementById("bernardo_fechar_modal").focus();
}

function bernardo_fecharModal() {
  document.getElementById("bernardo_modal").classList.remove("bernardo_modal_visivel");
  document.getElementById("bernardo_pagina").inert = false;

  if (bernardo_focoAnterior !== null) {
    bernardo_focoAnterior.focus();
  }
}



function bernardo_validarFormulario() {
  const nome = document.getElementById("bernardo_nome").value.trim();
  const idadeTexto = document.getElementById("bernardo_idade").value.trim();
  const campoEmail = document.getElementById("bernardo_email");
  const email = campoEmail.value.trim();
  const cidade = document.getElementById("bernardo_cidade").value.trim();
  const preferencia = document.getElementById("bernardo_preferencia").value;
  const texto = document.getElementById("bernardo_mensagem").value.trim();
  const ciencia = document.getElementById("bernardo_ciencia").checked;
  const resultado = document.getElementById("bernardo_resultado");



  let idade = 0;
  if (idadeTexto !== "") {
    idade = Number(idadeTexto);
  }



  resultado.classList.remove("bernardo_sucesso");
  if (nome === "") {
    resultado.innerText = "Erro: preencha o nome com texto, não apenas espaços.";
  } else if (idadeTexto === "") {
    resultado.innerText = "Erro: preencha a idade.";
  } else if (!Number.isInteger(idade)) {

    resultado.innerText = "Erro: informe a idade em anos inteiros.";
  } else if (idade < 16) {
    resultado.innerText = "Erro: a idade mínima nesta demonstração é 16 anos.";
  } else if (email === "") {
    resultado.innerText = "Erro: preencha o e-mail.";
  } else if (campoEmail.validity.typeMismatch) {

    resultado.innerText = "Erro: informe um e-mail em formato válido, como nome@exemplo.com.";
  } else if (cidade === "") {
    resultado.innerText = "Erro: preencha a cidade com texto, não apenas espaços.";
  } else if (preferencia === "") {
    resultado.innerText = "Erro: selecione uma preferência musical.";
  } else if (texto === "") {
    resultado.innerText = "Erro: escreva uma mensagem, não apenas espaços.";
  } else if (!ciencia) {
    resultado.innerText = "Erro: marque a ciência de que o formulário é uma demonstração acadêmica.";
  } else {
    resultado.innerText = "Demonstração validada com sucesso. Nenhum dado foi enviado ou armazenado neste site de demonstração.";
    resultado.classList.add("bernardo_sucesso");

    document.getElementById("bernardo_formulario").reset();
  }
}
