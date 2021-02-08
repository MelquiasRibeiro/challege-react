![lang](https://img.shields.io/badge/language-Javascript-yellow) ![status](https://img.shields.io/badge/Status-WIP-orange)
# CRUD

Nesta aplicação você pode CADASTRAR, REMOVER e ATUALIZAR usuários.

## telas:
o desing foi pensado com base no [protótipo](https://projects.invisionapp.com/share/Q6T6JI44FTY#/screens/376025914).

![Screenshot from 2021-02-08 01-15-56](https://user-images.githubusercontent.com/54459438/107175718-52d64e80-69ac-11eb-9cd2-ed0491d31182.png)
![Screenshot from 2021-02-08 01-16-06](https://user-images.githubusercontent.com/54459438/107175719-536ee500-69ac-11eb-9bd8-ea7b3448039d.png)
![Screenshot from 2021-02-08 01-18-02](https://user-images.githubusercontent.com/54459438/107175720-54077b80-69ac-11eb-83a1-5471198c73a6.png)
![Screenshot from 2021-02-08 01-19-06](https://user-images.githubusercontent.com/54459438/107175722-54077b80-69ac-11eb-8d34-19ee181d7758.png)
![Screenshot from 2021-02-08 01-22-34](https://user-images.githubusercontent.com/54459438/107175725-54a01200-69ac-11eb-9c03-b4c7f01ca01f.png)

você pode testar o projeto [Aqui](http://pulsechallenge.surge.sh/).


## Como Rodar este projeto:
1. clone o projeto em sua maquina ```git clone https://github.com/MelquiasRibeiro/mm-react-test-web.git```;
2. instale as dependencias necessárias ```npm install```;
3. inicie o projeto ```npm start``` e acesse localhost:3000.


## Conceitos abordados neste projeto:
+ Padronização de código com [Eslint](https://eslint.org/) e [Prettier](https://prettier.io/);
+ Roteamento com [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start);
+ [Styled Components](https://styled-components.com/);
+ Gerenciamento de estado usando [Context API](https://pt-br.reactjs.org/docs/context.html);
+ Armazenamento de dados no LocalStorage;
+ Responsividade
+ Renderização Condicional;
+ Tratamento de Erros;

## Requisitos

O desafio é criar um CRUD utilizando HTML, CSS, Javascript e React seguindo os seguintes critérios: 

 
- o usuário não logado, deve poder entrar na tela de login para digitar suas credenciais :heavy_check_mark:
- se o usuário, na tela de login, tentar autenticar com um dado que não exista no localstorage , deverá ver os inputs com a borda vermelha e o texto correspondente ao input com a mensagem de erro  :heavy_check_mark:
- se não existir dados, o usuário deve ver um botao de "criar conta" conforme layout  :heavy_check_mark:
- ao clicar em criar conta, o usuário deve ser redirecionado para a pagina de criação de conta  :heavy_check_mark:
- ao finalizar o cadastro, o usuário deve retornar para a pagina de login novamente  :heavy_check_mark:
- o usuário logado, ao entrar na home, deve poder ver a lista de pessoas cadastradas, um opção de deslogar e o icone do mateus :heavy_check_mark:
- cada card da lista, deve ter as opção de excluir e editar conforme layout :heavy_check_mark:
- a listagem de usuário deve possuir um scroll :heavy_check_mark:
- na tela de home, ao clicar em um card de uma pessoa, redirecionar pra página de edicao, juntamente com os dados :heavy_check_mark:
- a tela deve de edicao deve inicar preechida com os dados do usuário selecionado  :heavy_check_mark:
- a edicao deve refletir de imediato no storage da aplicacao :heavy_check_mark:
- ao clicar em salvar, deve redirecionar para a tela de home novamente e trazer a lista de usuários atualizada  :heavy_check_mark:
- ao clicar no botao de criar, deve redirecionar para a pagina de criacao de usuário  :heavy_check_mark:
- o usuário deve ver a opção de inserir imagem  :heavy_check_mark:
- o usuário deve preencher os dados nos inputs  :heavy_check_mark:
- ao clicar em salvar, redirecionar para a home  :heavy_check_mark:
- ao clicar em deslogar, o usuário deve retornar para a tela de login  :heavy_check_mark:
- a aplicacao deve resetar o storage  :heavy_check_mark:
- seria legal ter um layout responsivo  :heavy_check_mark:
