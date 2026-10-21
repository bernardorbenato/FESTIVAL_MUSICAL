# Estudo e defesa — etapa HTML

Entrega e defesa previstas para 26/10/2026, conforme orientação do aluno.

## Como estudar

Abra `estudo/index.html` no navegador e no editor. Leia um comentário e localize o trecho correspondente na página. Abra também `apresentacao/index.html`: o conteúdo deve ser o mesmo, sem os comentários no código-fonte. O aspecto visual atual é o padrão do navegador.

## Percurso do código

1. `head`: UTF-8 permite os acentos; `viewport` prepara a página para telas menores, mas não substitui o futuro CSS responsivo. `title` identifica a aba do navegador e inclui o nome do aluno. `link` carrega o arquivo CSS relativo à pasta atual.
2. `header`: único cabeçalho, com o título principal `h1`, slogan, banner textual e aviso acadêmico. Não há imagem enquanto não existir um arquivo real.
3. `nav`: único menu, organizado em `ul` e `li`. Cada `href="#bernardo_..."` aponta para um `id` existente. `aria-label` dá um nome acessível ao menu, como no exemplo do professor.
4. `main`: único conteúdo principal. A `div` de layout agrupa a área das seis seções e o `aside`. Ainda não há colunas visuais; elas serão definidas pelo CSS.
5. `section`: separa Festival, Atrações, Programação, Estrutura, Galeria e Inscrição. Cada seção tem um título `h2`. Estão todas visíveis.
6. `article`: cada um dos nove cards tem título `h3` e pode ser entendido separadamente. As descrições estão pendentes porque os materiais não verificam informações sobre os artistas.
7. `table`: `caption` identifica a tabela, `thead` agrupa o cabeçalho e `tbody` agrupa os dados. `tr` cria linhas; `th` identifica cabeçalhos e `td` contém dados. `scope="col"` relaciona cabeçalhos às colunas e `scope="row"` às linhas. São sete linhas totais e cinco colunas, sem mesclagens. O cabeçalho conta como uma linha.
8. `figure` e `figcaption`: agrupam cada espaço da futura imagem e sua legenda. São nove posições estáticas. A galeria ainda não contém fotos e não é um carrossel funcional.
9. `form`: dois `fieldset` organizam os campos e suas `legend` identificam os grupos. `for` de cada `label` corresponde ao `id` do campo. `name` identifica o controle; ele não substitui o `id`. `aria-describedby` associa o aviso visível ao formulário para tecnologias assistivas.
10. `disabled`: desabilita os campos de cada grupo nesta etapa. O botão é `type="button"` e também está desabilitado. Não existe botão de envio. Não retirar essas proteções antes da etapa JavaScript. `required` marca os campos previstos como obrigatórios; ainda não há validação funcional enquanto eles estiverem desabilitados.
11. `aside`: avisos complementares ao portal. `footer`: único rodapé, com autoria e aviso de festival fictício. `script` liga o arquivo JavaScript vazio, ao final do corpo, seguindo o exemplo do professor.

## Três perguntas de defesa

1. Por que as atrações usam `article` dentro de `section`, enquanto os avisos usam `aside`? Localize também o único `main`.
2. Como o link “Programação” encontra sua seção e como um `label` identifica seu campo? Explique por que não podemos repetir um `id`.
3. Como a tabela tem sete linhas e cinco colunas e ainda inclui os nove artistas? Explique `caption`, `thead`, `tbody`, `th`, `td` e `scope` no próprio código.

## Pequeno exercício para fazer sozinho

Acrescente um parágrafo na seção Festival dizendo o que você quer aprender com o projeto. Faça a mesma alteração em `estudo/index.html` e `apresentacao/index.html`, sem mudar IDs nem classes. Reabra as duas páginas e confira que o texto aparece igualmente.

## Revisão manual no navegador — ainda pendente

