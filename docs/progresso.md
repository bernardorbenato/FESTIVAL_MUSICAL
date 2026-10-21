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
