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