- Abrir cada versão diretamente pelo arquivo `index.html`.
- Percorrer os seis links do menu e “Voltar ao topo”.
- Confirmar as seis seções visíveis, nove cards, nove espaços da galeria e tabela com sete linhas e cinco colunas.
- Confirmar os campos e o botão desabilitados, sem envio ao pressionar Enter.
- Conferir acentos, título da aba e ausência de erros no Console.

Esta lista orienta o estudo manual; não representa testes de navegador já executados.

## Estudo e defesa — etapa CSS

As explicações anteriores registram a etapa HTML. Agora existe estilização e foram feitas verificações no Chrome; o histórico de HTML foi mantido para acompanhar a evolução. JavaScript ainda não foi implementado.

### Onde localizar cada requisito

- **Tag:** body define fundo, texto e fonte; p define o espaçamento dos parágrafos.
- **Classe:** .bernardo_secao organiza as caixas das seis seções. Uma classe pode ser reutilizada em vários elementos.
- **ID:** #bernardo_lateral estiliza o único aside. O caractere # indica ID no CSS; ele não é escrito dentro do atributo id do HTML.
- **Agrupado:** h1, h2, h3 compartilham propriedades usando vírgulas.
- **Encadeado:** .bernardo_banner h1 seleciona o título dentro do banner. O espaço representa a relação entre um ancestral e seu descendente; não é uma lista de elementos independentes.
- **CSS externo:** style.css concentra o layout. O link no head carrega o arquivo da própria pasta de cada versão.
- **CSS interno:** o bloco style no head atinge três parágrafos distintos: etiqueta do banner, slogan e aviso acadêmico. São aplicações pontuais exigidas pelo enunciado.
- **CSS inline:** o atributo style coloca o título Festival em itálico e reforça a primeira linha do rodapé. Nesta página não há disputa intencional entre estilos para a mesma propriedade; o restante fica no CSS externo.

### Como explicar os Grids e as telas menores

Na regra .bernardo_cards, display: grid habilita o Grid. grid-template-columns: repeat(3, 1fr) repete três colunas iguais; fr divide o espaço disponível depois de descontados os intervalos. Os nove artigos ocupam três linhas de três cards. gap separa as caixas. A galeria estática reaproveita essa distribuição, sem navegação de carrossel.

Na regra .bernardo_layout, 3fr 1fr divide o espaço entre conteúdo e avisos: a primeira coluna recebe três partes e a segunda uma. O gap não faz parte dessas frações. min-width: 0 em .bernardo_conteudo permite que a coluna encolha mesmo contendo uma tabela larga; align-items: start mantém a caixa de avisos na altura do seu conteúdo.

As media queries usam max-width como nos exemplos do professor. Até 1000 px, o aside fica abaixo do conteúdo e os cards passam para duas colunas. Até 600 px, os cards usam uma coluna, os títulos diminuem e os preenchimentos ficam menores. Em 500 px, ambas as media queries se aplicam; a última regra para a mesma propriedade determina a coluna única. As seções nunca são escondidas.

A tabela conserva sua estrutura 7×5. min-width: 640px mantém as colunas legíveis; overflow-x: auto na caixa permite rolagem horizontal quando a tabela não cabe. tabindex="0" torna a área focável pelo teclado, e role="region" com aria-label identifica essa área. Isso é uma adaptação de leitura, não uma interação JavaScript. O seletor a:focus mostra um contorno nos links; a caixa da tabela recebe o mesmo contorno ao ter foco. text-underline-offset afasta o sublinhado do texto para facilitar a leitura dos links.

As fontes são locais e podem variar conforme o sistema: Arial/Helvetica para leitura e Impact/Arial Black para o título. O último nome sans-serif é uma alternativa genérica. As cores claras contrastam com o fundo grafite; o verde-lima marca títulos, bordas e links. Os espaços de imagens continuam identificados por texto e bordas tracejadas.

### Três perguntas de defesa sobre CSS

