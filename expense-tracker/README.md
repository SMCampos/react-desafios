# Projeto Expanse Tracker - Controle de Gastos

O proejto foi criado com [Create React App](https://github.com/facebook/create-react-app).

Crie uma pasta no seu HD, no seu local de preferência.

Abra essa pasta no Visual Studio Code - VS Code.

No terminal integrado do VS Code digite o comando: \

`npm create-react-app expense-tracker --template typescript`

O projeto será criado com as estruturas de pastas padrão do React

NO terminal navegue para a pasta do projeto com o comando: \
`cd expense-tracker`

Instale as dependências que serão utilizadas no projeto:

[Styled-Components] (https://www.npmjs.com/package/styled-components) \
`npm i styled-components`

E como estamos utilizando o Typescript instale as dependência de tipagem também: \
[@Types Styled-Components](https://www.npmjs.com/package/@types/styled-components) \
`npm i -D @types/styled-components`

Se preferir poderá utilizar o Yarn como gerenciador de pacotes:

`yard add styled-components` e `yarn add -D @types/styled-components`

## Para iniciar o projeto

Na pasta Todo, no terminal integrado do VS Code, execute o comando:

### `npm start` ou
### `yarn start`

O app vai rodar em modo de desenvolvimento:\
Abra no seu navegador [http://localhost:3000](http://localhost:3000).

A página é atualizada conforme o projeto é editado.\

### Desenvolvimento do Projeto

Na pasta **src** limpamos todos os códigos do App.tsx e iniciamos com os códigos que \
iremos utilizar.
Para estilizar o **App.tsx** foi criado o arquivo **App.styles.tsx**

Para manter a organização e o padrão do ReactJs foram criadas as pastas **components** , \
**types** , **data** e **helpers**

Na pasta components foram criadas cinco sub-pastas **AddArea**, **ListItem**\
**InfoArea**, **InputArea** e **ResumeArea** \
cada uma dessas pastas com seu arquivo **index.tsx** e **styles.ts**

No arquivo **App.tsx** foi criada uma função para iniciar a Lista de Tarefas \
e foi criada uma função para setar/monitorar a mudança do mês atual **handleMonthChange** \
e uma função para adicionar novos itens à lista **handleAddItem** .

No arquivo **App.tsx** foi utilizado o **hook useEffect** para filtrar a lista de dados por mês e \
também para atualizar e exibir a atualização dos valores na área de informações.

O **body** do App.tsx foi dividido em três áreas: \
**InfoArea** - exibe/seleciona o mês, exibe os valores de despesas, receitas e saldo. \
**InputArea** - permite adicionar novos itens na lista. \
**TableArea** - exibe a lista de itens.

Na sub-pasta **components/InfoArea** no arquivo **index.tsx** foi criada a tipagem das Props e \
as funções **handlePrevMonth** e **handleNextmonth** que permite selecionar o mês na área de informação.

Na sub-pasta **components/InputArea** no arquivo **index.tsx** foi criada a tipagem das Props e \
a função **handleAddEvent** para validar e adicionar novos eventos na lista.

Na sub-pasta **components/ResumeItem** no arquivo **index.tsx** foi criada a tipagem das Props. \
O ResumeItem é importado na Área de Informação.

Na sub-pasta **components/TableArea** no arquivo **index.tsx** foi criada a tipagem das Props e \
estruturada a área de tabela com exibição dos itens.

Na sub-pasta **components/TableItem** no arquivo **index.tsx** foi criada a tipagem das Props e \
estruturado os itens a ser exibidos na área de tabela.

Como o projeto está sendo executado apenas em memória, não está linkado a um banco de dados \
foi criada a sub-pasta **data** e nela foram criados
os arquivos **categories.ts** e **items.ts** com \
o objetivo de inicializar a tabela de itens e simular um banco de dados.

Na sub-pasta **helpers** foi criado o arquivo **dateFilter.ts** que tem por objetivo filtrar e \
padronizar o formato das datas. \
Nele foram criadas as funções: \
**getCurrentMonth** - selecionar o mês atual \
**filterListByMonth** - filtrar a lista com o mês selecionado \
**formatDate** - formatar a data no padrão: dia/mês/ano \
**addZeroToDate** - formata a data adicionando um ZERO à esquerda no mês ou dia quando o valor for menor que 10. \
**formatCurrentMonth** - formatar o nome do mês para string e exibir na área de informação.

Na sub-pasta **types** foi realizada a tipagem das Categorias e Itens da Lista.
