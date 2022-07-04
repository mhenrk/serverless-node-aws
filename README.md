# Serverless Framework Node HTTP API on AWS

Projeto consiste em elaborar uma API Rest através do framework serverless em ambiente cloud amazon aws, que realiza o cadastro, consulta, update e delete de um registro em um banco de dados NoSQL

## Ferramentas e Frameworks:

- NodeJs

- NoSQL - Amazon DynamoDB

- Serverless Framework

- Biblioteca UUID para geração de ID únicos


## Propiedades do Objeto:

```
  Usuario: {
    id: string,
    nome: string,
    idade: Int,
    cargo: string
  } 
```

## Como utilizar

Para consultar a API, foi disponibilizado um arquivo ```insomnia.json``` com todas as rotas configuradas.

Todas as configurações de ambiente utilizadas neste projeto estão disponíveis no arquivo ```serverless.yml```

