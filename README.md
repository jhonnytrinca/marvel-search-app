# Marvel Comics Search App

Aplicação desenvolvida para listagem, busca, seleção e envio por email de quadrinhos da Marvel.
Para consumo dos dados, foi utilizada a base disponível da [Marvel API](https://developer.marvel.com/).

[Clique aqui](https://jhonnytrinca.github.io/marvel-search-app/) para acessar a aplicação.

## Tecnologias utilizadas

- [Axios](https://axios-http.com/ptbr/docs/intro)
- [SWR](https://swr.vercel.app/)
- [Tailwind](https://tailwindcss.com/)
- [Formik](https://formik.org/)
- [Yup](https://www.npmjs.com/package/yup)
- [EmailJS](https://www.emailjs.com/)
- [Cypress Component Testing](https://www.cypress.io/blog/2021/04/06/cypress-component-testing-react/)
- [React Hot Toast](https://react-hot-toast.com/)
- [MD5](https://www.npmjs.com/package/md5)

## Informações sobre tecnologias utilizadas

- **Axios** - Utilizado para o consumo dos dados da API.
- **SWR** - Para otimização dos dados exibidos em tela, utilizando do 'state-while-revalidating' para exibir dados guardados em cache enquanto espera a requisição ser finalizada para revalidação dos dados. Dessa forma, em casos de mudança de página ou que o usuário busque por um termo já pesquisado anteriormente, não há incidência de loading;
- **Tailwind** - Utilizado na estilização da aplicação, framework que traz facilidade na aplicação e customização, código enxuto e grande ganho na responsividade e aplicação de dark mode;
- **Formik** - Facilitador na criação de formulários, utilizado para guardar os quadrinhos selecionados, nome e email para envio dos dados;
- **Yup** - Trabalhando juntamente do Formik, faz a validação de campos obrigatórios;
- **EmailJS** - Plataforma utilizada para envio simplificado de emails;
- **Cypress Component Testing** - Plataforma de testes do Cypress voltada a testes de componentes do React, oferecendo agilidade e precisão na criação de testes, por possuir uma interface gráfica mostrando de forma intuitiva todas as etapas do teste e indicação de falhas;

## Rodando localmente

Para rodar esse projeto será necessário possuir o [NodeJs](https://nodejs.org/en/), [Git](https://git-scm.com/) e um editor de sua preferência, como [VS Code](https://code.visualstudio.com/).

Clone o repositório e o acesse na pasta do projeto

```
$ git clone https://github.com/jhonnytrinca/marvel-search-app
```

No diretório do projeto, instale as dependências com:

`yarn` ou `npm install`

Após isso, para rodar o projeto, utilize:

`yarn start` ou `npm start`

Isso rodará a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualização no browser.

## Rodando os testes

Para rodar os testes, o Cypress oferece duas formas de visualização:

`yarn cy:run` ou `npm run cy:run` - roda do modo clássico, fazendo a verificação dos testes e exibindo seus resultados pelo terminal;

`yarn cy:ct` ou `npm run cy:ct` - roda do modo gráfico, abrindo em uma nova janela do browser os testes, sendo possível ver em tela cada etapa do teste sendo realizada, de forma semelhante ao que o usuário final faria. Permite também localizar com mais facilidade qualquer tipo de problema.

## Screenshots

#### - Página home

![Página home](https://i.imgur.com/CGvcN9B.png)

#### - Página home em dark mode

![Página home em dark mode](https://i.imgur.com/5PhCefm.png)

#### - Página de detalhes

![Página de detalhes](https://i.imgur.com/LEJfjin.png)

#### - Página de detalhes em dark mode

![Página de detalhes em dark mode](https://i.imgur.com/Q0nmwMI.png)

#### - Página mobile em light e dark mode

![Página mobile em light e dark mode](https://i.imgur.com/e0ngGpz.jpg)

#### - Página mobile de detalhes em light e dark mode

![Página mobile de detalhes em light e dark mode](https://i.imgur.com/TEtGL8H.jpg)

#### - Testes de componentes e página realizados

![Testes de componentes e página realizados](https://i.imgur.com/gBCJphv.png)

## Contribuindo

Para contribuir nesse projeto:

- Faça um fork do projeto;
- Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
- Crie um commit com suas alterações: `git commit -m "feature: my feature"`
- Faça o envio das alterações: `git push origin my-feature`
