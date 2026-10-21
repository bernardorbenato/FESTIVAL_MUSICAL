# Progresso — Geek Beats

## Sessão de 20/10/2026 — somente HTML

Autor: Bernardo Rodrigues Benato. Entrega e defesa: 26/10/2026, conforme pedido do aluno. Etapa encerrada antes da implementação de CSS e JavaScript.

## Inspeção e Git

- Pasta conferida: `C:\Users\Barouzz\Desktop\FESTIVAL_MUSICAL`.
- Estado inicial: apenas `referencias/`, sem `.git`. Os comandos de status, branch e remoto inicialmente informaram que a pasta não era um repositório Git.
- O conector GitHub localizou `bernardorbenato/FESTIVAL_MUSICAL`, público, vazio, com branch padrão `main` e permissão de escrita do usuário.
- Repositório local inicializado em `main`, sem commits naquele momento. Remoto `origin`: `https://github.com/bernardorbenato/FESTIVAL_MUSICAL.git`.
- O ambiente tem usuário Windows diferente do dono da pasta. Foi usada a opção temporária `-c safe.directory=C:/Users/Barouzz/Desktop/FESTIVAL_MUSICAL`, sem mudar configuração global. A escrita do remoto em `.git/config` exigiu aprovação do ambiente e foi concluída após autorização.
- Ao concluir a implementação inicial, nenhum commit ou push havia sido feito. O aluno posteriormente solicitou “encerrar sessão” e autorizou o primeiro commit e push; ver o registro de encerramento abaixo.

## Materiais lidos e comparação

- `referencias/Trabalho_Pratico_Integrador_Front_End_26-10-2026_segunda.pdf`: requisitos de semântica, tabela 7×5, imagens locais, CSS, dois Grids e DOM.
- `referencias/Exercicios_Praticos_DOM_JavaScript.pdf`: exercícios e orientações de cores, formulários, validação, abas, accordion, modal, carrossel e lista dinâmica.
- `referencias/lab dom/Laboratorio_DOM_Base/`: lidos `index.html`, `style.css`, `script.js` e `LEIA-ME.txt`. Contém exemplos funcionais, separados e comentados. Fundamenta a escrita simples de funções com parâmetros e manipulação do DOM para etapas futuras.
- `referencias/dom atividade/Atividade_DOM_OnePage_Base/`: lidos os quatro arquivos. HTML organiza exercícios em seções, CSS prepara o layout e `script.js` está vazio. O LEIA-ME recomenda adaptar os exemplos, não copiar a solução inteira.
- Os PDFs foram lidos por extração de texto local, incluindo decodificação de fontes para trechos do PDF de exercícios. Não houve renderização visual dos PDFs. Python não estava disponível e foi usado Node já instalado, sem npm, instalação de pacotes ou dependências do site. Conteúdo textual necessário para esta etapa foi recuperado.

| Item | Material do professor | Decisão para Geek Beats |
| --- | --- | --- |
| Semântica e menu | Cabeçalho, navegação em lista, conteúdo principal, seções e rodapé | Adaptar ao festival; incluir nove artigos e aside, respeitando as contagens exigidas. |
| Cards | Enunciado pede pelo menos quatro | Nove, conforme pedido do aluno. |
| Abas | Laboratório demonstra três; exercício pede cinco; trabalho pede pelo menos seis | Planejar seis; nesta etapa todas as seções ficam visíveis. |
| Carrossel | Laboratório usa três imagens externas; exercício pede cinco; trabalho exige pelo menos oito | Planejar nove imagens locais; nenhuma URL externa nem imagem falsa. |
| Validação | Exemplos usam nome, idade e senhas | Adaptar futuramente aos seis campos pedidos, sem login, senha ou armazenamento. |
| Formulário | Exercício isolado pede também radios e botões de envio/limpeza | O trabalho admite radio **ou** checkbox. Seguir o aluno: checkbox de ciência e formulário desabilitado até a etapa JavaScript. |
| Quantidade de interações | Trabalho menciona três funcionalidades, mas também “escolha 4”; avaliação volta a falar em validação + duas | Seguir o escopo do aluno: validação + cores/tema + seis abas + modal + carrossel. Não acrescentar accordion nem lista de tarefas. |
| Prazo | Nome do PDF, topo e encerramento indicam 26/10; seção de organização menciona 30/10 | Adotar 26/10/2026 conforme pedido explícito. Registrar a inconsistência. |

## Plano curto e decisões

1. Preservar materiais e preparar Git e regras permanentes.
2. Montar HTML semântico com seis seções, nove cards, tabela, galeria reservada e formulário estático.
3. Gerar a apresentação retirando somente os comentários; conferir estrutura, referências e igualdade das versões.
4. Registrar o estudo e as pendências; aguardar a próxima etapa solicitada.

A tabela usa **sete linhas totais × cinco colunas**: uma linha em `thead` e seis em `tbody`. Não há células mescladas ou `tfoot` que alterem essa contagem. As colunas são Bloco, Palco Concreto, Palco Grafite, Momento e Observação. A abertura apresenta a proposta; quatro blocos distribuem oito artistas entre os palcos; o encerramento inclui Mistery. Os nove nomes aparecem na tabela e em cards próprios. Palcos, sequência e programação são fictícios, sem inventar dados biográficos ou horários reais. O enunciado não esclarece se o cabeçalho entra na contagem: esta é a interpretação adotada, sujeita a esclarecimento do professor.

`header` funciona como banner textual. `main` contém as seções e a área complementar `aside`; o posicionamento lateral depende do futuro CSS. `figure`/`figcaption`, `caption`/`scope` e `fieldset disabled` foram explicados antes da criação: agrupam imagens e legendas, dão significado à tabela e impedem o uso do formulário ainda incompleto. Os grupos desabilitados e o botão `type="button" disabled` mantêm a demonstração sem envio de dados.

## Pronto

- `AGENTS.md` com contexto, limites, organização, requisitos atuais e futuros, verificações e procedimento de encerramento.
- Duas versões com o mesmo conteúdo; estudo comentado e apresentação sem comentários.
- Documento pt-BR, UTF-8, viewport e nome completo no title; referências locais para CSS e JavaScript.
- Um header, nav, main e footer; seis sections, nove articles, um aside e divs.
- Menu com lista e âncoras, hierarquia h1/h2/h3, banner textual, conteúdo principal e área complementar.
- Nove artistas propostos, com descrições explicitamente pendentes.
- Tabela semântica 7×5 com os nove nomes e aviso de ficção.
- Galeria estática com nove espaços textuais, sem caminhos de imagens inexistentes.
- Formulário com dois fieldsets, legends, seis campos previstos para validação e checkbox de ciência; labels associados e uso explicitamente indisponível.
- Pastas `img/` reservadas com `.gitkeep` vazio; esse arquivo apenas permite versionar diretórios vazios e não é uma imagem.
- Roteiro de defesa com três perguntas, explicações e pequeno exercício autônomo.

## Pendente