1. Qual é a diferença entre .bernardo_card, #bernardo_lateral e .bernardo_card h3? Localize também um seletor agrupado e explique o papel da vírgula.
2. Por que repeat(3, 1fr) cria cards de larguras iguais, enquanto 3fr 1fr cria colunas diferentes? O que acontece com o espaço reservado ao gap?
3. Quais regras passam a valer em uma tela de 390 px? Por que o aside fica abaixo, os cards usam uma coluna e a tabela pode rolar sem alargar a página?

### Exercício de CSS realizado pelo aluno

O aluno alterou o gap de .bernardo_cards e .bernardo_fotos de 16px para 20px nas duas versões de style.css. O valor foi reconferido no encerramento de 21/10/2026. Para a defesa, explique por que as três colunas continuam iguais, mas ficam um pouco mais estreitas no desktop: o Grid distribui o espaço que resta depois dos intervalos.

### O que já foi verificado e o que praticar

O Chrome foi usado sem janela para medir as duas versões em desktop e celular simulado. A versão estudo também foi medida em 1024, 768 e 320 px. Os Grids mudaram como previsto, não houve rolagem horizontal da página, as seis seções ficaram visíveis e os controles permaneceram desabilitados. Foram inspecionadas capturas do topo e dos cards em 1440 e 390 px. O foco foi conferido por automação; não foi feita uma navegação manual completa por Tab.

Em 21/10/2026, Bernardo informou que realizou a revisão manual no navegador. Essa revisão foi feita pelo aluno, não pelo assistente. O relato não detalha os testes individuais; portanto, não permite afirmar que todos os itens do roteiro foram testados.

Como roteiro para aprofundar ou registrar os resultados, percorra os links usando Tab, confirme o contorno de foco e teste a área rolável da tabela no teclado. Examine também tabela, galeria, formulário e rodapé, teste zoom de 200% e compare em outro navegador. Não ative o formulário nem acrescente JavaScript neste exercício.

No encerramento, o assistente conferiu estaticamente o gap de 20px e a igualdade entre todos os arquivos das versões, com diferenças apenas nos comentários explicativos. Não houve nova verificação do navegador pelo assistente. O push deste encerramento será feito manualmente pelo aluno.

## Personalização — cinco cores e dois temas

Esta etapa já possui duas funções JavaScript simples. Os trechos anteriores descrevem o histórico, quando ainda não havia interações. O requisito corrigido é de cinco cores: verde-lima, roxo, azul, vermelho e laranja, além de claro/escuro. O escuro é o modo inicial; nenhuma classe de modo claro está no body ao abrir a página.

### Clique → função → alteração na página

No botão Azul, onclick="bernardo_trocarCor('#9ecbff')" liga o clique à função. O valor '#9ecbff' é o argumento enviado; cor é o nome do parâmetro que recebe esse valor na função. A linha document.body.style.backgroundColor = cor altera somente o fundo do body. Os outros quatro botões chamam a mesma função com valores diferentes. Não são necessárias cinco funções.

O fundo aparece nas margens e intervalos entre os blocos. Os painéis mantêm fundos de leitura definidos pelo tema. O enunciado não exige uma área específica; o body foi escolhido para seguir o exemplo de aula, e a interface explica onde a cor aparece.

O botão de tema chama bernardo_alternarTema(). classList.toggle("bernardo_claro") adiciona a classe se ela estiver ausente e a remove se estiver presente. O CSS externo contém as regras body.bernardo_claro para modificar textos e fundos dos blocos, sem esconder seções.

Depois, getElementById() localiza o botão. A condição classList.contains("bernardo_claro") verifica o estado atual: no if, innerText recebe “Ativar modo escuro”; no else, recebe “Ativar modo claro”. O texto descreve o próximo clique, não apenas o estado atual.

A função do tema não limpa nem redefine backgroundColor. Por isso, a cor escolhida permanece ao alternar para claro e voltar ao escuro. Como não há armazenamento, recarregar a página restaura o escuro com fundo grafite inicial. Os botões têm type="button"; o formulário de demonstração continua desabilitado.

### Três perguntas de defesa

