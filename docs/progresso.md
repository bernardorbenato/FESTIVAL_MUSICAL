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
- JavaScript: quatro cores e tema, seis abas e botões separados do menu, carrossel com nove fotos e limites, modal único dinâmico e validação de seis campos com mensagens e reset().
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
