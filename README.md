# Code Tunes 🎧

Olá, seja bem vindo ao repositório do CodeTunes, esse é um projeto reformulado por mim [Guilherme Artigas](https://www.linkedin.com/in/guilherme-artigas/), onde eu apliquei conhecimentos sobre consumo de API Rest realizando requisições em uma API pública do iTunes para listagem dos álbuns e das músicas de cada album, trabalhei muito com ciclos de vida do **React**, navegação do usuário com o Framework **NextJS**, estilização com **Tailwind** e metodologia Mobile First.

## Rotas do Frontend

<details>
  <summary>Rota /</summary>

 - Rota inicial da aplicação onde pedimos o nome para que seja possível navegar sem fazer cadastro e login, porém, usuários sem login não conseguem acessar as páginas de músicas favoritas, temos uma lógica de validação no botão onde ele somente fica habilitado caso o nome tenha três ou mais caracteres.
</details>

<details>
  <summary>Rota search</summary>

 - Nessa rota é possível os usuários pesquisarem bandas ou artistas, com a mesma lógica do botão da rota /, onde o mesmo fica habilitado somente se o nome da banda ou artista tiver no mínimo dois caracteres, temos uma listagem de álbuns como resultado.
</details>

<details>
  <summary>Rota /album/:id</summary>

 - Rota em que temos a listagem das músicas do álbum selecionado pelo usuário na rota /search, onde é possível ouvir um preview das músicas de 30 segundos, é possível favorita-las somente se o usuário tiver feito cadastro e login na aplicação (funcionalidade em desenvolvimento).
</details>

<details>
  <summary>Rota /favorites</summary>

 - Nessa rota temos as músicas favoritas escolhidas pelo usuário, lembrando que somente quem faz cadastro e login tem acesso a essa rota.
</details>

<details>
  <summary>Rota /profile</summary>

 - Nesta rota tem um breve resumo das informações do usuário, inicialmente temos os botões de login e cadastro, e quando temos um usuário logado também temos um botão de excluir a conta.
</details>

<details>
  <summary>Rota /profile/login</summary>

 - Rota em que fazemos o login dos usuários, pedindo e-mail e senha, temos a validação no campo de e-mail onde o e-mail precisa ter um formato válido e a senha precisa ter no mínimo seis caracteres para que o botão seja habilitado.
</details>

<details>
  <summary>Rota /profile/register</summary>

 - Nessa rota pedimos nome, email, senha e link da imagem de perfil do usuário, temos validação no frontend em que ele precisa atender as especificidades de cada campo para que o botão de cadastro seja habilitado.
</details>

## Rotas do Backend

<details>
  <summary>Rota /api/user/register</summary>

 - Nessa rota encaminhamos os dados recebidos pelo Frontend para validação na camada de serviços do Backend, temos um status 404 representando falha no cadastro e uma mensagem de retorno caso alguma informação necessária esteja faltando, e o status 201 representando sucesso na criação de um usuário.
</details>

<details>
  <summary>Rota /api/user/login</summary>

 - Nessa rota encontramos o email digitado e confrontamos a senha digitada com a senha que esta criptografada no banco de dados, e um status 200 em casos de sucesso, status 404 para Email ou senha inválidos e status 400 para requisições com dados faltantes. 
</details>

<details>
  <summary>Rota /api/user/deleteUser</summary>

 - Nessa rota possibilitamos usuários a deletarem suas contas.
</details>

## Tecnologias utilizadas

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

### Link para acessar o projeto!

- Link: https://codetunes.vercel.app/