- Obter imagens locais reais JPG/PNG para banner, cards e nove posições da galeria/carrossel. Registrar fontes e descrições corretas e duplicar os mesmos arquivos nas duas versões. A exigência de imagens e a galeria com fotos **ainda não estão atendidas**.
- Verificar fontes antes de descrever **AniRap, M4rkim, oShaman, 7 Minutoz, BLXCK, Enygma, Daarui, Anny e Mistery**. Os materiais da aula não contêm suas biografias. Não inventar músicas ou dados pessoais.
- CSS: identidade urbana, layout lateral, responsividade, seletores, CSS interno/inline e duas aplicações de Grid.
- JavaScript: cinco cores (verde-lima, roxo, azul, vermelho e laranja) e tema, seis abas e botões separados do menu, carrossel com nove fotos e limites, modal único dinâmico e validação de seis campos com mensagens e reset().
- Retirar os bloqueios do formulário somente ao implementar a validação sem envio ou armazenamento; definir regras didáticas dos campos sem apresentá-las como regras reais de um evento.
- Revisão visual e testes manuais no navegador, conforme roteiro. Nenhum teste visual foi realizado nesta sessão.
- Preparar arquivo compactado para entrega quando solicitado. O primeiro commit e push foram autorizados no encerramento registrado abaixo; o resultado do envio deve ser conferido no Git antes de considerar o backup remoto atualizado.

## Arquivos criados nesta etapa

- `AGENTS.md`.
- `estudo/index.html`, `estudo/style.css`, `estudo/script.js`, `estudo/img/.gitkeep`.
- `apresentacao/index.html`, `apresentacao/style.css`, `apresentacao/script.js`, `apresentacao/img/.gitkeep`.
- `docs/progresso.md` e `docs/roteiro-defesa.md`.
- Metadados Git locais em `.git/`, com branch inicial e remoto. Nenhum material de `referencias/` foi editado.

## Verificações

Validação estática executada com Node já instalado, sem bibliotecas, instalação de pacotes ou arquivos de teste incorporados ao site. Todas as verificações abaixo passaram nas duas versões:

- Um header, nav, main e footer; um aside e um formulário; seis seções, nove artigos, nove figures e um h1.
- Nome completo no title, IDs únicos e prefixos de classes/IDs corretos.
- Sete labels ligados aos sete controles correspondentes: os seis campos previstos e o checkbox de ciência.
- Âncoras com destino existente e arquivos CSS/JS relativos encontrados em cada versão. Nenhuma URL externa de recurso, imagem inexistente ou classe de ocultação aplicada.
- Tabela com sete linhas e cinco células em cada linha, cinco cabeçalhos de coluna e seis de linha; os nove artistas presentes na tabela e nos cards.
- Tags abertas e fechadas na ordem correspondente. Esta conferência estrutural não equivale a certificação por um validador HTML completo.
- Dois fieldsets desabilitados, botão desabilitado e sem tipo submit; nenhum evento JavaScript, CSS interno ou inline implementado.
- HTML, CSS e JavaScript de apresentação iguais aos de estudo após retirar apenas comentários, preservando inclusive o restante dos espaços e quebras de linha. Diretórios img/ com o mesmo `.gitkeep` vazio, sem imagens falsas.
- Os hashes SHA-256 dos dez arquivos originais de referencias/ continuam iguais aos calculados antes da implementação.
- Branch local `main`, sem commits; `origin` conferido novamente com os mesmos endereços de fetch e push.

Limitação: testes estáticos concluídos; revisão visual, navegação real e teclado no navegador permanecem pendentes. As próximas etapas não foram iniciadas.

## Encerramento solicitado em 20/10/2026

O aluno solicitou revisão de sua alteração, preservação literal do texto, primeiro commit da etapa HTML e push ao remoto já conferido. CSS e interações permanecem fora desta sessão.

### Revisão da alteração do aluno

O parágrafo `quero aprender mais sobre css e javascript` está nas duas versões, imediatamente após o título Festival, dentro de um elemento `p`. A alteração é válida para a estrutura HTML e expressa o objetivo de estudo pedido no exercício. O texto foi preservado exatamente como escrito, sem correções ou reescrita. Nenhum dos arquivos HTML foi editado durante esta revisão.

### Verificações realmente executadas no encerramento

- Conferidos pasta, estado do Git, branch `main` e remoto de fetch/push `https://github.com/bernardorbenato/FESTIVAL_MUSICAL.git`. Antes do primeiro commit, todos os arquivos do projeto estavam não rastreados e a branch ainda não tinha commits.
- Inventariados os arquivos: somente AGENTS.md, estudo/, apresentacao/, docs/ e referencias/ serão incluídos no primeiro commit. As referências fazem parte do material acadêmico do projeto.
- Confirmada a presença literal do novo parágrafo nas duas versões.
- Comparados integralmente `index.html`, `style.css` e `script.js`: retirando apenas os comentários da versão estudo, o restante é exatamente igual à apresentação, incluindo espaços e quebras de linha. As pastas img/ contêm apenas o mesmo `.gitkeep` vazio.
- Reexecutadas verificações estáticas com Node, sem instalar ferramentas: contagem dos elementos semânticos, seis seções, nove cards e nove espaços da galeria, um h1, fechamento das tags, IDs únicos, prefixos, labels ligados aos sete controles, âncoras com destino e arquivos relativos existentes.
- Reconfirmada a tabela com sete linhas e cinco células por linha e os nove artistas presentes tanto na programação quanto nos cards.
- Conferidos os dois fieldsets desabilitados, botão desabilitado do tipo button e ausência de botão submit, eventos JavaScript, ocultação de seções e CSS interno/inline. Não houve avanço para CSS ou interações.
- Todas essas verificações passaram. A comparação SHA-256 das referências registrada anteriormente foi feita na implementação inicial; não foi repetida neste encerramento. Nenhum arquivo de referencias/ foi editado por esta revisão.

### Verificações e recursos ainda pendentes

- Revisão visual no navegador, cliques reais nos links, uso de teclado/Enter no formulário e inspeção do Console. Nenhum desses testes foi executado nesta sessão.
- Validação por ferramenta completa de conformidade HTML; a inspeção estrutural local não substitui essa validação.
- Imagens locais reais, descrições verificadas das atrações, estilização e interações das próximas etapas.
- O resultado do commit e push será informado ao aluno após a execução e conferência do Git. Este registro foi preparado antes do primeiro commit para fazer parte dele; não declara sucesso antecipado de envio.

## Etapa CSS — 20/10/2026

Esta seção atualiza o estado do projeto; os registros acima descrevem a etapa HTML e suas pendências naquele momento. O aluno autorizou somente CSS, sem commit, push ou implementação de interações.

### Inspeção e referências

- Lidos AGENTS.md, este progresso, roteiro de defesa e arquivos atuais. Conferidos branch `main`, último commit `7a147df`, remoto `origin` e árvore de trabalho inicialmente limpa. A branch apresentava acompanhamento local de `origin/main`; não houve fetch, push ou nova verificação de autenticação nesta etapa.
- Consultados novamente o enunciado PDF (extração textual das partes de CSS e Grid) e os dois arquivos style.css do professor. Os exemplos sustentam seletores, bordas, tipografia do sistema, foco, Flexbox no menu e media queries com max-width. O enunciado fornece repeat() e fr e exige duas distribuições de Grid.
- Antes da implementação, explicados os dois Grids e o complemento para a tabela: overflow-x: auto cria rolagem horizontal apenas na caixa quando necessário; tabindex="0" permite focar essa caixa pelo teclado. min-width: 0 evita que o conteúdo largo force a expansão de uma coluna do Grid. Esses complementos estão comentados no código de estudo e no roteiro.

