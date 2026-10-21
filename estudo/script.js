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

// Os arrays guardam os caminhos reais e as legendas na mesma ordem.
// A posição 0 corresponde a AniRap, a posição 1 a M4rkim, e assim por diante.
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

// O primeiro item tem índice zero, mas o contador para o visitante começa em 1.
let bernardo_indiceFoto = 0;

function bernardo_atualizarCarrossel() {
  const foto = document.getElementById("bernardo_foto_carrossel");
  foto.src = bernardo_fotos[bernardo_indiceFoto];
  // alt descreve a mesma imagem da legenda, incluindo as ilustrações fornecidas.
  foto.alt = bernardo_legendas[bernardo_indiceFoto];
  document.getElementById("bernardo_legenda_carrossel").innerText =
    bernardo_legendas[bernardo_indiceFoto];
  document.getElementById("bernardo_contador_carrossel").innerText =
    (bernardo_indiceFoto + 1) + " de " + bernardo_fotos.length;
}

function bernardo_mudarFoto(direcao) {
  bernardo_indiceFoto = bernardo_indiceFoto + direcao;

  // length informa a quantidade de fotos; o último índice é length - 1.
  // Depois do último item voltamos ao índice 0, sem fixar 9 na condição.
  if (bernardo_indiceFoto >= bernardo_fotos.length) {
    bernardo_indiceFoto = 0;
  } else if (bernardo_indiceFoto < 0) {
    // Antes do primeiro item, voltamos ao último: navegação circular.
    bernardo_indiceFoto = bernardo_fotos.length - 1;
  }

  bernardo_atualizarCarrossel();
}

// O script fica no fim do body; os elementos já existem para a atualização inicial.
bernardo_atualizarCarrossel();

// activeElement identifica o controle que tinha foco antes de abrir a janela.
// Guardamos esse elemento para devolver o foco ao fechar, sem perder o lugar no card.
let bernardo_focoAnterior = null;

function bernardo_abrirModal(titulo, mensagem) {
  const modal = document.getElementById("bernardo_modal");

  if (!modal.classList.contains("bernardo_modal_visivel")) {
    bernardo_focoAnterior = document.activeElement;
  }

  // Os dois parâmetros vêm do onclick do card e substituem os textos da mesma janela.
  // innerText trata esses valores como texto, sem inserir novas tags HTML.
  document.getElementById("bernardo_titulo_modal").innerText = titulo;
  document.getElementById("bernardo_mensagem_modal").innerText = mensagem;

  // Esta classe faz o CSS trocar display: none por display: block.
  modal.classList.add("bernardo_modal_visivel");
  // inert impede interagir com os elementos de fundo, inclusive pelo teclado.
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

// value lê os campos; trim() desconsidera espaços nas pontas, sem apagar o que foi digitado.
// checked informa se a ciência da demonstração foi marcada (true ou false).
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

  // Só convertemos depois de conferir o vazio, pois Number("") seria zero.
  // O zero inicial não é usado para aceitar uma idade vazia: há uma condição própria abaixo.
  let idade = 0;
  if (idadeTexto !== "") {
    idade = Number(idadeTexto);
  }

  // Uma nova tentativa começa com aparência de erro, removendo um sucesso anterior.
  // A sequência mostra somente o primeiro erro; não há reset() nesses caminhos.
  resultado.classList.remove("bernardo_sucesso");
  if (nome === "") {
    resultado.innerText = "Erro: preencha o nome com texto, não apenas espaços.";
  } else if (idadeTexto === "") {
    resultado.innerText = "Erro: preencha a idade.";
  } else if (!Number.isInteger(idade)) {
    // isInteger() confirma que o número é inteiro, sem aceitar uma idade fracionada.
    resultado.innerText = "Erro: informe a idade em anos inteiros.";
  } else if (idade < 16) {
    resultado.innerText = "Erro: a idade mínima nesta demonstração é 16 anos.";
  } else if (email === "") {
    resultado.innerText = "Erro: preencha o e-mail.";
  } else if (campoEmail.validity.typeMismatch) {
    // O input type=email fornece essa informação de formato, sem abrir o aviso nativo.
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
    // Somente o sucesso restaura os valores iniciais vazios e desmarca o checkbox.
    document.getElementById("bernardo_formulario").reset();
  }
}
