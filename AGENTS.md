# Geek Beats — orientação das sessões

## Contexto e escopo

- Projeto acadêmico de Front End de Bernardo Rodrigues Benato, estudante iniciante. Entrega e defesa oral: 26/10/2026, conforme pedido do aluno. Todo código deve ser compreensível e explicável por ele.
- Portal de festival fictício de música geek. Slogan: "A cultura geek ganha voz." Identidade futura: urbana, cartazes de shows, grafite e concreto.
- Atrações propostas: AniRap, M4rkim, oShaman, 7 Minutoz, BLXCK, Enygma, Daarui, Anny e Mistery. Manter os nove cards.
- Mostrar aviso de projeto acadêmico e programação fictícia. Nunca anunciar participações confirmadas. Não inventar biografias, músicas, números ou dados pessoais. Descrições sem fonte ficam pendentes e registradas em docs/progresso.md.
- A primeira etapa contempla somente HTML e conteúdo estático, com seis seções visíveis. Não iniciar CSS completo ou interações sem a próxima solicitação. Não apresentar funções pendentes como prontas.

## Inspeção e preservação

- Começar conferindo pasta aberta, alterações do Git, branch e remoto. Preservar arquivos e alterações existentes.
- Ler os materiais de referencias/ antes de implementar e informar falhas de leitura. Nunca alterar os originais.
- Comparar requisitos e exemplos e apresentar plano curto. Os exemplos orientam o nível do código; adaptar ao tema, sem copiar projetos inteiros.
- O enunciado tem datas e quantidades de interações contraditórias; seguir o escopo explícito do aluno e registrar divergências. Neste projeto: validação mais quatro funcionalidades escolhidas.
- Trabalhar por etapas, explicar escolhas, conferir resultados e parar antes de iniciar a próxima etapa.

## Organização

- estudo/: index.html, style.css, script.js e img/. Código com comentários explicativos.
- apresentacao/: os mesmos arquivos, código, nomes, imagens e comportamento; remover apenas comentários. Não minificar nem renomear elementos.
- referencias/: PDFs e dois projetos do professor, preservados.
- docs/: progresso, comparação com materiais, verificações e roteiro de defesa.
- AGENTS.md na raiz. Não criar pastas v1, v2 ou final para histórico.
- Caminhos relativos devem funcionar em cada versão, inclusive após compactar e abrir em outro computador.

## Limite técnico

- Usar apenas HTML, CSS e JavaScript puros. Sem frameworks, bibliotecas, backend, banco, npm, compilação, player de música, login ou pagamento.
- Seguir o nível e a escrita dos exemplos do professor. Priorizar function com parâmetros; const e let; onclick; getElementById() e querySelector(); classList.add(), remove(), toggle() e contains(); style e innerText; arrays, índices e length; value, trim(), Number(); if / else if / else; reset().
- Outros recursos somente quando necessários e sustentados pelos materiais. Explicar qualquer recurso novo antes de usá-lo.
- Recursos de inspeção fora do site não devem se tornar dependências do projeto.

## HTML

- Incluir Bernardo Rodrigues Benato no title e usar idioma pt-BR e UTF-8.
- header, nav, main e footer exatamente uma vez cada; section, article e aside pelo menos uma vez; pelo menos uma div.
- Menu em nav com ul, li e links; hierarquia coerente de títulos e parágrafos; banner, área principal e área lateral.
- Nove cards e galeria. Imagens reais JPG ou PNG locais em img/. Não usar imagens externas, arquivos falsos ou caminhos quebrados. Na ausência de imagens, usar espaços em texto e registrar a pendência.
- Tabela 7×5 semântica, com função na programação. Registrar interpretação: sete linhas totais (um cabeçalho + seis linhas de dados), cinco colunas, sem células mescladas. Distribuir nove artistas sem ampliar a tabela nem omitir nomes do portal.
- Formulário com fieldset, legend, labels ligados aos campos, inputs, checkbox, select e textarea.
- Classes e IDs com prefixo bernardo_; apenas container é uma exceção permitida.

## CSS — etapa futura

- style.css externo como forma principal. Seletores de tag, classe, ID, agrupado e encadeado.
- CSS interno aplicado a pelo menos três elementos e inline em pelo menos duas situações.
- Um Grid de colunas iguais com repeat() e fr; outro Grid com proporções diferentes. Layout para telas menores com recursos simples.

## JavaScript — etapa futura

- Cinco opções de cor (verde-lima, roxo, azul, vermelho e laranja) e botão de modo claro/escuro. Iniciar no escuro. A cor altera o fundo da página e deve permanecer ao alternar o tema; conferir legibilidade nas dez combinações. Esta quantidade substitui a orientação inicial de quatro cores.
- Seis abas: Festival, Atrações, Programação, Estrutura, Galeria e Inscrição. Somente uma visível e botão ativo destacado. Menu de links separado dos botões das abas.
- Carrossel com nove imagens locais, arrays de fotos e legendas, indicador, anterior/próximo e limites do índice controlados.
- Uma única estrutura de modal com conteúdo dinâmico. A função de abertura recebe título e mensagem como parâmetros.
- Validar pelo menos nome, idade, e-mail, cidade, preferência musical e mensagem. Usar value, trim(), Number(), if / else if / else, mensagens de erro/sucesso e reset() após sucesso.
- Incluir checkbox de ciência da demonstração. Nunca enviar nem armazenar dados. Enquanto não houver validação, deixar o formulário explicitamente indisponível, sem envio.

## Estudo e verificação

- Ao concluir uma etapa, listar arquivos alterados e explicar escolhas principais.
- Conferir IDs únicos, prefixos, labels, links e caminhos relativos, além dos requisitos da etapa.
- Conferir que estudo e apresentacao diferem apenas em comentários, inclusive CSS, JS e imagens.
- Atualizar docs/progresso.md com pronto, pendente, testes e limitações reais. Não afirmar teste de navegador se só houve inspeção estática.
- Apresentar três perguntas de defesa e uma pequena alteração para o aluno fazer sozinho.

## Git e encerramento

- Remoto conferido no GitHub nesta sessão: https://github.com/bernardorbenato/FESTIVAL_MUSICAL.git. Branch inicial: main. Conferir novamente antes de enviar.
- O ambiente de execução pode ter usuário Windows diferente do dono da pasta. Se ocorrer "dubious ownership", usar a opção temporária `git -c safe.directory=C:/Users/Barouzz/Desktop/FESTIVAL_MUSICAL ...`; não alterar configuração global apenas para isso.
- Usar commits para etapas coerentes; nunca apagar histórico ou usar push forçado; não incluir arquivos alheios ao projeto.
- Quando o aluno disser "encerrar sessão": conferir alterações, registrar progresso e testes, fazer commit com mensagem clara em português e push ao remoto conferido. Informar branch, identificador e resultado do envio. Se o push falhar, dizer explicitamente que o backup remoto não foi atualizado.
- Não fazer commit ou push nesta primeira etapa antes desse comando.
