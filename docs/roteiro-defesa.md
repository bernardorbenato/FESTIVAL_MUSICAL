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