1. Qual é a diferença entre o argumento '#9ecbff' no onclick e o parâmetro cor na função? Como cinco botões usam a mesma função?
2. O que toggle() faz com bernardo_claro e por que contains() é usado na condição que muda o texto do botão?
3. Por que a cor continua aplicada ao trocar o tema? Qual propriedade a função de tema precisa deixar intacta?

### Pequena alteração realizada pelo aluno

Bernardo trocou o argumento da função no botão Azul de '#79b8ff' para '#9ecbff' nos dois HTML, sem criar outra função. A alteração foi conferida no encerramento. Para defender o exercício, explique como mudar o argumento altera a cor usando a mesma função e por que o novo azul permanece após alternar claro/escuro.

### Testes e estudo

O assistente testou por automação as dez combinações nas duas versões, em 1440, 390 e 320 px: botões, textos, manutenção da cor, foco, contraste, seções visíveis e formulário desabilitado. Também inspecionou três capturas. O mínimo de contraste medido nos textos verificados foi aproximadamente 8,29:1. Não houve navegação manual completa por teclado nem teste em celular físico.

A revisão manual da etapa CSS foi feita por Bernardo, conforme seu relato. A revisão manual desta nova funcionalidade ainda deve ser realizada pelo aluno. Abas, carrossel, modal e validação ainda não estão implementados.

No encerramento de 21/10/2026, o assistente repetiu os 60 casos automatizados com o Azul #9ecbff: todos passaram, com mínimo de contraste aproximadamente 8,29:1. Não houve nova inspeção visual das capturas. A revisão manual informada pelo aluno permanece atribuída a Bernardo; os testes específicos que ele realizou não foram detalhados. As comparações finais confirmaram as versões diferentes apenas nos comentários. O push deste encerramento será manual, pelo aluno.

## Sistema de seis abas

Esta etapa substitui a exibição simultânea das seis seções por uma seção de cada vez. As explicações anteriores sobre seções visíveis e abas pendentes pertencem ao histórico. Festival começa visível e com seu botão destacado; as outras cinco seções continuam no HTML, inicialmente escondidas pelo CSS.

### Clique → limpeza → abertura → destaque

O botão Galeria tem type="button" e onclick="bernardo_mostrarAba('galeria')". O texto 'galeria' é o argumento; nome é o parâmetro que o recebe na função. O mesmo padrão atende às outras cinco abas.

Primeiro, bernardo_mostrarAba(nome) chama bernardo_limparAbas(). A limpeza remove bernardo_exibida das seis seções e bernardo_ativo dos seis botões, por meio de getElementById() e classList.remove(), como no exemplo do professor. As chamadas são explícitas para facilitar a leitura do código.

Depois, "bernardo_" + nome localiza bernardo_galeria. classList.add("bernardo_exibida") permite que a regra .bernardo_secao.bernardo_exibida aplique display: block. As outras seções continuam com display: none. Finalmente, "bernardo_botao_" + nome encontra o botão e recebe bernardo_ativo para o destaque. A limpeza antes da abertura evita acumular conteúdos e destaques.

Os dois nomes de classe em .bernardo_secao.bernardo_exibida estão juntos, sem espaço: o seletor corresponde a um mesmo elemento que possui ambas as classes. Isso é diferente do seletor descendente .bernardo_card h3. O padrão de duas classes juntas também aparece no CSS de abas do professor.

### Menu, teclado e personalização

O nav mantém ul, li e links separados da div com os botões. O link Galeria tem href="#bernardo_galeria" e chama a mesma função no onclick. A seção aparece durante o clique, antes da navegação padrão do navegador até a âncora. Sem esse onclick, a âncora poderia apontar para uma seção ainda oculta.

Os botões continuam sendo controles HTML nativos, acessíveis com Tab e acionáveis com Enter. O contorno indica o foco do teclado; o preenchimento verde-lima indica a aba ativa. Esses dois estados podem estar em botões diferentes. Não foram adicionados papéis ARIA de tablist, nem navegação por setas: o comportamento desta etapa é o de botões nativos conforme o exemplo de aula.

