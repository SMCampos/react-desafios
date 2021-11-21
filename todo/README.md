# Projeto Todo - Lista de Tarefas

O projeto foi criado com [Create React App](https://github.com/facebook/create-react-app).

Crie uma pasta no seu HD, no seu local de preferência.

Abra essa pasta no Visual Studio Code - VS Code.

No terminal integrado do VS Code digite o comando: \

`npx create-react-app todo --template typescript`

O projeto será criado com as estruturas de pastas padrão do React

NO terminal navegue para a pasta do projeto com o comando: \
`cd todo`

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

A página é atualizada conforme você edita o projeto.\

### Desenvolvimento do Projeto

Na pasta **src** limpamos todos os códigos do App.tsx e iniciamos com os códigos que \
iremos utilizar.
Para estilizar o **App.tsx** foi criado o arquivo **App.styles.tsx**

Para manter a organização e o padrão do ReactJs foram criadas as pastas **components** e \
**types**

Na pasta components foram criadas duas sub-pastas **AddArea** e **ListItem**\
cada uma dessas pastas com seu arquivo **index.tsx** e **styles.ts**

No arquivo **App.tsx** foi criada uma função para iniciar a Lista de Tarefas \
e foi criada uma função para atualizar a área que exibe as tarefas **handleAddTask** \
e uma função para atualizar o estado de cada tarefa **handleTaskChange** .

Na sub-pasta **components/AddArea** no arquivo **index.tsx** foi criada a tipagem e \
uma função **handleKeyUp** para atualizar a lista quando pressionada a tecla ENTER.

Na sub-pasta **components/ListItem** no arquivo **index.tsx** foi criada a tipagem e \
uma função **ListItem** para permitir marcar/desmarcar as tarefas listadas.

Na sub-pasta **types** foi realizada a tipagem dos Itens da Lista.