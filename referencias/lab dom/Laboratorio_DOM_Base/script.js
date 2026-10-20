/* ==================================================================
   LABORATÓRIO DOM JAVASCRIPT
   ------------------------------------------------------------------
   Este arquivo concentra os exemplos de JavaScript usados na página.
   Cada bloco corresponde a uma categoria do HTML.
   ================================================================== */


/* ==================================================================
   1. TROCA DE CORES E TEMA
   ================================================================== */

// A função recebe uma cor como parâmetro.
// Depois altera diretamente a propriedade backgroundColor do <body>.
function trocarCor(cor) {
  document.body.style.backgroundColor = cor;
}


function alternarTema() {
  // Remove uma eventual cor aplicada diretamente pelo exercício anterior.
  // Isso evita que o estilo inline esconda a cor do modo escuro.
  document.body.style.backgroundColor = "";

  // classList.toggle() adiciona a classe se ela não existe
  // e remove a classe se ela já estiver aplicada.
  document.body.classList.toggle("escuro");

  // querySelector() procura um elemento usando um seletor CSS.
  const botao = document.querySelector("#btnTema");

  // classList.contains() verifica se a classe existe no elemento.
  if (document.body.classList.contains("escuro")) {
    botao.innerText = "☀️ Modo Claro";
  } else {
    botao.innerText = "🌙 Modo Escuro";
  }
}


/* ==================================================================
   2. FORMULÁRIO SEMÂNTICO
   ------------------------------------------------------------------
   Este exemplo é estruturado em HTML e CSS e não utiliza JavaScript.
   Consulte a seção 2 do index.html e a área FORMULÁRIOS do style.css.
   ================================================================== */


/* ==================================================================
   3. VALIDAÇÃO DE FORMULÁRIO
   ================================================================== */

function validarCadastro() {
  // getElementById() localiza cada elemento pelo atributo id.
  // .value acessa o valor digitado no campo.
  const nome = document.getElementById("nomeCadastro").value.trim();
  const idade = Number(document.getElementById("idadeCadastro").value);
  const senha = document.getElementById("senhaCadastro").value;
  const confirma = document.getElementById("confirmaSenha").value;

  // Guardamos a referência do parágrafo onde a mensagem será exibida.
  const mensagem = document.getElementById("msgValidacao");

  // Cada condição verifica uma regra diferente.
  if (nome === "") {
    mensagem.innerText = "Preencha o campo nome.";
    mensagem.style.color = "red";
  }
  else if (idade < 18) {
    mensagem.innerText = "O cadastro exige idade mínima de 18 anos.";
    mensagem.style.color = "red";
  }
  else if (senha.length < 6) {
    mensagem.innerText = "A senha deve ter pelo menos 6 caracteres.";
    mensagem.style.color = "red";
  }
  else if (senha !== confirma) {
    mensagem.innerText = "As senhas não coincidem.";
    mensagem.style.color = "red";
  }
  else {
    mensagem.innerText = "Cadastro validado com sucesso, " + nome + "!";
    mensagem.style.color = "green";

    // reset() limpa todos os campos do formulário.
    document.getElementById("formValidacao").reset();
  }
}


/* ==================================================================
   4. ABAS DE CONTEÚDO
   ================================================================== */

function resetarAbas() {
  // Esconde os três conteúdos.
  document.querySelector("#aba1").classList.remove("exibida");
  document.querySelector("#aba2").classList.remove("exibida");
  document.querySelector("#aba3").classList.remove("exibida");

  // Remove a classe visual "ativo" dos três botões.
  document.querySelector("#btnAba1").classList.remove("ativo");
  document.querySelector("#btnAba2").classList.remove("ativo");
  document.querySelector("#btnAba3").classList.remove("ativo");
}


function mostrarAba(numero) {
  // Primeiro, retorna todos os elementos ao estado inicial.
  resetarAbas();

  // O parâmetro numero é usado para montar o seletor do conteúdo.
  const abaEscolhida = document.querySelector("#aba" + numero);
  abaEscolhida.classList.add("exibida");

  // O mesmo número identifica o botão correspondente.
  const botaoEscolhido = document.querySelector("#btnAba" + numero);
  botaoEscolhido.classList.add("ativo");
}


/* ==================================================================
   5. ACCORDION
   ================================================================== */

// querySelectorAll() retorna todos os elementos com a classe informada.
const itensAccordion = document.querySelectorAll(".accordion-item");

