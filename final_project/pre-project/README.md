# Project

## Idea

  É um comment board comunitário onde utilizadores podem votar em posts que estão afixados. Os posts à medida que vão recebendo votos vão subindo na página até que no topo se encontram os posts mais votados.

  Os utilizadores conseguem gerir a sua página de utilizador onde podem revelar certos factos sobre si para criar interações entre utilizadores.

## Modelo Dados

  - User
    - id
    - name
    - email
    
  - Post
    - id
    - title
    - body
    - owner
    - votes
    - comments

  - Comment
    - id
    - body
    - post
    - owner
    - votes

  - Post Pool
    - Lista de Posts