### Implementado e conferido com o enunciado

| Requisito | Aplicação nesta etapa |
| --- | --- |
| CSS externo predominante | style.css concentra cores, tipografia, caixas, menu, cards, tabela, formulário, Grids e responsividade. |
| Seletor de tag | body, h1, p, fieldset e outros. |
| Seletor de classe | .bernardo_secao e .bernardo_card, entre outros. |
| Seletor de ID | #bernardo_lateral e #bernardo_tabela. |
| Seletor agrupado | h1, h2, h3 e outros grupos separados por vírgula. |
| Seletor encadeado | .bernardo_banner h1, .bernardo_menu a e .bernardo_card h3. |
| CSS interno em pelo menos três elementos | Bloco style no head aplicado ao primeiro parágrafo do banner, slogan e aviso acadêmico, por suas classes bernardo_. |
| CSS inline em duas situações | font-style: italic no h2 Festival e font-weight: 700 no primeiro parágrafo do rodapé. |
| Grid de colunas iguais | .bernardo_cards com repeat(3, 1fr) para os nove artistas; a galeria estática reutiliza a regra. |
| Grid com proporções diferentes | .bernardo_layout com 3fr 1fr para conteúdo e aside. |
| Telas menores | Até 1000 px: conteúdo/aside em uma coluna e cards/galeria em duas. Até 600 px: cards/galeria em uma coluna e ajustes de títulos e preenchimentos. |
| Prefixos | Classes e IDs novos continuam com bernardo_. |

Identidade aplicada: fundo #141617, painéis #202426, texto #f0f1e9 e verde-lima #c5f35b. Fontes Arial/Helvetica e Impact/Arial Black, disponíveis no sistema com alternativas sans-serif. Títulos e bordas lembram cartazes; não há efeitos animados, recursos externos ou dependências.

O HTML recebeu apenas classes para os três alvos do CSS interno, duas aplicações inline, uma caixa focável para a tabela e atualização de comentários. A comparação do texto com o commit anterior confirmou preservação integral do conteúdo, inclusive `quero aprender mais sobre css e javascript`. Não foram acrescentadas descrições dos artistas nem imagens falsas. Seis seções visíveis, galeria estática e formulário desabilitado foram preservados. Ambos os script.js e todos os materiais de referencias/ permanecem sem alterações.

### Verificações realmente realizadas

- Comparação integral das versões: HTML, CSS e JavaScript iguais após retirar apenas os comentários explicativos de estudo. Espaços e quebras restantes também iguais. As pastas img/ continuam com os mesmos arquivos vazios .gitkeep.
- Conferências estáticas: texto preservado em relação ao commit HTML; três alvos distintos para CSS interno e dois atributos style; IDs únicos e prefixados; destinos dos labels e links existentes; dois fieldsets desabilitados; regras dos Grids e media queries presentes; scripts e referências sem diferenças no Git.
- Cálculo local de contraste das combinações principais: texto/fundo 15,96:1; texto/painel 13,76:1; verde/painel 12,18:1; texto secundário/área reservada 9,40:1; texto escuro/verde da tabela 14,13:1. Todas superam 4,5:1. Isso não equivale a uma auditoria completa de acessibilidade.
- Chrome local em modo sem janela, aberto diretamente nos arquivos: estudo em 1440, 1024, 768, 390 e 320 px; apresentação em 1440 e 390 px. Sem npm, bibliotecas ou servidor de desenvolvimento. A execução restrita do Chrome encerrou antes de concluir; a verificação foi concluída fora do sandbox com autorização do ambiente.
- Confirmados por estilos calculados: três colunas em 1440/1024 px, duas em 768 px, uma em 390/320 px; Grid externo com proporção 3:1 no desktop e uma coluna nas telas menores. Nenhuma rolagem horizontal da página nessas larguras.
- Em 390/320 px, a tabela mantém 640 px de largura dentro de uma caixa que rola horizontalmente, sem alargar o documento. Todas as seis seções têm altura e continuam visíveis; todos os campos e o botão continuam desabilitados.
- No navegador, confirmados carregamento das duas folhas de estilo (externa e interna), duas aplicações inline, cores calculadas e contorno de foco sólido de 3 px em um link focado por automação. Nenhuma exceção JavaScript capturada durante a verificação final.
- Capturas do topo e dos cards em 1440 e 390 px foram abertas e inspecionadas visualmente. Capturas e rotina auxiliar ficaram na pasta temporária do sistema; não são dependências nem arquivos do projeto.

### Pendente após o CSS

- Testes manuais com Tab e teclado na área rolável, cliques reais em todos os links, zoom de 200%, outros navegadores e celular físico. As larguras menores foram simuladas no Chrome desktop, sem emular dispositivo móvel completo.
- Revisão visual detalhada de tabela, galeria, formulário e rodapé; nesta etapa as capturas inspecionadas foram do topo e dos cards, embora as medições tenham percorrido as seis seções.
- Imagens locais reais, fontes verificadas para descrições dos artistas, validação HTML completa e interações JavaScript futuras.
- Nenhum commit ou push da etapa CSS. A próxima etapa depende de nova solicitação do aluno.

### Arquivos alterados nesta etapa

- estudo/index.html e estudo/style.css.
- apresentacao/index.html e apresentacao/style.css.
- docs/progresso.md e docs/roteiro-defesa.md.

## Registro para commit da etapa CSS — 21/10/2026

- O aluno autorizou o commit da versão atual e o envio ao repositório já configurado, `bernardorbenato/FESTIVAL_MUSICAL`, na branch `main`.
- Conferidos estado do Git, último commit e endereços de fetch/push de origin. Apenas os seis arquivos da etapa CSS estão alterados; scripts e referências não foram modificados.
- O exercício de espaçamento foi realizado: gap dos cards e da galeria em 20px nas duas versões. O valor foi preservado. Foram sincronizadas somente linhas em branco do CSS de apresentação para restabelecer igualdade exata ao retirar os comentários da versão estudo, normalizando apenas CRLF/LF na conferência.
- Reexecutadas verificações estáticas de igualdade entre as versões, gap de 20px, dois Grids, seis seções, nove cards, formulário desabilitado, IDs únicos, labels, âncoras, arquivos relativos e preservação do parágrafo do aluno. Todas passaram.
- Não foram repetidos os testes no Chrome nesta solicitação de commit. As medições e capturas da etapa anterior correspondem ao gap de 16px; o ajuste para 20px foi conferido estaticamente. As verificações manuais pendentes listadas acima continuam pendentes.
- Nenhuma interação JavaScript foi implementada. Este registro é preparado antes do commit; o identificador e o resultado real do push serão informados após a execução e conferência do Git.

## Encerramento da etapa CSS — 21/10/2026

