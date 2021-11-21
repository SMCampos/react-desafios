# Projeto Formulário

O projeto foi criado com [Create React App](https://github.com/facebook/create-react-app).

Tecnologias utilizadas:

- ReactJs
- Typescript
- CSS

Crie uma pasta no seu HD, no seu local de preferência.

Abra essa pasta no Visual Studio Code - VS Code.

No terminal integrado do VS Code digite o comando:  \

`npx create-react-app multiform --template typescript`

O projeto será criado com as estruturas de pastas padrão do React

NO terminal navegue para a pasta do projeto com o comando:  \
`cd multiform`

Instale as dependências que serão utilizadas no projeto:

[Styled-Components] (https://www.npmjs.com/package/styled-components)  \
`npm i styled-components`

[React-Router-Dom] (https://www.npmjs.com/package/react-router-dom)  \
`npm i react-router-dom`

E como estamos utilizando o Typescript instale as dependência de tipagem também:  \
[@Types/Styled-Components](https://www.npmjs.com/package/@types/styled-components)  \
`npm i -D @types/styled-components`

[@Types/React-Router-Dom] (https://www.npmjs.com/package/@types/react-router-dom)  \
`npm i -D @types/react-router-dom` 


Se preferir poderá utilizar o Yarn como gerenciador de pacotes:

`yarn add styled-components` e `yarn add -D @types/styled-components` \
`yarn add react-router-dom` e ``yarn add -D @types/react-router-dom`

## Para iniciar o projeto

Na pasta **multiform**, no terminal integrado do VS Code, execute o comando:

### `npm start` ou  \
### `yarn start`

O app vai rodar em modo de desenvolvimento:\
Abra no seu navegador [http://localhost:3000](http://localhost:3000).

A página é atualizada conforme o projeto é editado.

### Desenvolvimento do Projeto

Na pasta **src** limpamos todos os códigos do arquivo **App.tsx** e iniciamos com os códigos que vamos utilizar.
Para estilizar o **App.tsx** foi criado o arquivo **App.styles.tsx**

Para manter a organização e o padrão do ReactJs foram criadas as pastas **components**, **contexts** , **pages** e **svgs**
