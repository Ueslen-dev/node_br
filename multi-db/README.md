## ----- POSTGRESSQL

## mostra os processos que estão rodando na máquina
docker ps

## baixando imagem e criando banco de dados

docker run --name postgres -e POSTGRES_USER=ueslensantana -e POSTGRES_PASSWORD=development3856 -e POSTGRES_DB=heros -p 5432:5432 -d postgres 

## entrando no container para roadar qualquer comando

docker exec -it postgres /bin/bash

## rodando imagem do painel admnistrativo
docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer 

## sair do container
exit

## ----- MONGODB

## baixando imagem e criando banco de dados
docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=devmongo3689 -d mongo:4

## rodando imagem do painel admnistrativo
docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

## criando nova tabela no banco de dados e criando usuário
docker exec -it mongodb mongo --host localhost -u admin -p devmongo3689 --authenticationDatabase admin --eval "db.getSiblingDB('heros').createUser({user: 'ueslensantana', pwd: 'development3856', roles: [{role: 'readWrite', db: 'heros'}]})"

## --name = nome da imagem
## -p = porta que a imagem deve rodar
## --link = permite que linkar duas imagens dando acesso de uma para outra
## -d = indica que a imagem deve rodar em segundo plano
## -e = executa comandos
## docker rm nome_da_imagem = remove a imagem