- Bernardo informou que realizou a revisão manual no navegador. A autoria dessa revisão é do aluno; ela não foi executada pelo assistente neste encerramento. Como os testes específicos não foram detalhados, este registro não presume resultados individuais de teclado, zoom, outros navegadores ou dispositivo físico.
- Reconfirmado `gap: 20px` na regra compartilhada dos cards e da galeria em estudo/style.css e apresentacao/style.css.
- Comparados todos os arquivos de estudo/ e apresentacao/: mesma lista de arquivos; HTML, CSS e JavaScript iguais após retirar somente comentários da versão estudo, normalizando CRLF/LF na comparação; demais arquivos idênticos. Nenhum código de interação foi adicionado.
- As verificações deste encerramento foram estáticas. Não houve nova execução do Chrome pelo assistente; os testes automatizados anteriores permanecem identificados no histórico.
- A inspeção inicial encontrou árvore de trabalho limpa na branch `main`: os estilos já estavam registrados no commit `bd59fd1`. Para preservar o histórico, o novo commit de encerramento inclui somente as atualizações de docs/progresso.md e docs/roteiro-defesa.md, com a mensagem solicitada: "Adiciona identidade visual urbana e layouts responsivos do Geek Beats".
- O aluno reservou o push para execução manual. Nenhum push será feito pelo assistente neste encerramento. A conferência do diff precede o commit; seu identificador será informado após a criação.
- Continuam pendentes imagens locais reais, descrições verificadas dos artistas e validação HTML completa. As interações JavaScript dependem de uma próxima etapa autorizada. Testes específicos não detalhados na revisão manual do aluno continuam sem resultado registrado.

## Personalização visual — 21/10/2026

Esta etapa implementa somente cinco opções de cor e a alternância claro/escuro. A correção do aluno substitui a quantidade inicialmente solicitada: agora são **verde-lima, roxo, azul, vermelho e laranja**, além do botão de tema. AGENTS.md e a lista de requisitos deste documento foram atualizados. Não houve commit nem push.

### Preparação e escolha da área

- Lidos AGENTS.md, progresso, roteiro, HTML/CSS/JavaScript atuais e o exemplo de troca de cores e tema do Laboratorio_DOM_Base, incluindo seu CSS. Conferidos pasta, branch `main`, remoto origin e árvore de trabalho inicialmente limpa, um commit à frente do acompanhamento local de origin/main. Essa diferença foi preservada; não houve operações de sincronização do Git.
- Consultado novamente o enunciado PDF: ele exige no mínimo quatro opções e botão de tema, mas não determina qual região deve receber a cor. As cinco opções do aluno atendem ao mínimo. Nenhum material de referencias/ foi alterado.
- O fundo do body, visível ao redor e entre os blocos de conteúdo, recebe a cor. Cabeçalho, menu, seções, cards, avisos, formulário e rodapé mantêm fundos próprios para garantir leitura. A área afetada é explicada na interface.
- As cores dos botões são #c5f35b, #b994ed, #9ecbff, #ff8c91 e #ffb56b. O Azul era #79b8ff na implementação inicial e foi alterado pelo aluno para #9ecbff no encerramento. Elas não substituem os destaques de títulos e bordas. O estado inicial continua escuro, com o fundo grafite original até a primeira escolha de cor.

### Implementação e fluxo

- Clique num botão de cor → onclick chama bernardo_trocarCor(cor) → o parâmetro recebe o hexadecimal do botão → document.body.style.backgroundColor aplica a cor ao fundo da página.
- Clique no botão de tema → onclick chama bernardo_alternarTema() → classList.toggle("bernardo_claro") adiciona ou remove a classe do body → as regras CSS dos descendentes mudam os painéis e textos.
- getElementById() localiza o botão; if/else com classList.contains() atualiza innerText: “Ativar modo escuro” quando o modo claro está ativo, ou “Ativar modo claro” quando o escuro está ativo.
- Diferente da limpeza de backgroundColor usada no exemplo do professor, a função de tema não modifica essa propriedade. A cor e o tema são escolhas independentes e a cor é mantida nos dois sentidos da alternância. Não há armazenamento; recarregar a página volta ao estado inicial.
- Os seis novos botões usam type="button" e ficam em uma div dentro do aside, fora do menu de links. Não há nova section, abas, carrossel, modal ou validação.
- CSS simples organizado com seletores como body.bernardo_claro .bernardo_secao, conforme o padrão do professor. Sem !important, bibliotecas, variáveis CSS, dependências ou recursos JavaScript adicionais.
- Permanecem os seletores exigidos, CSS interno em três elementos, duas situações inline, dois Grids, gap de 20px nos cards/galeria, seis seções visíveis, placeholders textuais e formulário desabilitado. A mensagem introdutória foi atualizada para descrever corretamente o que já funciona.

### Verificações realizadas pelo assistente nesta etapa

- Comparação final de HTML, CSS e JavaScript das duas versões passou: iguais após retirar apenas comentários e normalizar CRLF/LF. Conferidos cinco botões de cor e um de tema com type="button", IDs únicos e prefixados, labels e âncoras, caminhos locais, contagens semânticas, tabela 7×5, duas aplicações inline e preservação do parágrafo do aluno. As pastas img/ continuam apenas com .gitkeep. Não há !important no CSS.
- Chrome local sem janela: as dez combinações de cinco cores × dois temas foram exercitadas em estudo e apresentacao, nas larguras 1440, 390 e 320 px, totalizando 60 casos. Os cliques foram acionados por automação nos botões reais da página e executaram seus onclick.
- Em cada caso, conferidos cor aplicada e hexadecimal esperado, classe do tema, texto exato do botão e preservação da cor após duas alternâncias consecutivas. O início no escuro também foi conferido a cada abertura da página.
- Conferidas as seis seções visíveis, formulário ainda desabilitado, gap de 20px, ausência de rolagem horizontal da página e contorno de foco de 3px em botão focado por automação.
- Calculado contraste a partir das cores computadas no Chrome e do fundo efetivo dos títulos, parágrafos, links, botões, legends, labels, células e legendas da galeria. Nenhuma razão abaixo de 4,5:1; mínimo observado aproximadamente 8,29:1 nas 60 verificações. Essa medição não equivale a uma auditoria completa de acessibilidade e não abrange todos os estados hover ou tecnologias assistivas.
- Nenhuma exceção JavaScript capturada na execução final. Capturas do conteúdo e dos controles em verde-lima/escuro e laranja/claro no desktop e laranja/claro em celular simulado foram abertas e inspecionadas pelo assistente.
- A tentativa restrita do Chrome não concluiu; os testes foram realizados fora do sandbox com autorização do ambiente. Rotina e resultados ficaram em arquivos temporários do sistema, sem entrar no projeto e sem instalar pacotes.
- A revisão manual anterior no navegador continua atribuída a Bernardo. Ela não é apresentada como teste novo do assistente nem como validação manual desta funcionalidade.

### Pendente e próximos limites

- Revisão manual desta funcionalidade pelo aluno, navegação completa com teclado, testes com zoom, outros navegadores e celular físico. As larguras menores foram simuladas no Chrome desktop.
- Imagens locais reais, descrições verificadas dos artistas e validador HTML completo continuam pendentes.
- Abas, carrossel, modal e validação permanecem sem implementação. Não avançar automaticamente para eles.

### Arquivos alterados