flex-wrap permite quebrar os seis botões em linhas menores. Os dois Grids de conteúdo e artistas permanecem nas suas regiões originais. O aside não é escondido junto com as seções, então cores e tema continuam disponíveis. A função de abas não altera backgroundColor nem bernardo_claro no body, preservando as escolhas enquanto o usuário navega. O formulário continua desabilitado mesmo quando Inscrição está aberta.

### Três perguntas de defesa

1. Como o argumento 'galeria' permite localizar tanto a seção quanto seu botão sem mudar os IDs existentes?
2. Por que a função de limpeza precisa executar antes de adicionar as classes da aba escolhida? O que poderia acontecer se apenas adicionássemos classes?
3. Por que o link do menu precisa de onclick além de href? Qual é a diferença entre o destaque ativo e o contorno de foco?

### Pequeno exercício para fazer sozinho

Troque somente o texto do botão “Festival” por “Sobre o festival” nos dois HTML. Preserve seu ID e o argumento 'festival'. Reabra a página e confira que ele continua ativo inicialmente, abre a mesma seção e cabe no layout de 390 px. Explique por que mudar o rótulo não muda a associação entre botão e conteúdo.

No encerramento de 21/10/2026, a alteração feita por Bernardo foi uma variação do exercício: ele mudou o título h2 da seção para “Sobre o Festival” nas duas versões. O botão continua “Festival”. IDs e argumento 'festival' foram preservados; o parágrafo também passou a começar com “Quero”. As alterações foram mantidas sem reescrita. Na defesa, explique por que mudar o título do conteúdo não interfere na associação entre o botão e a seção.

### Testes realizados e prática pendente

O assistente testou as duas versões em 1440 e 390 px, com as dez combinações de cores e temas: 480 acionamentos dos seis botões e seis links. Em todos, houve uma única seção visível e um único botão ativo, sem perder a personalização. Também testou 24 ativações por Enter, percorrendo os seis botões com Tab nas duas versões e larguras. Capturas desktop/celular da aba Atrações foram inspecionadas.

A revisão manual desta nova funcionalidade pelo aluno ainda está pendente. Testes de outros navegadores, leitores de tela, zoom, histórico e URLs abertas diretamente com hash não foram feitos. A implementação não sincroniza abas com Voltar/Avançar ou hash digitado; inicia em Festival e atende aos cliques nos controles da página. Não implemente carrossel, modal ou validação nesta etapa.

Atualização no encerramento: Bernardo informou sua revisão manual das abas. Essa revisão é atribuída ao aluno, sem presumir quais testes específicos ele realizou. O assistente revalidou estaticamente o título, IDs, argumentos e a igualdade das versões; os 480 acionamentos e as 24 ativações por teclado citados acima são da implementação, não foram repetidos após a alteração textual. Testes específicos não detalhados pelo aluno continuam sem resultado registrado. O push deste encerramento será feito manualmente por Bernardo.

## Carrossel circular da galeria

O carrossel agora está implementado; os registros anteriores de galeria estática ou carrossel pendente são históricos. São nove imagens reais fornecidas pelo aluno. Na implementação inicial foram usados um JPG e oito WebP. Na adequação posterior, os oito WebP foram convertidos de verdade para PNG e substituídos no site, que agora usa somente JPG/PNG no carrossel. O resultado da conversão está registrado no progresso.

### Arrays, índice e atualização

bernardo_fotos guarda os caminhos relativos e bernardo_legendas guarda as descrições na mesma ordem. A primeira posição dos dois arrays é AniRap, a segunda é M4rkim, e assim por diante. Alterar a ordem de um array exige alterar a ordem do outro para manter a correspondência.

bernardo_indiceFoto começa em zero porque o primeiro item de um array é acessado com [0]. Já o contador para o visitante soma 1, mostrando “1 de 9”. bernardo_fotos.length informa a quantidade total; o último índice válido é length - 1, isto é, 8 com os nove itens atuais.

