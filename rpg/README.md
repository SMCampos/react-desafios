# Projeto RPG

O projeto foi criado com [Create React App](https://github.com/facebook/create-react-app).

Tecnologias utilizadas:

- ReactJs
- Typescript
- CSS

Crie uma pasta no seu HD, no seu local de preferência.

Abra essa pasta no Visual Studio Code - VS Code.

No terminal integrado do VS Code digite o comando:  \

`npx create-react-app rpg --template typescript`

O projeto será criado com as estruturas de pastas padrão do React

NO terminal navegue para a pasta do projeto com o comando:  \
`cd rpg`

Instale as dependências que serão utilizadas no projeto:

[Styled-Components] (https://www.npmjs.com/package/styled-components)  \
`npm i styled-components`

E como estamos utilizando o Typescript instale as dependência de tipagem também:  \
[@Types Styled-Components](https://www.npmjs.com/package/@types/styled-components)  \
`npm i -D @types/styled-components`

Se preferir poderá utilizar o Yarn como gerenciador de pacotes:

`yard add styled-components` e `yarn add -D @types/styled-components`

## Para iniciar o projeto

Na pasta **rpg**, no terminal integrado do VS Code, execute o comando:

### `npm start` ou  \
### `yarn start`

O app vai rodar em modo de desenvolvimento:\
Abra no seu navegador [http://localhost:3000](http://localhost:3000).

A página é atualizada conforme o projeto é editado.

### Desenvolvimento do Projeto

Na pasta **src** limpamos todos os códigos do arquivo **App.tsx** e iniciamos com os códigos que vamos utilizar.
Para estilizar o **App.tsx** foi criado o arquivo **App.styles.tsx**

Para manter a organização e o padrão do ReactJs foram criadas as pastas **components**, **types** , **data** e **hooks**

Na pasta components foi criada a sub-pasta **Character**, com os arquivos **index.tsx** e **styles.ts**  \
No arquivo **Character.ts** foi criada a função para indicar a posição da imagem do personagem no mapa.

Na pasta **data** foi criado o arquivo **mapSpots.ts** que tem um array de arrays com as posições para movimentação do personagem no mapa.  \
Onde 0(zero) bloqueia e 1(um) permite o movimento.

Na pasta **hooks** foi criado o arquivo **useCharacter** para controlar a movimentação do personagem no mapa através das funções:  \
**moveLeft**, **moveRight**, **moveDown** e **moveUp**   \
e uma função de verificação de permissão da movimentação **canMove**

Na pasta **types** foi realizada a tipagem das propriedades de movimentação do personagem.

No **App.tsx** foi utilizado o hook **useEffect** para monitorar as teclas pressionadas no teclado para controlar a movimentação do personagem  \
através da função **handleKeyDown**