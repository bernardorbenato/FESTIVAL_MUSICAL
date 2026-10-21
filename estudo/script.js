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
