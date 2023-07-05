# Informações do Projeto
`DivideUai` 
> O DivideUai é um software que ajuda a resolver um dos maiores problemas financeiros de quem divide contas com amigos ou familiares: como fazer a matemática da divisão certinha e sem confusão. Com ele, é possível criar grupos, registrar todas as despesas e o sistema faz todo o trabalho pesado, dividindo tudo corretamente entre as pessoas. Além disso, o DivideUai também é útil para quem quer ter um controle dos gastos mensais. É uma ótima opção para evitar brigas com amigos por causa de dinheiro e manter as finanças em dia.
> 

`Engenharia de Software` 
>O trabalho interdisciplinar do curso de Engenharia de Software consiste em um projeto que envolve desde a documentação até o desenvolvimento e entrega de um software real. Os alunos são divididos em equipes e, com base em um problema real apresentado pelo professor, desenvolvem todo o processo de engenharia de software, desde a concepção da ideia até a implementação e entrega do produto final. Durante o processo, os alunos aplicam os conhecimentos de diversas disciplinas, como programação, gerenciamento de projetos, e design de interface, trabalhando de forma colaborativa e integrada. O resultado final é um software funcional e de qualidade, que atende às necessidades do cliente e demonstra a competência e habilidades adquiridas pelos alunos ao longo do curso.

## Participantes