Anterior chama bernardo_mudarFoto(-1) e Próximo chama bernardo_mudarFoto(1). O parâmetro direcao é somado ao índice. Se o índice ficar igual ou maior que length, ele volta a 0. Se ficar menor que 0, ele passa a length - 1. As condições não dependem de escrever o número 9: elas acompanham a quantidade do array.

Depois de ajustar o limite, bernardo_atualizarCarrossel() coloca o caminho do índice atual no src, a descrição no alt e no figcaption e a posição no contador. alt é o texto alternativo da imagem; não é uma biografia nem uma informação extra inventada sobre o artista. Como algumas imagens são ilustrações, as descrições dizem isso expressamente.

A atualização inicial é chamada no final de script.js, que fica depois dos elementos do HTML. O contador começa sincronizado com os arrays. Trocar de aba não reinicia o índice; a Galeria volta à imagem em que estava. Cores e tema também continuam preservados.

### CSS e controles

object-fit: contain mantém a imagem inteira, proporcional, no quadro de 360px de altura ou 260px em telas menores. Pode haver faixas de fundo ao redor; elas evitam recortes e distorções. Os botões usam type="button", onclick e o foco visível já existente. Não há reprodução automática ou efeitos de transição.

### Três perguntas de defesa

1. Por que os caminhos e as legendas precisam estar na mesma ordem? O que aconteceria se apenas uma legenda fosse movida de posição?
2. Por que o contador usa índice + 1, enquanto o último índice válido é length - 1?
3. Como os dois limites funcionam: o que acontece com o índice ao avançar da última imagem e ao voltar da primeira?

### Exercício de legenda realizado pelo aluno

O aluno escolheu a primeira legenda “AniRap — foto em um estúdio.”, uma variação do texto sugerido no exercício. Ela foi preservada e sincronizada nos dois HTML e nos dois arrays de legendas. Ao abrir Galeria, o alt, a legenda e o primeiro item do array usam o mesmo texto, com contador “1 de 9”. Explique por que alterar apenas o HTML inicial não bastava: bernardo_atualizarCarrossel() substitui esses textos pelos valores do array ao carregar e navegar.

### Testes e prática pendente

O assistente conferiu as nove imagens, suas legendas e alt, ambos os sentidos e limites, nas duas versões em 1440 e 390px. Foram 76 observações dos percursos e mais quatro verificações do último slide, além de 40 estados de preservação de slide, cores, tema e abas. As imagens carregaram e foram decodificadas pelo Chrome, sem erros JavaScript capturados. Capturas desktop/celular da primeira imagem foram inspecionadas pelo assistente.

A revisão manual deste carrossel pelo aluno continua pendente, assim como testes em celular físico, outros navegadores, zoom e leitor de tela. A revisão manual anterior continua atribuída a Bernardo e não equivale a uma revisão desta nova funcionalidade. Modal e validação permanecem pendentes; não avançar para eles neste exercício.

### Adequação dos formatos e nova verificação

O Chrome foi usado apenas como ferramenta externa de conversão: decodificou cada WebP e exportou um PNG nas mesmas dimensões. A comparação dos pixels decodificados antes e depois foi igual nos oito arquivos; as assinaturas dos PNG e as cópias idênticas nas duas pastas foram conferidas. Isso é diferente de renomear .webp para .png, que não altera a codificação real.

Os caminhos dos arrays agora usam .png, exceto anirap.jpg, que permaneceu intacto. Depois de testar os caminhos novos e conferir ausência de dependências, os WebP foram removidos. A conversão não acrescentou bibliotecas, canvas ou ferramentas ao código do site: a rotina ficou na pasta temporária do sistema.

Após a remoção, o assistente repetiu no Chrome os nove slides, as legendas e alt, contador e os dois limites circulares, em ambas as versões e larguras de 1440 e 390px, além dos 40 estados de preservação de slide/cor/tema. Também inspecionou capturas finais. Os testes passaram sem arquivos quebrados ou exceções JavaScript capturadas. A revisão manual pelo aluno continua distinta desses testes automatizados.

### Como localizar a versão correta no GitHub