// forEach() percorre os itens encontrados, um de cada vez.
itensAccordion.forEach(function(item) {

  // Dentro de cada item, localizamos seu próprio botão.
  const botao = item.querySelector(".accordion-btn");

  // addEventListener() adiciona um evento de clique ao botão.
  botao.addEventListener("click", function() {

    // Verifica se o item clicado já estava aberto.
    const estavaAberto = item.classList.contains("ativo");

    // Antes de abrir um item, todos são fechados.
    itensAccordion.forEach(function(outroItem) {
      outroItem.classList.remove("ativo");
    });

    // Se o item não estava aberto, recebe a classe "ativo".
    if (!estavaAberto) {
      item.classList.add("ativo");
    }
  });
});


/* ==================================================================
   6. JANELA MODAL
   ================================================================== */

function abrirModal(titulo, mensagem) {
  // Os parâmetros recebidos substituem os textos do modal.
  document.getElementById("tituloModal").innerText = titulo;
  document.getElementById("textoModal").innerText = mensagem;

  // display = "block" torna o fundo do modal visível.
  document.getElementById("fundoModal").style.display = "block";
}


function fecharModal() {
  // display = "none" oculta o modal novamente.
  document.getElementById("fundoModal").style.display = "none";
}


/* ==================================================================
   7. CARROSSEL
   ================================================================== */

// Array com os endereços das imagens.
const fotos = [
  "https://picsum.photos/id/10/500/280",
  "https://picsum.photos/id/20/500/280",
  "https://picsum.photos/id/30/500/280"
];

// Outro array guarda as legendas na mesma ordem das imagens.
const legendas = [
  "Paisagem 1: floresta e montanha",
  "Paisagem 2: caderno e café",
  "Paisagem 3: copas de árvores"
];

// O índice indica qual posição do array está sendo exibida.
let indiceFoto = 0;


function mudarImagem(direcao) {
  // O valor recebido pode ser -1 ou 1.
  // Assim, o índice anda para trás ou para frente.
  indiceFoto = indiceFoto + direcao;

  // Atualiza o atributo src da imagem.
  document.getElementById("fotoCarrossel").src = fotos[indiceFoto];

  // Atualiza a legenda correspondente.
  document.getElementById("legendaCarrossel").innerText = legendas[indiceFoto];

  // indiceFoto começa em 0, por isso exibimos indiceFoto + 1.
  document.getElementById("indicadorCarrossel").innerText =
    "Imagem " + (indiceFoto + 1) + " de " + fotos.length;

  // disabled recebe true ou false.
  // O botão anterior fica desabilitado na primeira imagem.
  document.getElementById("btnVoltar").disabled = (indiceFoto === 0);

  // O botão próximo fica desabilitado na última imagem.
  document.getElementById("btnAvancar").disabled = (indiceFoto === fotos.length - 1);
}


/* ==================================================================
   8. LISTA DE TAREFAS
   ================================================================== */

// Referências aos elementos principais da lista.
const campoTarefa = document.querySelector("#campoTarefa");
const listaTarefas = document.querySelector("#listaTarefas");
const contadorTarefas = document.querySelector("#contadorTarefas");

// Esta variável guarda o número atual de tarefas.
let totalTarefas = 0;


function adicionarTarefa() {
  // trim() remove espaços extras do início e do final.
  const texto = campoTarefa.value.trim();

  // Se não houver texto, a função é interrompida.
  if (texto === "") {
    alert("Digite uma tarefa antes de adicionar.");
    return;
  }

  // createElement() cria um novo elemento HTML na memória.
  const novoItem = document.createElement("li");

  // textContent define o texto do novo elemento.
  novoItem.textContent = texto;

  // Criamos também um botão de exclusão.
  const botaoExcluir = document.createElement("button");
  botaoExcluir.textContent = "Excluir";
  botaoExcluir.classList.add("botao-excluir");

  // O clique no botão remove somente o item correspondente.
  botaoExcluir.addEventListener("click", function() {
    novoItem.remove();

    totalTarefas--;
    contadorTarefas.innerText = totalTarefas;
  });

  // O botão passa a ser filho do <li>.
  novoItem.appendChild(botaoExcluir);

  // O <li> passa a ser filho da <ul>.
  listaTarefas.appendChild(novoItem);

  // Atualiza o contador.
  totalTarefas++;
  contadorTarefas.innerText = totalTarefas;

  // Limpa o campo e devolve o foco a ele.
  campoTarefa.value = "";
  campoTarefa.focus();
}


function limparTarefas() {
  // innerHTML vazio remove todos os elementos internos da lista.
  listaTarefas.innerHTML = "";

  // O contador volta ao valor inicial.
  totalTarefas = 0;
  contadorTarefas.innerText = totalTarefas;

  campoTarefa.focus();
}


// Evento de teclado no campo de tarefa.
campoTarefa.addEventListener("keydown", function(evento) {
  // evento.key informa qual tecla foi pressionada.
  if (evento.key === "Enter") {
    adicionarTarefa();
  }
});