- AGENTS.md; estudo/index.html, estudo/style.css e estudo/script.js; apresentacao/index.html, apresentacao/style.css e apresentacao/script.js; docs/progresso.md e docs/roteiro-defesa.md.

## Encerramento da personalização — 21/10/2026

- Conferidos Git e remoto; branch `main` com o commit anterior ainda à frente do acompanhamento local de origin/main. A alteração do Azul para #9ecbff foi encontrada e preservada nas duas versões.
- O HTML de apresentação havia sido reformatado pelo editor. Uma comparação dos 598 tokens de elementos, atributos e textos, normalizando espaços, fechamento de tags vazias, capitalização do doctype e ponto e vírgula final inline, confirmou equivalência de conteúdo. Essa formatação foi preservada e aplicada ao HTML de estudo, com seus comentários explicativos recolocados.
- Comparados todos os arquivos de estudo/ e apresentacao/: mesma lista; HTML, CSS e JavaScript iguais após retirar apenas comentários da versão estudo e normalizar CRLF/LF; demais arquivos idênticos. Azul #9ecbff confirmado nos dois onclick.
- **Testes do assistente neste encerramento:** repetidos no Chrome sem janela os 60 casos de cinco cores × dois temas × duas versões × três larguras (1440, 390 e 320 px), agora com o Azul #9ecbff. Conferidos cor esperada, alternância, texto do botão, preservação da cor nos dois sentidos, início escuro, seis seções visíveis, formulário desabilitado, gap de 20px, foco e ausência de rolagem horizontal da página. Todos passaram; mínimo de contraste medido nos textos verificados de aproximadamente 8,29:1, sem exceções JavaScript capturadas. Não houve nova inspeção visual das capturas neste encerramento.
- A primeira tentativa de teste encontrou um bloqueio temporário no arquivo de inicialização do Chrome; a rotina auxiliar foi ajustada para aguardar sua gravação e a repetição passou. Apenas arquivos temporários foram usados, sem dependências no projeto.
- **Revisão manual do aluno:** a revisão manual informada é atribuída a Bernardo, não ao assistente. Não foram especificados resultados individuais de teclado, zoom, outros navegadores ou celular físico; os testes automatizados acima não são apresentados como revisão manual.
- Diff revisado antes do commit. Escopo limitado aos nove arquivos da personalização: AGENTS.md, os seis arquivos HTML/CSS/JS das versões e os dois documentos. Materiais de referencias/ e imagens não foram alterados. Nenhuma aba, carrossel, modal ou validação foi implementada.
- Commit autorizado com a mensagem "Adiciona cinco cores e alternância de tema ao Geek Beats". Este registro é preparado antes da criação; o identificador será informado após a conferência final. O push será feito manualmente pelo aluno e não será executado pelo assistente.

## Sistema de abas — 21/10/2026

Esta etapa implementa somente as seis abas. Os registros anteriores de seis seções simultaneamente visíveis descrevem as etapas anteriores: agora **apenas Festival começa visível e selecionado**. Não houve commit ou push.

### Preparação e implementação

- Lidos AGENTS.md, progresso, HTML/CSS/JavaScript atuais e o exemplo de abas do professor em Laboratorio_DOM_Base (HTML, CSS e funções de limpeza/abertura). Conferidos branch `main`, remoto origin e alterações existentes. Havia apenas remoção de linhas em branco em apresentacao/index.html; nenhum texto ou comportamento dessa alteração foi descartado ao sincronizar as versões.
- Mantidos os seis IDs das seções: bernardo_festival, bernardo_atracoes, bernardo_programacao, bernardo_estrutura, bernardo_galeria e bernardo_inscricao. Criados seis botões type="button" em uma div acima do Grid principal, separados do único nav com links.
- bernardo_limparAbas() remove bernardo_exibida das seis seções e bernardo_ativo dos seis botões, com chamadas explícitas como no exemplo de aula. bernardo_mostrarAba(nome) chama a limpeza, localiza a seção por "bernardo_" + nome e o botão por "bernardo_botao_" + nome e adiciona as respectivas classes.
- O parâmetro nome recebe um sufixo como 'festival' ou 'galeria'. Não foram introduzidos loops, listeners ou estruturas novas para realizar essa navegação.
- O CSS oculta .bernardo_secao e exibe .bernardo_secao.bernardo_exibida. O HTML marca Festival como exibido e seu botão como ativo desde o início, sem depender de uma função de inicialização.
- Nos seis links do menu, onclick abre a aba correspondente antes da navegação padrão do href até o ID. Os links continuam sendo âncoras reais; a função não impede a navegação.
- Botões com Flexbox, flex-wrap e espaçamentos simples para caber em telas pequenas. Fundo neutro, aba ativa em verde-lima e texto escuro nos dois temas; contorno de foco de 3px preservado, distinto do destaque ativo.
- O aside e seus controles de personalização permanecem fora das seções ocultáveis. As funções de abas não modificam a cor inline nem a classe de tema do body.
- Preservados os dois Grids, gap de 20px, nove cards, nove espaços da galeria, tabela 7×5, avisos acadêmicos, Azul #9ecbff, CSS interno/inline e formulário desabilitado. Atualizada apenas a mensagem de funcionamento das seções; nenhum dado de artista foi acrescentado.

### Verificações efetivamente realizadas pelo assistente

- Comparação de todos os arquivos de estudo/ e apresentacao/: mesma lista; HTML, CSS e JavaScript iguais ao retirar apenas comentários de estudo e normalizar CRLF/LF; demais arquivos idênticos.
- Verificação estática de IDs únicos e prefixos, correspondência dos seis pares de botão/seção, onclick dos links, type="button", destinos de labels e âncoras, caminhos locais e contagens dos elementos semânticos. Conferidos cards, galeria, tabela 7×5, dois fieldsets desabilitados, duas aplicações inline, texto do aluno e Azul #9ecbff. Materiais de referencias/ sem alterações.
- Chrome local sem janela nas duas versões, em 1440 e 390 px. Inicialmente uma única seção visível (Festival) e um único botão ativo. Para cada uma das dez combinações de cor e tema, acionados os seis botões e os seis links do menu: 40 estados de personalização e **480 acionamentos** no total.
- Após cada acionamento, conferidos exatamente um conteúdo visível e um botão ativo, correspondência com a seção solicitada, diferença de fundo entre ativo/inativo e preservação de cor e tema. Nos links, conferido também o hash de destino após a abertura da seção.
- Conferidos botões dentro da largura da tela, sem rolagem horizontal da página, foco de 3px, formulário ainda desabilitado e gap de 20px em todos os estados testados. Os estilos dos Grids existentes foram mantidos.
- Teclado via automação do Chrome: Tab percorreu os seis botões na ordem e Enter abriu cada aba, nas duas versões e duas larguras, totalizando **24 ativações por teclado**. A primeira execução da rotina não enviava o caractere completo de Enter; a rotina temporária foi corrigida e a execução final passou sem alteração no código do site.
- Nenhuma exceção JavaScript capturada na execução final. Capturas da aba Atrações com os seis botões em desktop e 390 px foram abertas e inspecionadas pelo assistente. Os botões quebram em duas linhas a 390 px; o foco pode estar em um botão diferente do ativo, como esperado para navegação por teclado.
- Testes feitos fora do sandbox com autorização do ambiente, sem instalar pacotes. Rotina, resultados e capturas ficaram apenas na pasta temporária do sistema.
- A revisão manual anterior continua atribuída a Bernardo. Estes resultados são testes automatizados e inspeção de capturas pelo assistente; não constituem revisão manual completa do aluno nesta nova etapa.

