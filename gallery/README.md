# Projeto Galeria de Fotos com Firebase Storage

O projeto foi criado com [Create React App](https://github.com/facebook/create-react-app).

Tecnologias utilizadas:

- ReactJs
- Typescript
- CSS
- Firebase

Crie uma pasta no seu HD, no seu local de preferência.

Abra essa pasta no Visual Studio Code - VS Code.

No terminal integrado do VS Code digite o comando:  \

`npm create-react-app gallery --template typescript`

O projeto será criado com as estruturas de pastas padrão do React

NO terminal navegue para a pasta do projeto com o comando:  \
`cd gallery`

Instale as dependências que serão utilizadas no projeto:

[Styled-Components] (https://www.npmjs.com/package/styled-components)  \
`npm i styled-components`

[UUID](https://www.npmjs.com/package/uuid)  \
`npm i uuid`

[FIREBASE](https://www.npmjs.com/package/firebase)  \
`npm i firebase`

E como estamos utilizando o Typescript instale as dependência de tipagem também:  \
[@Types Styled-Components](https://www.npmjs.com/package/@types/styled-components)  \
`npm i -D @types/styled-components`

[@Types UUID](https://www.npmjs.com/package/@types/uuid)  \
`npm i -D @types/uuid`

Se preferir poderá utilizar o Yarn como gerenciador de pacotes:

`yard add styled-components`, `yarn add -D @types/styled-components`, `yarn add uuid`, `yarn add -D @types/uuid` e `yarn add firebase`.

## Para iniciar o projeto

Na pasta **gallery**, no terminal integrado do VS Code, execute o comando:

### `npm start` ou
### `yarn start`

O app vai rodar em modo de desenvolvimento:\
Abra no seu navegador [http://localhost:3000](http://localhost:3000).

A página é atualizada conforme o projeto é editado.\

### Desenvolvimento do Projeto

Na pasta **src** limpamos todos os códigos do App.tsx e iniciamos com os códigos que iremos utilizar.

Para estilizar o **App.tsx** foi criado o arquivo **App.styles.tsx**

Para manter a organização e o padrão do ReactJs na pasta **src** foram criadas as pastas **components**, **types** , **libs** e **services**

Na sub-pasta **components** foi criada uma sub-pasta para o componente **PhotoItem** com seu arquivo **index.tsx** e **styles.ts**  \
O objetivo desse componente é tipar e exportar uma função para carregar as imagens na tela.

Na sub-pasta **types** foi realizada a tipagem das Photo (construção da classe e propriedades).

Na sub-pasta **services** foi criado o arquivo **photos.ts** com o objetivo de fazer a interligação  \
entre a aplicação e o Firebase. \
Foi criada uma função **imagesFolder** para fazer referência ao storage no Firebase;  \
Foi criada a função **photoList** para fazer a leitura e montagem das imagens no Firebase;  \
Foi criada a função **insert** para fazer a validação e inserção de imagens no storage do Firebase;  \
Foi criada a função **deletePhoto** para permitir a exclusão de imagens do storage no Firebase.

Na sub-pasta **libs** foi criada com o arquivo **firebase.ts** com o objetivo de fazer a ligação entre a aplicação e o Firebase.  \
Os dados da função **firebaseConfig** são obtidos do arquivo **.env.local** o qual mantém os ID's fornecidos pelo Firebase. \
Desta forma, quando versionado, o projeto não irá carregar essas informações sigilosas.

No arquivo **App.tsx** foram utilizados os hooks do ReactJs para manipulação de estados, efeitos e eventos de formulário.  \
A função **getPhotos** é utilizada para carregar as imagens na tela da aplicação.  \
A função **handleFormSubmit** faz as validações e o envio das imagens para o storage do Firebase.  \
A função **handleDeleteClick** permite que uma imagem seja deletada do storage diretamente na aplicação.  \

### Como utilizar o storage do Firebase.

**Primeiro é necessário ter uma conta Google**

Com sua conta Google criada vá até o link:  \

[GOOGLE FIREBASE](https://console.firebase.google.com/?hl=pt)  \

0 - **OBSERVE QUE TODO O PROJETO DEVERÁ SER CRIADO NA OPÇÃO SPARK (GRATUÍTA)**  \
1 - Utilize a opção adicionar projeto \
2 - Insira um nome para o projeto - clique em continuar  \
3 - Para efeitos de estudo e aprendizado podemos desativar o Google Analytics - clique em continuar e o projeto será criado  \
4 - Com o projeto criado clique no Menu Lateral na opção **STORAGE**  \
5 - Clique em **Primeiros Passos**  \
6 - Na tela que abriu apenas clique em próxima  \
7 - Mantenha o local do storage em nam5(US Central) e clique em concluir  \
8 - quando finalizar a criação do bucket e aparecer a tela do storage selecione a opção **Rules**  \
 vai aparecer na tela o seguinte código:  \

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```
9 - Edite o código para que fique igual abaixo, pois neste projeto não será utilizada autenticação.  \

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write;
    }
  }
}
```
10 - Clique na opção **Publicar**  \

11 - Clique na opção **Files** e clique no ícone de **Criar uma nova Pasta** e dê a essa pasta o nome de **images**  \

12 - No Menu Lateral clique em **Visão Geral do Projeto**  \

13 - Em Comece adicionando o Firebase ao seu aplicativo selecio a opção **WEB**  \

14 - Coloque o nome do seu App e clique em registrar App.  \

15 - Na tela irá aparecer as informações do SDK do Firebase que são necessárias no desenvolvimento do projeto. \

16 - Copie as informações conforme exemplo abaixo, pois as mesmas devem ser colocadas no seu arquivo **.env.local**

```
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "seu código",
  authDomain: "projeto-nome-doseu-proejto.firebaseapp.com",
  projectId: "projeto-nome-do-seu-projeto",
  storageBucket: "projeto-nome-do-seu-projeto.appspot.com",
  messagingSenderId: "id do seu projeto",
  appId: "ID da sua App"
};
```

Agora seu projeto Firebase está pronto para utilizar em sua aplicação.