> Os membros do grupo são: 
> - Arthur Ferreira Costa
> - Enrique Silva Leite
> - Érica Alves dos Santos
> - Pedro Arthur Oliveira Silva
> - Sthel Felipe Torres

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas, Empatia e Proposta de Valor](#personas-empatia-e-proposta-de-valor)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
  - [Hospedagem do Projeto](#hospedagem-projeto)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)

# Introdução

## Problema

> O problema que o projeto visa solucionar é a dificuldade de gerenciar os gastos em conjunto. Quando várias pessoas compartilham as mesmas despesas, é comum haver divergências sobre quem pagou o quê e quanto cada um deve pagar. Isso pode gerar conflitos e até mesmo prejudicar as relações interpessoais.

## Objetivos

> O objetivo do projeto é desenvolver uma plataforma online que facilite a divisão de gastos em grupo. A plataforma permitirá que os usuários cadastrem as despesas realizadas em conjunto, atribuindo-as às pessoas responsáveis por cada pagamento. A partir disso, a plataforma fará os cálculos necessários para que cada um saiba exatamente quanto deve pagar e a quem. 

## Justificativa

> A justificativa para a criação desse projeto é que ele pode ajudar a evitar conflitos e desentendimentos entre as pessoas que dividem as despesas. Além disso, a plataforma também pode auxiliar na organização e no controle financeiro, o que é importante tanto para quem viaja quanto para quem divide despesas em moradias compartilhadas ou em outros contextos

## Público-Alvo

> O público-alvo do projeto são pessoas de 16 anos a 40 anos que compartilham despesas, como grupos de amigos que viajam juntos, colegas de trabalho que dividem moradia temporária, familiares que dividem as despesas da casa, entre outros. 
 
# Especificações do Projeto

> Nesta parte do documento, serão abordados alguns conceitos e técnicas importantes para a especificação do projeto, como Persona, Empatia e Proposta de Valor.
> - A Persona é uma técnica de design centrado no usuário que consiste em criar uma personagem fictícia que representa um usuário típico do produto ou serviço em questão. Essa técnica ajuda a entender melhor as necessidades, desejos, comportamentos e características dos usuários, permitindo que o projeto seja desenvolvido de forma mais focada e eficaz.
> - A Empatia, por sua vez, é uma habilidade importante para o designer ter em mente durante todo o processo de criação. Ela consiste na capacidade de se colocar no lugar do usuário e entender seus sentimentos, pensamentos e motivações. Com a empatia, é possível criar soluções mais humanizadas e relevantes para os usuários.
> - Por fim, a Proposta de Valor é uma ferramenta que ajuda a definir a proposta única e diferenciada do produto ou serviço em relação aos seus concorrentes. Ela envolve identificar os benefícios que o produto ou serviço oferece para o usuário, além de destacar as características que o diferenciam das outras opções disponíveis no mercado.

## Personas, Empatia e Proposta de Valor
>
> ### Primeira Persona
> **Lucas, 22 anos, solteiro, mora com os amigos, cursando Direito.**
> ![Exemplo de Persona](images/persona-lucas.jpg)
> 
> **PROPOSTA DE VALOR**
> 
> **Um dos maiores problemas de Lucas é o desgate na hora da divisão e pagamento com membros do grupo.**
> ![Exemplo da Proposta de Valor](images/proposta-de-valor-lucas.jpg)
> ***
> ### Segunda Persona
> **Geraldo, 45 anos, casado, mora com os filhos e a esposa, trabalha como contador.**
> ![Exemplo de Persona](images/persona-geraldo.jpg)
> 
> **PROPOSTA DE VALOR**
> 
> **Um dos maiores problemas de Geraldo é a falta de organização e clareza na divisão de gastos com a esposa.**
> ![Exemplo da Proposta de Valor](images/proposta-de-valor-geraldo.jpg)
> ***
> ### Terceira Persona
> **Matheus, 25 anos, mora com a namorada, trabalha como bancário.**
> ![Exemplo de Persona](images/persona-matheus.jpg)
> 
> **PROPOSTA DE VALOR**
> 
> **Um dos maiores problemas de Matheus é a falta de organização ou equilíbrio financeiro..**
> ![Exemplo da Proposta de Valor](images/proposta-de-valor-matheus.jpg)
> 


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO...`PERSONA` | QUERO/PRECISO ...`FUNCIONALIDADE`   |PARA ...`MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Lucas |Quero poder criar um grupo e adicionar facilmente os membros para compartilhar despesas| Para evitar conflitos e garantir que todos paguem de maneira justa.|

|EU COMO...`PERSONA` | QUERO/PRECISO ...`FUNCIONALIDADE`  |PARA ...`MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Lucas |Quero receber notificações de pagamentos pendentes e vencidos| Para que possa lembrar os membros do grupo de suas obrigações financeiras sem confrontos.|

|EU COMO...`PERSONA` | QUERO/PRECISO ...`FUNCIONALIDADE`  |PARA ...`MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Lucas |Quero visualizar relatórios de gastos e despesas compartilhadas| Para que possa entender melhor meus hábitos de consumo e tomar decisões financeiras mais conscientes.|

|EU COMO...`PERSONA` | QUERO/PRECISO ...`FUNCIONALIDADE`  |PARA ...`MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Lucas |Quero poder adicionar facilmente despesas de eventos compartilhados| Para que possamos dividir as contas de maneira justa e sem complicações.|

|EU COMO...`PERSONA` | QUERO/PRECISO ...`FUNCIONALIDADE`  |PARA ...`MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Geraldo |Eu quero um software que facilite a divisão de gastos em grupo| Para evitar conflitos e desgastes com os membros do grupo e ter um controle mais eficiente dos gastos.|

|EU COMO...`PERSONA` | QUERO/PRECISO ...`FUNCIONALIDADE`  |PARA ...`MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Geraldo |Eu quero ter um controle mais eficiente dos gastos em casa| Para evitar desperdícios e garantir que todos os membros da família possam contribuir com as despesas de forma equilibrada e justa.|

|EU COMO...`PERSONA` | QUERO/PRECISO ...`FUNCIONALIDADE`  |PARA ...`MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Mathues |Eu quero um software que facilite a divisão de gastos em casa e que me ajude a ter clareza sobre meus gastos| Para ter uma melhor organização financeira.|

|EU COMO...`PERSONA` | QUERO/PRECISO ...`FUNCIONALIDADE`  |PARA ...`MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Mathues |Eu quero ter um controle mais eficiente dos gastos em casa| Para evitar desperdícios e garantir que todos os membros da família possam contribuir com as despesas.|

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve permitir que usuários possam se cadastrar ou efetuar login | ALTA | 
|RF-002| O sistema deve permitir que o usuário possa criar grupos de acordo com suas necessidades | ALTA |
|RF-003| O sistema deve adicionar novos usuários em grupos específicos | MÉDIA |
|RF-004| O sistema deve permitir que o usuário possa criar, editar e excluir grupos de acordo com suas necessidades | MÉDIA |
|RF-005| O sistema deve permitir que o usuário possa calcular automaticamente a divisão de gastos e retornar para cada individuo do grupo o valor a ser pago e para quem deve ser pago | BAIXA |
|RF-006| O sistema deve permitir que o usuário veja o histórico de seus gastos pessoais ou em grupo | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser seguro para cadastro de dados | MÉDIA | 
|RNF-002| O sistema deve ser compatível para diversos navegadores e dispositivos  |  MÉDIA | 
|RNF-003| O sistema deve ser fácil de usar e intuitivo  |  BAIXA | 
|RNF-004| O sistema deve retornar respostas rápidas às solicitações do usuário  |  BAIXA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend|
|03| A equipe não pode subcontratar o desenvolvimento do trabalho.|

# Projeto de Interface

> O nosso sistema possui diversas telas que permitem uma experiência completa ao usuário. As telas incluem a de cadastro e login, que são necessárias para acessar o sistema. Já a tela inicial permite uma visualização prévia do histórico de gastos e dos grupos já criados, o que torna o acesso ao sistema mais ágil.
> Ao acessar o menu, o usuário poderá selecionar diferentes opções, como Grupos, onde é possível visualizar e criar grupos, e Eventos, onde é possível visualizar eventos ou criar novos. Além disso, o menu Histórico permite visualizar os gastos lançados nos grupos ou eventos, facilitando a compreensão da movimentação financeira do usuário.
> O nosso site foi desenvolvido para atender os requisitos funcionais e não-funcionais, que foram levantados durante a documentação e as histórias de usuário. Esses requisitos foram elaborados com base nas necessidades dos clientes, que desejam ter a possibilidade de criar grupos e lançar gastos, visualizar o histórico de gastos lançados, fazer divisão de gastos e outras funcionalidades que tornam a gestão financeira mais fácil e eficiente.

## User Flow
> 
> ![Exemplo de UserFlow](images/FluxoUsuario.jpg)


## Wireframes

## Tela - Login

> A Tela de Login permite o usúário acesse o nosso software, DivideUai.
> - Email: campo onde o usuário insere seu endereço de email registrado na plataforma.
> - Senha: campo onde o usuário insere a senha associada à sua conta.
> - Esqueci minha senha: opção que permite que o usuário redefina sua senha em caso de esquecimento ou perda.
> - Botão de acessar: botão que, quando clicado, verifica as credenciais do usuário e, se for bem-sucedido, concede acesso ao sistema.

> ![Exemplo de Wireframe](images/Login.jpg)

## Tela - Cadastro

> A Tela de Cadastro permite o usúário de casastre no nosso software, DivideUai.
> - Email: campo onde o usuário insere seu endereço de email registrado na plataforma.
> - Senha: campo onde o usuário insere a senha associada à sua conta.
> - Começar a usar: botão que, quando clicado, verifica as credenciais do usuário e, se for bem-sucedido, concede acesso ao sistema.

> ![Exemplo de Wireframe](images/Cadastro.jpg)

## Tela - Home Page
> Ao acessar ou se cadastrar na DivideUai, será possível visualizar a página inicial, que possui um cabeçalho lateral do lado esquerdo, com os seguinte menus:
> - Home
> - Grupos
> - Eventos
> - Histórico 
> - Configurações <br>
> 
> E além disso, é possível pesquisar por nome ou código do nome do grupo/evento criado, é possível ter uma pré-visualização dos seus grupos ou do histórico dos seus gastos lançados. 

> ![Exemplo de Wireframe](images/TelaInicial.jpg)

## Tela - Grupos
> Ao Acessar o menu Grupos, o usuário será direcionado para uma tela de Grupos, onde será possível visualizar ou grupos criados ou criar caso necessário. 

> ![Exemplo de Wireframe](images/Grupos.jpg)

## Tela - Eventos

> Ao acessar o menu de Eventos, o  usuários será direcionado para uma tela de Eventos, onde será possível visualizar os eventos criados ou criar caso necessário.

> ![Exemplo de Wireframe](images/Eventos.jpg)

## Tela - Histórico

> Ao acessar o menu de Histórico, o usúario será direcionado para a tela de Históricos, onde será possível visualizar todos os seus gastos lançados, com a descrição, categoria, valor, data, grupo  e reponsáveis, também será possível filtrar por eventos ou grupos.

> ![Exemplo de Wireframe](images/Histórico.jpg)

## Tela - Lançar Gastos

> Ao criar um evento, será possível fazer o lançamento de gastos dentro desse evento, ao clicar no ícone de mais, irá abrir um um modal, que será possível adiconar nos seguintes campos: descrição, categoria, valor, data, grupo  e reponsáveis. Ao fazer lançamentos, será possível visualizar os lançamentos nas telas, e enquanto o evento estiver em aberto, será possível adicionar os gastos, após fechar a conta, automáticamente seus gastos irão ser processados no relatório e serão adicionados no histórico.

> ![Exemplo de Wireframe](images/LancarGastos.jpg)

## Tela - Relátorio Geral

> Ao acessar a tela de Relátorio Geral, também será possível visualizar o histórico de gastos lançados, e os repasses que deverá ser feitos para cada membro adicionados nos grupos ou membros. 

> ![Exemplo de Wireframe](images/RelatorioGeral.jpg)

> [Link de Acesso aos Wireframes:](https://www.figma.com/file/psUMHQPQL3dAJdlWIKzhjX/DivideUai!-(Copy)?type=design&node-id=0%3A1&mode=design&t=HYhpBENFhaQKTJgm-1)

# Metodologia

> Para começar, o projeto utilizou duas metodologias ágeis muito populares atualmente: o Design Thinking e o Scrum. O Design Thinking é uma abordagem centrada no usuário que busca entender as necessidades e desejos dos usuários para desenvolver soluções inovadoras e criativas. Já o Scrum é um framework ágil para gestão de projetos que se baseia em entregas frequentes e iterativas, organizadas em sprints de curta duração.
>No processo de trabalho, foram utilizadas diversas ferramentas para auxiliar na comunicação, organização e gestão do projeto, como o Trello, OndeDrive, GitHub, Miro e Figma.
> A configuração do projeto no GitHub foi realizada de forma muito simples e intuitiva. Primeiramente, foi criado um repositório para o projeto, onde será armazenado o código-fonte. Em seguida, foram criados branches para cada nova funcionalidade do projeto, permitindo que os membros da equipe trabalhassem em paralelo em diferentes partes do projeto. Por fim, foram criados pull requests para revisão e integração das alterações realizadas nos branches.
> Em resumo, o projeto utilizou as metodologias ágeis Design Thinking e Scrum, bem como diversas ferramentas, como Trello, Miro, OneDrive e GitHub etc, para facilitar a comunicação, organização e gestão do projeto. A configuração do projeto via GitHub foi simples e permitirá a colaboração entre os membros da equipe de forma eficiente.

## Divisão de Papéis
> A equipe está organizada da seguinte maneira:
> - Scrum Master: Arthur
> - Product Owner: Enrique Leite
> - Equipe de Desenvolvimento: Arthur, Enrique, Erica, Pedro e Sthel.
>
> Para organização e distribuição das tarefas do projeto, a equipe está utilizando o Trello estruturado com as seguintes listas:
> - Recursos: esta lista mantém um template de tarefas recorrentes com as configurações padronizadas que todos devem seguir. O objetivo é permitir a cópia destes templates para agilizar a criação de novos cartões.
> - Backlog: recebe as tarefas a serem trabalhadas e representa o Product Backlog. Todas as atividades identificadas no decorrer do projeto também devem ser incorporadas a esta lista.
> - A Fazer: Esta lista representa o Sprint Backlog. Este é o Sprint atual que estamos trabalhando.
> - Em andamento: Quando uma tarefa tiver sido iniciada, ela é movida para cá.
> - Concluído: nesta lista são colocadas as tarefas que passaram pelos testes e controle de qualidade e estão prontos para ser entregues ao usuário. Não há mais edições ou revisões necessárias, ele está agendado e pronto para a ação
>
> ![Exemplo do Quadro Kanban](images/trello-kanban.jpeg)
> 
> A tarefas são, ainda, etiquetadas em função da natureza da atividade e seguem o seguinte esquema de cores/categorias:
> - Documentação
> - Desenvolvimento 
> - Infraestrutura
> - Testes
> - Gerência de Projetos.

## Ferramentas

> O Trello foi utilizado para criar um quadro de tarefas, onde foram listadas todas as atividades do projeto e atribuídas aos membros da equipe. O Miro foi utilizado para criar um mapa mental colaborativo, onde foram organizadas as ideias e soluções geradas durante as sessões de Design Thinking. O OneDrive foi utilizado para armazenar e compartilhar arquivos e documentos do projeto, como relatórios e apresentações. O Figma foi utilizado pois é uma ferramenta de design de interface de usuário baseada em nuvem que permite a criação de wireframes, protótipos e designs interativos, permitindo a criação de designs precisos e colaborativos. Por fim, o GitHub foi utilizado para hospedar o código-fonte do projeto e permitir a colaboração entre os membros da equipe.

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro | https://miro.com/app/board/uXjVMYD9ye0= | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti1-0385100-gestao-financeira-4| 
|Documentos do projeto | OneDrive | https://sgapucminasbr-my.sharepoint.com/:f:/g/personal/1456541_sga_pucminas_br/Eqr6PXbV_-FGiHludDMe9bcBJ3Vk-AUCa8rbuYk7MuIuvg?e=RROfKr| 
|Gerenciamento do Projeto | Trello | https://trello.com/invite/b/9zGY7rlk/ATTI1ac77542fc46727aacf251348116eb3152C50BC2/gestao-financeira| 
|Protótipo Interativo | Figma | https://www.figma.com/file/LeH195No6KOcSYYMkdIdv1/DivideUai!?node-id=140%3A1789&t=oFCZ284pPuPSay3Z-1 | 

> Outras ferramentas empregadas no projeto são:
> 
> - Visual Studio Code.
> - Discord
> - GitPages
> 
> Entre as ferramentas empregadas no desenvolvimento do projeto mencionado, temos o Visual Studio Code, um editor de código-fonte gratuito e de código aberto que é utilizado para escrever, depurar e testar o código. O Discord, uma plataforma de comunicação por voz e texto que é muito utilizada para a comunicação entre os membros de uma equipe de desenvolvimento. E, por fim, o GitPages, um serviço que permite hospedar páginas estáticas diretamente a partir de repositórios do GitHub.
> Essas ferramentas são essenciais para o desenvolvimento de um projeto, pois ajudam a garantir uma comunicação eficiente entre os membros da equipe, além de possibilitar a criação de um código organizado, testável e de fácil manutenção.

## Controle de Versão

> A configuração do projeto no Git foi realizada a partir da criação de um repositório remoto no Github, que serviu como o repositório upstream. Em seguida, cada membro da equipe clonou o repositório para sua máquina local e passou a trabalhar em um branch específico, como o branch develop.
> A gerência de tags, merges, commits e branchs foi feita de acordo com o modelo de GitFlow, que é uma abordagem para o controle de versão que define um fluxo de trabalho para o desenvolvimento de software. Nesse modelo, há dois branches principais: o master e o develop. O branch master é utilizado para a versão de produção do software, enquanto o branch develop é utilizado para o desenvolvimento contínuo do software.
> Para gerenciar as diferentes versões do software, foram criados branches específicos para cada funcionalidade, como o branch feature para o desenvolvimento de novas funcionalidades e o branch bugfix para a correção de bugs. Quando uma funcionalidade estava pronta para ser integrada ao branch develop, era feito um merge do branch feature ou bugfix correspondente com o branch develop.
> Para gerenciar as issues, foram criados templates específicos para cada tipo de problema, como o bugfix e o feature. As issues eram atribuídas a membros da equipe e podiam ser comentadas e fechadas quando resolvidas. Além disso, eram feitos pull requests para revisão do código antes de ser integrado ao branch develop.
> Em resumo, a gerência de tags, merges, commits e branchs foi feita seguindo o modelo de GitFlow, enquanto a gerência de issues foi realizada com o uso de templates específicos e atribuição de responsabilidades aos membros da equipe. A utilização do Git em conjunto com o Github permitiu um controle eficiente do versionamento do projeto e uma comunicação eficiente entre os membros da equipe.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `testing`: versão em testes do software
> - `develop`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# Projeto da Solução

A proposta de solução do projeto visa desenvolver uma plataforma online que objetiva otimizar a divisão de despesas em grupos. A plataforma oferecerá aos usuários a capacidade de cadastrar as despesas compartilhadas, permitindo que os cálculos pertinentes sejam realizados de forma automatizada, fornecendo a cada indivíduo informações precisas sobre o montante a ser pago e o beneficiário correspondente.

## Tecnologias Utilizadas

As tecnologias utilizadas para a implementação da solução incluem:

> **HTML:** Linguagem de marcação utilizada para estruturar e apresentar o conteúdo da interface do usuário.
> 
> **CSS:** Linguagem de estilo que define a aparência e o layout dos elementos HTML na interface do usuário.
> 
> **JavaScript:** Linguagem de programação usada para adicionar interatividade e funcionalidades dinâmicas à interface do usuário.
> 
> **JSON:** Formato de dados leve e fácil de ler e escrever, utilizado para transmitir informações entre o cliente e o servidor.
> 
> **Bootstrap:** Framework CSS que fornece uma série de componentes e estilos predefinidos para agilizar o desenvolvimento da interface do usuário.
> 
> **Visual Studio Code:** IDE de desenvolvimento utilizada para escrever e editar o código-fonte.
> 
> **Replit:** Ambiente de desenvolvimento online que permite escrever, executar e testar código em várias linguagens.
> 
> **GitHub Pages:** Serviço de hospedagem estática fornecido pelo GitHub para publicar e compartilhar páginas da web.
> 
> **Trello:** Ferramenta de gerenciamento de projetos que ajuda a organizar tarefas e colaborar em equipe.
> 
> **OneDrive:** Serviço de armazenamento em nuvem da Microsoft utilizado para armazenar e compartilhar arquivos relacionados ao projeto.
> 
> **Miro:** Ferramenta de colaboração online utilizada para criar diagramas, realizar brainstorming e colaborar visualmente.
> 
> **Canva:** Ferramenta de design gráfico online utilizada para criar e editar imagens, gráficos e outros elementos visuais.
> 
> **Figma:** Ferramenta de design de interface do usuário e prototipagem utilizada para criar e colaborar em designs de aplicativos e sites.
> 
> **Google Fonts:** Biblioteca de fontes online gratuita fornecida pelo Google, que permite adicionar estilos tipográficos à interface do usuário.
> 
> **Google Images:** Motor de busca de imagens do Google usado para encontrar e obter imagens relevantes para o projeto.
> 
> **This Person Does Not Exist:** Recurso online que gera imagens realistas de pessoas inexistentes, útil para ilustrar perfis de usuários.
> 
> **Discord:** Plataforma de comunicação por voz, vídeo e texto utilizada para facilitar a comunicação e colaboração entre os membros da equipe.
> 
> **Notion:** Ferramenta de produtividade colaborativa utilizada para criar documentos, gerenciar tarefas e compartilhar informações importantes.

As tecnologias utilizadas neste projeto são interconectadas e desempenham diferentes papéis em cada etapa do desenvolvimento e implantação. A interface do usuário é criada com HTML, CSS e JavaScript, enquanto a troca de dados ocorre por meio do formato JSON. 

O projeto é hospedado no GitHub Pages para fácil acesso e visualização. Além disso, são utilizadas ferramentas como Trello para gerenciamento, OneDrive para armazenamento em nuvem e Miro, Canva e Figma para design e colaboração. 

A comunicação entre os membros da equipe é feita através do Discord e a organização de informações é realizada no Notion. Essas tecnologias se complementam para possibilitar o desenvolvimento eficiente e a implantação bem-sucedida do projeto.


## Arquitetura da solução

A seguir, apresentamos um diagrama que ilustra a arquitetura da solução, destacando os módulos e as tecnologias utilizadas. Essa representação visual nos permite compreender melhor a interação entre os componentes e como eles trabalham em conjunto para alcançar os objetivos do projeto.

> **Diagrama da Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/ArquiteturaSolução.png)

## Hospedagem do Projeto

[Link](https://oarthurfc.com/codigo/index.html)
[Documentação](https://oarthurfc.com/divide-uai/codigo/doc/)

# Avaliação da Aplicação

Durante os testes da aplicação, foram utilizados os seguintes cenários para avaliar a satisfação dos requisitos:

> **Cenário de Teste: Cadastro de Usuário**
> 
> *Descrição: Verificar se é possível cadastrar um novo usuário com sucesso.*
>   Passos:
> - Acessar a página de cadastro.
> - Preencher os campos obrigatórios (nome, e-mail, senha).
> - Clicar no botão de cadastro.
> - Verificar se o usuário é redirecionado para a página de login.
> - Critérios de sucesso: O usuário é cadastrado com sucesso e redirecionado para a página de login.
> 
> **Cenário de Teste: Login**
> 
> *Descrição: Verificar se é possível realizar o login na aplicação.*
>   Passos:
> - Acessar a página de login.
> - Preencher os campos de e-mail e senha.
> - Clicar no botão de login.
> - Verificar se o usuário é redirecionado para a página inicial da aplicação.
> - Critérios de sucesso: O usuário realiza o login com sucesso e é redirecionado para a página inicial.
> 
> **Cenário de Teste: Criação de Grupo**
> 
> *Descrição: Verificar se é possível criar um novo grupo.*
>   Passos:
> - Acessar a página de criação de grupo.
> - Preencher os campos obrigatórios (nome do grupo, descrição).
> - Clicar no botão de criação.
> - Verificar se o grupo é criado com sucesso e aparece na lista de grupos do usuário.
> - Critérios de sucesso: O grupo é criado com sucesso e aparece na lista de grupos do usuário.
> 
> **Cenário de Teste: Adição de Usuário ao Grupo**
> 
> *Descrição: Verificar se é possível adicionar um novo usuário a um grupo existente.*
>   Passos:
> - Acessar a página de configuração do grupo.
> - Digitar o nome ou e-mail do usuário a ser adicionado.
> - Selecionar o usuário na lista de sugestões.
> - Clicar no botão de adicionar usuário.
> - Verificar se o usuário é adicionado com sucesso ao grupo.
> - Critérios de sucesso: O usuário é adicionado com sucesso ao grupo e aparece na lista de membros do grupo.
> 
> **Cenário de Teste: Criação de Evento**
> 
> *Descrição: Verificar se é possível criar um novo evento dentro de um grupo.*
>   Passos:
> - Acessar a página de criação de evento.
> - Preencher os campos obrigatórios (nome do evento, data, descrição).
> - Selecionar o grupo no qual o evento será criado.
> - Clicar no botão de criação.
> - Verificar se o evento é criado com sucesso e aparece na lista de eventos do grupo.
> - Critérios de sucesso: O evento é criado com sucesso e aparece na lista de eventos do grupo.
> 
> **Cenário de Teste: Visualização do Histórico de Gastos Individual**
> 
> *Descrição: Verificar se é possível visualizar o histórico de gastos individuais de um usuário.*
>   Passos:
> - Acessar a página de histórico de gastos individuais.
> - Verificar se são exibidos os gastos realizados pelo usuário, organizados por data ou categoria.
> - Validar se os valores e informações dos gastos estão corretos.
> - Critérios de sucesso: O usuário consegue visualizar corretamente o histórico de gastos individuais.
> 
> **Cenário de Teste: Visualização do Histórico de Gastos Compartilhado**
> 
>  *Descrição: Verificar se é possível visualizar o histórico de gastos compartilhados de um grupo.*
>   Passos:
> - Acessar a página de histórico de gastos compartilhados do grupo desejado.
> - Verificar se são exibidos os gastos realizados por todos os membros do grupo, organizados por data ou categoria.
> - Validar se os valores e informações dos gastos estão corretos.
> - Critérios de sucesso: Os membros do grupo conseguem visualizar corretamente o histórico de gastos compartilhados.
> 
> **Cenário de Teste: Cadastro de Despesas Compartilhadas**
> 
> *Descrição: Verificar a capacidade de cadastrar despesas compartilhadas entre os membros de um grupo.*
>   Passos:
> - Acessar a página de criação de despesas compartilhadas.
> - Preencher os campos necessários, como descrição da despesa, valor e membros envolvidos.
> - Salvar a despesa compartilhada.
> - Verificar se a despesa foi cadastrada corretamente e está disponível para todos os membros do grupo.
> - Critérios de sucesso: A despesa compartilhada é cadastrada com sucesso e todos os membros do grupo têm acesso a ela.
> 
> **Cenário de Teste: Cálculo Automático de Divisão de Gastos**
> 
> *Descrição: Verificar a precisão no cálculo automático da divisão de gastos entre os membros do grupo.*
>   Passos:
> - Acessar a página de visualização de despesas compartilhadas.
> - Selecionar uma despesa compartilhada.
> - Verificar se o sistema realiza o cálculo automático da divisão de gastos de forma precisa.
> - Validar se os valores de pagamento são corretamente atribuídos a cada membro do grupo.
> - Critérios de sucesso: O cálculo automático da divisão de gastos é preciso e os valores de pagamento são corretamente atribuídos a cada membro do grupo.
> 
> **Cenário de Teste: Tratamento de Exceções**
> 
> *Descrição: Verificar a capacidade do sistema de lidar com exceções e erros inesperados.*
>   Passos:
> - Realizar ações que possam gerar exceções, como inserir valores inválidos em campos de cadastro.
> - Verificar se o sistema exibe mensagens de erro apropriadas para cada exceção.
> - Testar diferentes cenários de exceções e verificar se o sistema trata essas situações corretamente.
> - Critérios de sucesso: O sistema exibe mensagens de erro apropriadas e trata as exceções de forma adequada.
> 
> **Cenário de Teste: Navegabilidade e Usabilidade**
> 
> *Descrição: Verificar a facilidade de navegação entre as telas e a usabilidade geral da plataforma.*
>   Passos:
> - Realizar tarefas comuns, como criar um grupo, adicionar membros a um grupo e visualizar o histórico de gastos.
> - Observar o fluxo de navegação e verificar se é intuitivo e sem problemas.
> - Avaliar a usabilidade geral da plataforma, como a disposição dos elementos na interface e a clareza das informações apresentadas.
> - Critérios de sucesso: O fluxo de navegação é intuitivo e sem problemas, e a usabilidade geral da plataforma é satisfatória.

## Plano de Testes

Os seguintes cenários de testes foram selecionados para avaliação:

> **Cadastro de Usuário para Login:**
> 
> - Funcionalidade avaliada: Capacidade de cadastrar um novo usuário para login no sistema.
> - Grupo de usuários: Representantes de diferentes perfis de usuários.
> - Ferramentas utilizadas: Jasmine e Mocha para testes unitários e de integração.
> 
> **Criação de Grupos:**
> 
> - Funcionalidade avaliada: Habilidade de criar novos grupos no sistema.
> - Grupo de usuários: Representantes de diferentes perfis de usuários.
> - Ferramentas utilizadas: Jasmine e Mocha para testes unitários e de integração.
> 
> **Criação de Eventos:**
> 
> - Funcionalidade avaliada: Capacidade de criar novos eventos dentro de um grupo.
> - Grupo de usuários: Representantes de diferentes perfis de usuários com permissão de criação de eventos.
> - Ferramentas utilizadas: Jasmine e Mocha para testes unitários e de integração.
> 
> **Visualização do Histórico de Gastos Individual:**
> 
> - Funcionalidade avaliada: Capacidade de visualizar o histórico de gastos individuais.
> - Grupo de usuários: Representantes de diferentes perfis de usuários.
> - Ferramentas utilizadas: Testes de usabilidade com observação direta dos usuários.
> 
> **Visualização do Histórico de Gastos Compartilhado:**
> 
> - Funcionalidade avaliada: Habilidade de visualizar o histórico de gastos compartilhados em um grupo.
> - Grupo de usuários: Representantes de diferentes perfis de usuários pertencentes ao mesmo grupo.
> - Ferramentas utilizadas: Testes de usabilidade com observação direta dos usuários.
> 
> **Cadastro de Despesas Compartilhadas:**
> 
> - Funcionalidade avaliada: Capacidade de cadastrar despesas compartilhadas entre os membros de um grupo.
> - Grupo de usuários: Representantes de cada perfil de usuário (administrador, membro regular).
> - Ferramentas utilizadas: Jasmine e Mocha para testes unitários e de integração.
> 
> **Cálculo Automático de Divisão de Gastos:**
> 
> - Funcionalidade avaliada: Precisão no cálculo automático da divisão de gastos entre os membros do grupo.
> - Grupo de usuários: Representantes de grupos com diferentes configurações de despesas e membros.
> - Ferramentas utilizadas: Jasmine e Mocha para testes unitários e de integração.
> 
> **Tratamento de Exceções:**
> 
> - Funcionalidade avaliada: Capacidade do sistema de lidar com exceções e erros inesperados.
> - Grupo de usuários: Representantes de diferentes perfis de usuários, realizando ações que possam gerar exceções.
> - Ferramentas utilizadas: Jasmine e Mocha para testes unitários e de integração.
> 
> **Navegabilidade e Usabilidade:**
> 
> - Funcionalidade avaliada: Facilidade de navegação entre as telas e usabilidade geral da plataforma.
> - Grupo de usuários: Representantes de diferentes perfis de usuários, com variados níveis de familiaridade com a plataforma.
> - Ferramentas utilizadas: Testes de usabilidade com observação direta dos usuários.

Orientações:

> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

No projeto, utilizamos uma combinação de ferramentas de teste para garantir a qualidade e a confiabilidade do software desenvolvido. Algumas das principais ferramentas de teste utilizadas incluem:

> Jasmine

Jasmine é um framework de testes de comportamento para JavaScript.
Permite a criação de testes unitários e de integração.
Verifica o correto funcionamento das funcionalidades implementadas.

> Mocha

Mocha é outro framework popular para testes JavaScript.
Oferece suporte a diversos estilos de escrita de testes.
Inclui testes assíncronos.
Facilita a criação de casos de teste abrangentes e confiáveis.

> Selenium

Selenium é uma ferramenta de automação de teste.
Permite a execução de testes funcionais em aplicativos web.
Possibilita a simulação de interações do usuário em um navegador real.
Verifica o comportamento correto das páginas web.
Detecta possíveis problemas de usabilidade.
> 
> **Links Úteis**:
> - [Jasmine]([https://geekflare.com/javascript-unit-testing/](https://jasmine.github.io/))
> - [Mocha]([https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7](https://mochajs.org/))
> - [Selenium]([https://www.selenium.dev/])

## Registros de Testes

Após a realização dos testes, foram identificados alguns pontos fortes e fracos na solução desenvolvida.

> Pontos fortes:

- A solução demonstrou eficiência ao calcular automaticamente a divisão de gastos em grupo, fornecendo valores precisos a serem pagos por cada participante.
- A plataforma apresentou uma interface intuitiva e amigável, facilitando o cadastro de despesas compartilhadas.
- Os testes revelaram que a solução foi capaz de lidar com um volume considerável de dados e processá-los de forma rápida e precisa.
- Os resultados dos testes também demonstraram a capacidade da solução de realizar a atribuição correta das despesas aos responsáveis por cada pagamento.

> Pontos fracos:
 
- Foram identificadas algumas falhas no tratamento de exceções, resultando em erros inesperados durante a execução.
- A velocidade de resposta do sistema em determinadas situações de carga pesada foi considerada abaixo do ideal.
- Alguns usuários relataram dificuldades na navegação entre as diferentes telas da plataforma.

> Para abordar esses pontos nas próximas iterações, a equipe pretende adotar as seguintes medidas:

- Realizar uma revisão e aprimoramento das rotinas de tratamento de exceções para garantir uma experiência mais robusta e livre de erros.
- Otimizar o desempenho do sistema por meio de ajustes no código, implementação de técnicas de cache e otimização de consultas de banco de dados.
- Aperfeiçoar a navegabilidade da plataforma, simplificando a transição entre telas e melhorando a usabilidade geral.

> A partir dos resultados obtidos nos testes, as falhas detectadas serão tratadas como oportunidades de melhoria. O grupo se compromete a implementar as correções necessárias para solucionar as falhas e aprimorar a solução em futuras iterações, visando fornecer aos usuários uma experiência mais fluida, confiável e satisfatória.

# Referências Bibliográficas

> *A lista a seguir traz as referências utilizadas nesse projeto. são elas:*
> 
> "Change by Design: How Design Thinking Transforms Organizations and Inspires Innovation" (2009) - ISBN: 0061766089
> "Design Thinking for Strategic Innovation: What They Can't Teach You at Business or Design School" (2013) - ISBN: 1118620127
>
> "Scrum: The Art of Doing Twice the Work in Half the Time" (2014) - ISBN: 038534645X
>"The Scrum Field Guide: Agile Advice for Your First Year and Beyond" (2012) - ISBN: 0321554159