### Pendente e limites

- Revisão manual das abas pelo aluno; outros navegadores, leitor de tela, zoom e dispositivo físico. A largura de 390 px foi simulada no Chrome desktop.
- Não foi implementada sincronização das abas com o histórico Voltar/Avançar ou com hashes digitados diretamente na URL. O comportamento desta etapa cobre os botões e os links do menu por onclick; toda abertura da página começa em Festival.
- Imagens locais reais, descrições verificadas e validação HTML completa continuam pendentes. Carrossel, modal e validação do formulário não foram implementados.
- Parar nesta funcionalidade. Commit e push somente após nova autorização.

### Arquivos alterados

- estudo/index.html, estudo/style.css e estudo/script.js.
- apresentacao/index.html, apresentacao/style.css e apresentacao/script.js.
- docs/progresso.md e docs/roteiro-defesa.md.

## Encerramento das abas — 21/10/2026

- Bernardo solicitou o encerramento com commit local e push manual. Conferidos branch `main`, remoto origin e diff dos oito arquivos desta etapa. Não houve avanço para outra funcionalidade.
- A alteração do aluno está no título h2 da seção Festival: “Sobre o Festival”, igualmente nos dois HTML. O botão permanece com o texto “Festival”; seu ID bernardo_botao_festival e o argumento 'festival' permanecem intactos, assim como o ID bernardo_festival da seção. Foi preservada também a inicial maiúscula em “Quero aprender mais sobre css e javascript”. Nenhum desses textos foi reescrito neste encerramento.
- **Conferências do assistente neste encerramento:** comparação de todos os arquivos das versões, IDs únicos, seis seções, links com os argumentos corretos, Festival marcado como exibido/ativo e formulário ainda desabilitado. HTML, CSS e JavaScript diferem somente nos comentários, com CRLF/LF normalizados na comparação; demais arquivos idênticos. Todas essas verificações estáticas passaram.
- **Testes do assistente já realizados na implementação:** 480 acionamentos dos seis botões e seis links nas duas versões, em 1440 e 390 px, com as dez combinações de cor/tema; 24 ativações por Enter e percurso por Tab; estado único de seção/botão, personalização preservada e capturas inspecionadas. Esses testes são os registrados na seção “Sistema de abas”; não foram repetidos no encerramento após a alteração textual do aluno.
- **Revisão manual do aluno:** Bernardo informou sua revisão manual. A autoria dessa revisão é dele; ela não foi feita pelo assistente. Como os testes individuais não foram detalhados, não são presumidos resultados específicos de zoom, outros navegadores, leitor de tela ou celular físico.
- Continuam sem resultado registrado os testes específicos não detalhados acima. Permanecem pendentes imagens locais reais, descrições verificadas e validação HTML completa. Carrossel, modal e validação do formulário continuam fora desta etapa.
- Commit autorizado com a mensagem "Adiciona navegação por seis abas ao Geek Beats", limitado aos seis arquivos HTML/CSS/JS das versões e aos dois documentos. O identificador será informado após criar e conferir o commit. Nenhum push será feito pelo assistente.

## Carrossel da galeria — 21/10/2026

Esta etapa implementa somente o carrossel circular. Não houve commit, push, implementação de modal ou validação.

### Inspeção e arquivos de imagem

- Lidos AGENTS.md, progresso, código atual e exemplo de carrossel do professor (arrays de fotos/legendas, índice e atualização de src). Conferidos Git, branch `main` e remoto origin. As alterações existentes eram as nove imagens ainda não rastreadas em cada pasta; foram preservadas sem renomear ou modificar seus bytes.
- Todas as nove imagens estão presentes em estudo/img/ e apresentacao/img/, com conteúdo binário idêntico. Conferidas assinaturas JPEG/WebP e igualdade dos arquivos; as nove imagens de estudo foram abertas para inspeção visual. Nenhuma imagem faltando, externa, falsa ou gerada nesta etapa.

| Posição | Artista indicado pelo arquivo | Caminho relativo real |
| --- | --- | --- |
| 1 | AniRap | img/anirap.jpg |
| 2 | M4rkim | img/m4rkim.webp |
| 3 | oShaman | img/oshaman.webp |
| 4 | 7 Minutoz | img/7minutoz.webp |
| 5 | BLXCK | img/BLXCK.webp |
| 6 | Enygma | img/enygma.webp |
| 7 | Daarui | img/daarui.webp |
| 8 | Anny | img/anny.webp |
| 9 | Mistery | img/mistery.webp |

Há um JPG e oito WebP reais. O pedido desta etapa determina usar os nomes e extensões reais, e os arquivos foram mantidos assim. **A adequação integral ao formato JPG/PNG citado no enunciado continua pendente para os oito WebP**; não foram apenas trocadas extensões nem produzidas conversões sem solicitação. O JPG já existente é usado normalmente. Autoria, origem e associação das imagens aos artistas não foram verificadas externamente: a associação segue os nomes dos arquivos fornecidos pelo aluno. As legendas descrevem apenas o conteúdo visual observado, sem inventar biografias ou títulos de músicas.

### Implementação

- Galeria com uma única figure contendo img e figcaption, contador e dois botões type="button" com onclick: Anterior chama bernardo_mudarFoto(-1), Próximo chama bernardo_mudarFoto(1). Os nove espaços textuais da galeria foram substituídos pelo carrossel; os nove cards de atrações permanecem intactos.
- Dois arrays const, bernardo_fotos e bernardo_legendas, mantêm caminhos e descrições na mesma ordem. A variável let bernardo_indiceFoto começa em 0.
- bernardo_mudarFoto(direcao) soma -1 ou 1 ao índice. Se o índice atingir bernardo_fotos.length, retorna a 0; se ficar negativo, recebe length - 1. Não há número 9 fixado nessas condições nem botões desabilitados nos extremos.
- bernardo_atualizarCarrossel() atualiza src, alt, legenda e contador usando o mesmo índice. O alt recebe a descrição da legenda, incluindo a indicação de ilustração quando pertinente. O contador usa índice + 1 e length, começando em “1 de 9”. A função é chamada no fim do script para sincronizar a apresentação inicial com os arrays.
- CSS com width: 100%, altura de 360px no desktop e 260px até 600px, object-fit: contain e fundo de enquadramento. A proporção original é preservada, sem recortar a imagem ou esticá-la; sobras de espaço ficam preenchidas pelo fundo.
- Mantidos abas, cinco cores, tema, dois Grids, gap de 20px nos cards, tabela 7×5, aviso de programação fictícia e formulário desabilitado. Removidas apenas regras da antiga grade estática da galeria que deixaram de ser usadas. Avisos atualizados para refletir a existência das imagens e do carrossel.
- Sem autoplay, animações, transições, bibliotecas, armazenamento ou dependências.

### Verificações realizadas pelo assistente

