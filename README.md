# Liferay Community - Plataforma para criar e participar de comunidades

Este projeto foi desenvolvido pela Squad 15 da turma do 2º período da Faculdade Católica Imaculada Conceição do Recife em parceria com a Liferay, visa solucionar a falta de um local centralizado para a criação e divulgação de grupos e comunidades. Nosso objetivo é transformar o cenário atual, onde os grupos ficam "escondidos" e dificultam a entrada de novos membros, em uma experiência digital fluida e transparente para a interação comunitária.

## O Problema

A falta de uma local centralizada para as comunidades resulta em:
* Novos colaboradores da Liferay não encontram as comunidades
* Redução de engajamento e conexão entre times
* Grupos de difícil acesso
* Frustração

## A Solução Proposta

Um plataforma web integrado ao sistema da Liferay que oferece:
* **Sistema de buscar de comunidade:** por filtro e nome
* **Criaçãos de comunidades:** com classificação pré-cadastrado
* **Visualizar posts de comunidades**
* **Visualizar comentarios**
* **Entrar em comunidades**
* **Publicar novos posts**
* **Comentar nos posts**
* **Apagar comentarios**
* **Visualizar agenda**
* **Criar eventos**
* **Apagar seus eventos**
* **Sair de comunidade**

## Stack de Desenvolvimento

* **Framework Frontend:** React.js
* **Linguagem:** JavaScript / TypeScript
* **Estilização:** Styled Components
* **Ferramenta de Build:** vite.config.js
* **Plataforma Alvo:** Liferay 
* **Versionamento e Hospedagem:** Git e GitHub

## Estrutura do Projeto
O código-fonte principal reside dentro do diretório `liferay-Community/` na raiz do repositório. Uma estrutura típica para este tipo de projeto Liferay incluiria:
 
 * `liferay-Community/`
    * `package.json`: Define metadados do projeto, dependências de frontend (React, Vite, Styled Components) e  scripts de build.
    * `vite.config.js` (ou similar): Configurações da ferramenta de build Vite.
    *  `src/`: Contém os arquivos fonte TypeScript (`.ts`, `.tsx`), CSS (`.css`, `.scss`), componentes React e outros assets.
       * Conteúdo Detalhado:
         * `assets/`: Imagens, ícones, fontes.
         * `components/`: Componentes React reutilizáveis e genéricos (botões, cards, modais, agenda, post).
         * `context/` : Provedores de contexto React para gerenciamento de estado global.
         * `layouts/`: Componentes de layout para definir a estrutura visual das páginas (ex: DefaultLayout/).
         * `pages/`: Componentes que representam páginas ou rotas específicas da aplicação (ex: Community/, Explore/).
         * `styles/`: Arquivos de estilo e configurações de tema (ex: themes/).
         * `App.tsx`: Componente React raiz da aplicação, orquestrando roteamento e layouts.
         * `Router.tsx`: Configuração e definição das rotas da aplicação.
         * `global.ts`: Variáveis globais, utilitários, tipos ou configurações compartilhadas.
         * `main.tsx`: Ponto de entrada principal da aplicação React, onde o React é inicializado.
         * `styled_types.ts`: Definições de tipo para propriedades e temas do Styled Components.
         * `vite-env.d.ts`: Arquivo de declaração de tipos para o ambiente Vite.
    * `dist/`: Contém os arquivos estáticos (JavaScript compilado, CSS, assets otimizados) prontos para serem servidos. 
    * `vercel.json`: Arquivo de configuração específico do Vercel, se utilizado, para definir rotas, variáveis de ambiente, configurações de build e deploy para a plataforma Vercel.
    * Outros arquivos de configuração do projeto frontend:
      * `.vscode/`: Configurações de IDE específicas do VS Code.
      * `.gitignore`: Regras para ignorar arquivos no controle de versão Git.
      * `README.md`: Documentação geral do projeto.
      * `eslint.config.js`: Configuração do ESLint para análise de código e garantia de qualidade.
      * `tsconfig.app.json, tsconfig.json, tsconfig.node.json`: Configurações do compilador TypeScript.

## Instalação e Build

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/rhodrigo081/Liferay-Community.git](https://github.com/rhodrigo081/Liferay-Community.git)
    cd Liferay-Community
    ```

2.  **Navegue até o diretório do módulo:**
    ```bash
    cd Liferay-Community
    ```
    *(Este é o diretório que contém o `package.json`)*

3.  **Instale as dependências do frontend:**
    ```bash
    npm install
    # OU
    # yarn install
    ```

4.  **Inicie o ambiente de desenvolvimento:**
    Verifique os scripts no `package.json`. Um comando comum com Vite é:
    ```bash
    npm run dev
    ou
    npm run build
    ```

## Links Úteis

* **Protótipo do Projeto (Figma):**  https://www.figma.com/design/1y9Y5ZpWuU1plnGjf0Otjg/Prot%C3%B3tipo?node-id=104-3&p=f&t=Qp89mZ5ZBgRTIjjH-0
* **Trello:** https://trello.com/b/XpG5L1Qp/gestao-de-projetos
* **Documento:** https://docs.google.com/document/d/1-vdlblwncD1oEtO-gnT_r9Q7iyO1nRZnMTjwNTGERlU/edit?tab=t.0


## Equipe (Squad 15)
  
| Foto                                                                 | Nome                                           | GitHub                                                       |
| :------------------------------------------------------------------: | :--------------------------------------------- | :-----------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/116917401?v=4" width="100" alt="Rodrigo Leandro"/> | Rodrigo Leandro |[Rodrigo Leandro](https://github.com/rhodrigo081)|
| <img src="https://avatars.githubusercontent.com/u/103284094?v=4"  width="100" alt="Pedro Humberto"/> | Pedro Priori |[Pedro Priori](https://github.com/Pedro-Priori )|
| <img src="https://avatars.githubusercontent.com/u/149793782?v=4"  width="100" alt="VItor Gabriel"/> | Vitor Gabriel |[Vitor Gabriel](https://github.com/VictorGabriel-00)|
| <img src="https://avatars.githubusercontent.com/u/200514974?v=4"  width="100" alt="Raica Lira"/> | Raica Lira |[Raica Lira](https://github.com/Raicalira)|
| <img src="https://avatars.githubusercontent.com/u/209120849?v=4"  width="100" alt="Rosana Dos Anjos"/> | Rosana Dos Anjos  | [Rosana Dos Anjos](https://github.com/Rosana6574)|
| <img src="https://avatars.githubusercontent.com/u/79179241?v=4"  width="100" alt="Sherman Walter"/> | Sherman Walter | [Sherman Walter](https://github.com/thewalterdev)|
| <img src="https://avatars.githubusercontent.com/u/215091497?v=4"  width="100" alt="Pedro Henrique"/> | Pedro Henrique  | [Pedro Henrique](https://github.com/Pedrolu9889)|
| <img src="https://avatars.githubusercontent.com/u/187580183?v=4"  width="100" alt="Sérgio Roberto"/> | Sérgio Roberto  | [Sérgio Roberto](https://github.com/SergioRoberto-DEV)|

