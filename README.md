# Welcome to GoChallenge 👋
![Version](https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> Desenvolvimento do projeto proposto pela equipe da Rocketseat para certificação do GoSctack 8.0. 

## Como rodar o projeto

###- Server

Para rodar o servidor é necessário estar com o banco de dados PostgreSQL (porta 5432) e MongoDB (port 27017).
Acessando a pasta Server instale as dependencias rodando o comando:
```sh
yarn install
```
e o comando a seguir para inicializar o servidor: 
```sh
yarn dev
```

###- Web

Para ter o projeto em ReactJS rodando em sua total funcionalidade é necessário ter o server rodando.
Com isso instale as dependências com : 
```sh
yarn install
```
e com inicialize com o comando: 
```sh
yarn start
```
###- Mobile

Para ter o projeto em React Native rodando em sua total funcionalidade é necessário ter o server rodando.
(O Projeto em React Native foi testado apenas em Android).
Com isso instale as dependências com : 
```sh
yarn install
```
Instale o app em seu celular verificando que o computador reconhece o mesmo com o comando: 
```sh
adb devices
```
Se o computador verificar reconheer corretamente o celular, rode o comando a seguir para instalar o app:
```sh
sudo yarn android
```
e inicie o Metro bundler, rodando:
```sh
sudo yarn start
```

## Autor

👤 **Alek Tobias**

* Github: [@alektobias](https://github.com/alektobias)