- Chrome local sem janela nas duas versões, em 1440 e 390px. Em cada abertura, conferida a aba Festival inicial; depois, aberta Galeria e confirmado “1 de 9”.
- **76 observações de slides**: quatro estados iniciais e os estados após 72 cliques para percorrer nove passos para frente e nove para trás em cada versão/largura. Conferidos os nove slides, os dois sentidos e os retornos 9→1 e 1→9.
- Em cada observação, conferidos índice, caminho exato (inclusive BLXCK com maiúsculas), carregamento/decodificação da imagem com dimensões naturais válidas, artista da legenda, alt igual à legenda, contador, total e correspondência entre os dois arrays. Nenhum arquivo quebrado.
- Mais quatro verificações do último slide, antes dos testes de preservação: o índice 8 foi mantido ao sair da Galeria e voltar por link do menu. Nos **40 estados** das dez combinações de cor/tema × duas versões × duas larguras, conferidos preservação do slide/cor/tema, única seção visível e botão ativo, formulário desabilitado, foco de 3px e ausência de rolagem horizontal da página.
- Verificado object-fit: contain nas imagens e quadro dentro da largura da tela. Capturas da primeira imagem e dos controles em desktop e 390px foram abertas e inspecionadas pelo assistente na primeira execução. A repetição final reforçou a preservação do último slide; suas novas capturas não foram novamente inspecionadas.
- Nenhuma exceção JavaScript capturada na execução final. Rotina, resultados e capturas permaneceram na pasta temporária do sistema, sem dependências adicionadas ao projeto. Chrome executado fora do sandbox com autorização do ambiente.
- Comparação final de todos os arquivos: estudo/ e apresentacao/ têm a mesma lista; HTML/CSS/JavaScript iguais ao retirar apenas comentários de estudo e normalizar CRLF/LF; imagens idênticas byte a byte.
- Verificados também IDs únicos e prefixados, labels, links, caminhos reais, seis seções, nove cards, tabela 7×5, formulário desabilitado, duas aplicações inline e preservação dos textos “Sobre o Festival” e “Quero aprender mais sobre css e javascript”. Materiais de referencias/ sem alterações.

### Pendente

- Revisão manual deste carrossel pelo aluno, navegação completa pelo teclado, testes em outros navegadores, leitor de tela, zoom e celular físico. O foco foi testado por automação; a revisão manual anterior de Bernardo não é apresentada como revisão deste novo carrossel.
- Adequação dos oito WebP ao requisito literal JPG/PNG, caso exigida na entrega; verificação e documentação de fontes das imagens. Não há imagens faltando para o funcionamento atual do carrossel.
- Banner e imagens dos cards permanecem como espaços textuais; sua integração não faz parte desta etapa. Descrições biográficas e validação HTML completa continuam pendentes.
- Modal e validação do formulário continuam sem implementação. Parar no carrossel e aguardar nova solicitação.

### Arquivos desta etapa

- estudo/index.html, estudo/style.css e estudo/script.js; apresentacao/index.html, apresentacao/style.css e apresentacao/script.js; docs/progresso.md e docs/roteiro-defesa.md.
- Nove imagens fornecidas pelo aluno em cada pasta img/, já presentes no início e preservadas. Ainda não foram adicionadas ao índice do Git nem commitadas nesta etapa.

## Adequação das imagens para JPG/PNG — 21/10/2026

A pendência de formatos do carrossel foi resolvida. Os registros anteriores de uso de WebP descrevem o estado antes desta adequação; o site agora usa **um JPG e oito PNG reais**. Não houve commit ou push.

### Conversão real e preservação

- Conferidos AGENTS.md, progresso, estado do Git e remoto. Preservadas as alterações de código e as imagens ainda não rastreadas da etapa do carrossel.
- Não foram encontrados comandos magick, ffmpeg ou dwebp no PATH. Foi usado o Chrome já disponível, em modo sem janela, com rotina temporária fora do site: decodificação do WebP, desenho em canvas nas dimensões naturais e exportação real por toDataURL('image/png'). Nenhuma ferramenta ou dependência foi instalada no projeto.
- Cada PNG foi decodificado novamente e comparado ao quadro decodificado do WebP: mesmas dimensões e valores RGBA iguais pixel a pixel nos oito casos. A conversão não redimensionou as imagens, não mudou proporções e não acrescentou compressão com perda. Ela preserva a qualidade disponível no WebP original, sem recuperar detalhes já perdidos antes da conversão.
- Verificada a assinatura binária PNG, não apenas a extensão. O mesmo conteúdo gerado foi gravado em estudo/img/ e apresentacao/img/ e a igualdade SHA-256 das duas cópias foi conferida antes da remoção dos originais.
- anirap.jpg permaneceu intacto; seu SHA-256 continua igual ao registrado antes da conversão.

| Original substituído | PNG utilizado atualmente | Dimensões preservadas |
| --- | --- | --- |
| 7minutoz.webp | img/7minutoz.png | 250 × 250 |
| anny.webp | img/anny.png | 300 × 300 |
| BLXCK.webp | img/BLXCK.png | 860 × 860 |
| daarui.webp | img/daarui.png | 250 × 250 |
| enygma.webp | img/enygma.png | 250 × 250 |
| m4rkim.webp | img/m4rkim.png | 860 × 860 |
| mistery.webp | img/mistery.png | 300 × 300 |
| oshaman.webp | img/oshaman.png | 250 × 250 |

Os PNG ocupam mais espaço que os WebP originais, em troca da codificação sem perda adicional e da adequação ao formato exigido. Não houve simples troca de extensão.

### Caminhos, legenda e remoção dos WebP

- Atualizados os oito caminhos em ambos os arrays bernardo_fotos, preservando grafia e maiúsculas dos nomes, inclusive BLXCK.png. O caminho img/anirap.jpg não mudou. Busca no HTML, CSS e JavaScript das duas versões não encontrou referência a .webp.
- A alteração do aluno “AniRap — foto em um estúdio.” estava inicialmente no alt e figcaption do HTML de apresentação, enquanto os arrays ainda continham a descrição antiga. O texto fornecido foi preservado literalmente e sincronizado no HTML inicial, no alt e no primeiro item de bernardo_legendas das duas versões. Assim, a atualização inicial do JavaScript não volta à legenda antiga. A descrição é do aluno; a conversão não verifica o contexto ou a origem da fotografia.
- Preservada a formatação atual do HTML de apresentação e aplicados os mesmos elementos e textos ao HTML de estudo, mantendo seus comentários. A comparação por tokens antes da sincronização confirmou que a legenda era a diferença de conteúdo.
- Primeiro testado o carregamento dos nove slides pelos novos caminhos. Depois, conferidos todos os caminhos absolutos de remoção dentro do projeto, assinaturas PNG, igualdade das cópias e ausência de dependências WebP no site. Só então foram removidos os 16 WebP substituídos, oito em cada pasta, sem remoção recursiva.
- As referências a WebP nos documentos permanecem apenas como histórico da conversão. Nenhum arquivo do site depende delas; as pastas img/ agora contêm o JPG, os oito PNG e .gitkeep.

### Testes efetivamente realizados pelo assistente