Na conferência de 21/10/2026, a consulta direta ao GitHub confirmou main no commit b7a1da2, igual ao estado local inicial e a origin/main. Esse commit contém o carrossel e as nove imagens de cada versão. O commit 9ab1630 é a etapa anterior, somente de abas. Para revisar o carrossel, consulte b7a1da2 ou um descendente dele, incluindo estudo/img/ e apresentacao/img/.

As 18 imagens locais foram conferidas contra os arquivos já commitados em origin/main; os bytes são iguais. Os oito PNG de cada versão têm assinatura real de PNG. Os testes automatizados do carrossel foram repetidos em 1440 e 390px nas duas versões e passaram; nesta conferência não houve nova revisão visual de capturas ou revisão manual atribuída ao assistente. O novo commit de documentação preserva o histórico e o conteúdo existente, e seu push será feito manualmente pelo aluno.

## Modal dinâmico dos nove cards

Os registros de modal pendente pertencem às etapas anteriores. Agora existe uma única janela de detalhes; o formulário ainda não possui validação e permanece desabilitado.

### Clique → parâmetros → texto → exibição

Cada botão “Ver detalhes” é type="button" e usa onclick para chamar bernardo_abrirModal(titulo, mensagem). O nome do artista é enviado como primeiro argumento; o segundo descreve somente sua seleção para o conceito acadêmico do Geek Beats, sem participação confirmada. Não são biografias verificadas.

A função coloca os parâmetros nos elementos bernardo_titulo_modal e bernardo_mensagem_modal com innerText. Isso substitui o conteúdo como texto, sem interpretar tags HTML. Depois, classList.add("bernardo_modal_visivel") faz valer a regra .bernardo_modal.bernardo_modal_visivel, que mostra a camada. A regra base .bernardo_modal usa display: none, por isso a página começa com a janela fechada.

bernardo_fecharModal() usa classList.remove() para esconder a mesma estrutura. Ao abrir outro artista, os textos anteriores são substituídos, sem criar outra janela. O modal fica fora das abas para não depender da visibilidade de uma section.

### Foco, fundo e telas pequenas

focus() já aparece nos materiais do professor. Dois complementos foram explicados antes do uso: document.activeElement informa qual elemento tinha foco ao abrir; a variável bernardo_focoAnterior guarda essa referência para o retorno ao fechar. A verificação da classe evita substituir a referência de origem se a janela já estiver aberta e receber apenas outro conteúdo.

O grupo bernardo_pagina reúne o conteúdo existente de fundo. Sua propriedade inert recebe true ao abrir e false ao fechar. Enquanto estiver true, seus controles não recebem foco nem interação normal. O modal fica fora desse grupo, e o foco vai para “Fechar detalhes”. Após fechar e reativar o fundo, focus() devolve a navegação ao botão de origem. Não há um gerenciador próprio de eventos de teclado.

role="dialog" identifica a caixa como diálogo; aria-modal indica sua modalidade. aria-labelledby e aria-describedby apontam aos IDs do título e da mensagem para nomear e descrever a janela nas tecnologias assistivas. A marcação não substitui os testes manuais com leitor de tela, ainda pendentes.

O fundo usa position: fixed e inset: 0, como a camada do exemplo. A caixa usa width: min(100%, 520px) e max-height: 80vh: vh representa uma fração da altura da janela. overflow-y: auto permite rolar quando o texto for maior que o limite. Temas claro/escuro têm fundos e textos próprios; os nomes dos artistas mantêm sua grafia original no título.

### Três perguntas de defesa

1. Como os parâmetros titulo e mensagem permitem reutilizar uma única estrutura para nove artistas? Por que usar innerText?
2. Qual classe mostra a janela e como classList.add()/remove() se relacionam às duas regras de display do CSS?
3. Para que servem bernardo_focoAnterior e inert? O que acontece com o foco ao abrir e fechar?

### Pequeno exercício para fazer sozinho