- Conversão: oito verificações de dimensões e igualdade de pixels decodificados; oito verificações de assinatura PNG e igualdade de cópias. Nenhum dos oito PNG é um arquivo WebP renomeado.
- Chrome sem janela nas duas versões, em 1440 e 390px, antes e depois da remoção dos WebP. A execução final com os WebP ausentes passou: 76 observações dos nove slides e dos estados após 72 cliques para percorrer os dois sentidos, incluindo os retornos 9→1 e 1→9, mais quatro verificações do último slide.
- Em cada slide: caminho esperado JPG/PNG, carregamento e decodificação com dimensões naturais válidas, artista da legenda, alt igual à legenda, posição do contador e correspondência dos dois arrays. A primeira legenda foi comparada explicitamente ao texto novo do aluno em ambas as versões.
- Quarenta estados adicionais com as dez combinações de cor e tema, duas versões e duas larguras: slide preservado ao sair e voltar à Galeria, cor e tema preservados, uma aba e um botão ativos, formulário desabilitado, foco de 3px e página sem rolagem horizontal. Nenhuma exceção JavaScript capturada na execução final.
- Capturas finais do último slide em desktop e 390px foram abertas e inspecionadas pelo assistente. object-fit: contain e limites da largura foram conferidos por estilos computados.
- Comparação final de todos os arquivos: HTML/CSS/JavaScript iguais após retirar somente comentários e normalizar CRLF/LF; imagens idênticas byte a byte; mesmos arquivos nas duas pastas. Nove imagens em cada uma, oito PNG e um JPG; nenhuma imagem .webp restante. Caminhos válidos, IDs únicos e formulário desabilitado reconferidos.
- A revisão manual anterior continua atribuída ao aluno. Os testes acima foram executados pelo assistente por automação e inspeção de capturas; não representam uma nova revisão manual de Bernardo.

### Estado e pendências

- Adequação JPG/PNG do carrossel concluída. Continuam pendentes revisão manual atual pelo aluno, outros navegadores, teclado completo, zoom, leitor de tela, dispositivo físico, fontes/autoria das imagens e validação HTML completa.
- Modal e validação não foram implementados. Banner e cards continuam fora do escopo desta adequação.
- Alterados os dois HTML e os dois scripts, sincronizando a legenda e os caminhos; acrescentados oito PNG em cada pasta e removidos os oito WebP substituídos de cada uma. Atualizados progresso e roteiro de defesa. Os arquivos CSS não precisaram de alterações adicionais nesta adequação.

## Envio do carrossel ao GitHub — 21/10/2026

- O aluno autorizou commit e push da versão atual. Conferidos branch `main`, remoto `https://github.com/bernardorbenato/FESTIVAL_MUSICAL.git` e alterações limitadas ao carrossel, adequação das imagens e documentação.
- Reconfirmadas estaticamente a igualdade das versões apenas com diferenças de comentários, as nove imagens JPG/PNG idênticas e os caminhos válidos, sem dependência WebP. Os testes de navegador já realizados estão registrados acima e não foram repetidos nesta solicitação de envio.
- O commit inclui os seis arquivos HTML/CSS/JS das versões, os dois documentos e as nove imagens de cada versão. Não inclui alterações em referencias/, nem modal ou validação.
- Registro preparado antes do commit. Identificador e resultado efetivo do push serão informados após a execução e conferência do Git.

## Conferência local e do GitHub — 21/10/2026

- O aluno informou que uma revisão do GitHub encontrou apenas a etapa de abas e solicitou nova conferência, com commit local e push manual.
- Estado inicial: árvore de trabalho limpa, branch `main`. HEAD e a referência local origin/main apontavam para **b7a1da24d73fe7aea9ea34e84e4c4e71d1a7b666**, sem commits divergentes (0 à frente e 0 atrás).
- Consulta direta ao remoto por `git ls-remote --heads origin main` confirmou que refs/heads/main no GitHub também apontava para esse mesmo identificador. Não foi feito push nesta conferência.
- O commit **b7a1da2 — Adiciona carrossel circular com imagens locais em JPG e PNG** já registra os seis arquivos HTML/CSS/JS, os dois documentos e as 18 imagens (nove por versão). Seu anterior **9ab1630** corresponde à etapa de abas, sem o carrossel e as imagens. É possível que a revisão tenha usado o commit anterior; não foi possível confirmar a versão efetivamente usada pelo revisor.
- Referência para revisar a etapa correta: https://github.com/bernardorbenato/FESTIVAL_MUSICAL/commit/b7a1da24d73fe7aea9ea34e84e4c4e71d1a7b666 . As imagens estão em estudo/img/ e apresentacao/img/ nesse commit.

### Evidências novamente conferidas

- Nove imagens por pasta, oito PNG e um JPG, sem WebP restantes. Assinaturas binárias PNG/JPEG verificadas; os oito PNG são arquivos de fato codificados como PNG, não WebP com extensão trocada. Dimensões: 7minutoz, daarui, enygma e oshaman em 250×250; anny e mistery em 300×300; BLXCK e m4rkim em 860×860. A comparação pixel a pixel com os WebP foi feita na conversão já registrada; não foi repetida agora, pois os originais substituídos foram removidos conforme solicitado.
- Cada uma das 18 imagens locais foi comparada byte a byte com o blob já registrado em origin/main; todas iguais. A confirmação do identificador no remoto vincula esses arquivos à versão atualmente apontada por main no GitHub.
- Comparadas as duas versões completas: mesma lista de arquivos; HTML/CSS/JS iguais ao retirar somente comentários de estudo e normalizar CRLF/LF; imagens idênticas. Verificados os nove caminhos reais do array e ausência de dependência .webp no código do site.
- Primeira legenda “AniRap — foto em um estúdio.” sincronizada nos dois arrays, no alt e na legenda inicial dos dois HTML.
- Reexecutados no Chrome sem janela os testes em estudo e apresentacao, em 1440 e 390px: 76 observações dos nove slides e 72 cliques de percurso para frente/trás, incluindo os retornos 9→1 e 1→9, mais quatro verificações do último slide. Carregamento e decodificação, caminhos, alt, legenda, contador e object-fit passaram.
- Reexecutados os 40 estados de preservação de slide, cores e tema ao navegar pelas abas. Uma única seção/botão ativos, formulário desabilitado, foco de 3px e ausência de rolagem horizontal da página. Nenhuma exceção JavaScript capturada. Não houve nova inspeção visual de capturas nesta conferência.

### Registro em commit e pendências

- Como o carrossel e as 18 imagens já estão no commit b7a1da2, não foram recriados nem alterados para produzir um diff artificial. O novo commit solicitado registra esta conferência nos documentos e mantém todos os arquivos e imagens na árvore do projeto, herdados de b7a1da2.
- Somente docs/progresso.md e docs/roteiro-defesa.md foram editados nesta conferência. Sem arquivos alheios, alterações em referencias/, modal ou validação.
- O identificador do novo commit será informado após sua criação. O push ficará exclusivamente a cargo do aluno.
- Continuam pendentes revisão manual atual do aluno, outros navegadores, testes completos de teclado, zoom, leitor de tela, celular físico, fontes/autoria das imagens e validação HTML completa. A conversão JPG/PNG e os caminhos do carrossel estão concluídos.