Acrescente “Conteúdo demonstrativo.” ao final da mensagem enviada pelo botão de AniRap, nas duas versões. Preserve nome, função e quantidade de argumentos. Abra AniRap, feche e abra outro artista: confira que só a mensagem de AniRap mudou e que a mesma janela continua sendo usada.

### Testes e prática pendente

O assistente realizou 72 ciclos pelos nove cards nas duas versões, em 1440/390px e nos dois temas, verificando abertura, conteúdo, fechamento por Enter, foco e bloqueio do fundo. Também testou oito casos de substituição/rolagem com mensagem longa e 40 casos de preservação de abas, slide, cores e tema. Quatro capturas foram inspecionadas, e o contraste texto/fundo da caixa foi pelo menos aproximadamente 13,50:1. Não houve exceções JavaScript na execução final.

A revisão manual desta janela pelo aluno, outros navegadores, leitores de tela, zoom e dispositivo físico continuam pendentes. O fechamento disponível é o botão “Fechar detalhes”; não foram implementados Escape ou clique na máscara. Não implemente validação nesta etapa.

### Revisão de AniRap e origem dos recursos de foco

No encerramento, “Conteúdo demonstrativo” havia sido acrescentado como parágrafo nos dois cards. No onclick de apresentação, havia também um terceiro argumento; em estudo, o onclick ainda recebia apenas a mensagem antiga. Como bernardo_abrirModal(titulo, mensagem) recebe e usa somente dois parâmetros, o terceiro argumento era ignorado. A correção preservou o parágrafo do aluno e acrescentou o texto, sem mudar suas palavras, ao final do segundo argumento nos dois HTML. Os outros oito artistas não receberam esse complemento.

Os trechos abaixo são do script.js real das duas versões. A referência de foco começa em null e recebe o controle ativo somente ao abrir uma janela que estava fechada:

```js
let bernardo_focoAnterior = null;

if (!modal.classList.contains("bernardo_modal_visivel")) {
  bernardo_focoAnterior = document.activeElement;
}
```

A condição impede que uma substituição de conteúdo com a janela já aberta troque a referência de origem pelo botão interno de fechamento. activeElement é o elemento que possui foco naquele momento; não é uma cópia do card nem um texto com seu ID.

Na abertura, após atualizar os textos, a classe mostra a janela, inert bloqueia o grupo de fundo e focus() entra no modal pelo botão de fechar:

```js
modal.classList.add("bernardo_modal_visivel");
document.getElementById("bernardo_pagina").inert = true;
document.getElementById("bernardo_fechar_modal").focus();
```

No fechamento, a classe é retirada, inert recebe false e o controle guardado recupera o foco. Aqui “remover inert” significa desativar a propriedade com false:

```js
document.getElementById("bernardo_modal").classList.remove("bernardo_modal_visivel");
document.getElementById("bernardo_pagina").inert = false;

if (bernardo_focoAnterior !== null) {
  bernardo_focoAnterior.focus();
}
```

No HTML, bernardo_pagina é fechado antes de começar bernardo_modal: são irmãos no body. Colocar o modal dentro do grupo inert bloquearia a própria janela e seu botão. A verificação no Chrome confirmou, durante as aberturas, que o modal não tem ancestral [inert].

**Origem nos materiais:** em referencias/lab dom/Laboratorio_DOM_Base/script.js, linhas 274 e 286, existe campoTarefa.focus(). No modal do professor, abrirModal(titulo, mensagem) usa innerText e style.display; não há controle de foco. A busca nos HTML, CSS e JavaScript fornecidos em referencias/ não encontrou document.activeElement nem inert. Esses dois recursos são complementos novos deste projeto, explicados antes da implementação. classList.add()/remove() vêm dos exemplos de abas. Não se deve atribuir o uso de activeElement/inert ao exemplo de modal do professor.

No encerramento, o assistente repetiu os 72 ciclos, oito testes de substituição/rolagem e 40 verificações de preservação, agora com a mensagem corrigida e a checagem do ancestral inert; todos passaram. Isso é automação no Chrome, não uma revisão manual do aluno. Não houve nova inspeção visual das capturas deste encerramento.
