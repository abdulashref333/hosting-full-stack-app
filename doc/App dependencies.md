# Udagram

### Content

1.  Decription

- set up
- run project

2.  Technologies
3.  Tools
4.  Resources
5.  Auther

## Description

The project contains from back-end -- nodejs for the api -- , database -- posgrsql for database -- and ui -- angular for ui

- How to run the project

  port: 4000

- set up
  install an ide for running node (recommended vs code) and browser (chrome)

  install node v16.13.2 and npm 8.1.2 and postgres for database

  install all packages run scripts:
  npm run install
  npm run back-install
  npm run front-install

  To build project run:
  npm run back-build
  npm run front-build
  To run the project:
  npm run back-start
  npm run front-start

- Before run the project you should set up Database

  1. create database = "store" and super user = "marwan" & password ="marwan" with postgres name as you want

  Database:
  port: 5432
  create user: create user marwan with password 'marwan';

             create database: create database store owner marwan;

             grant all on database store to marwan;

  2. Create .env file


    >create .env file in the root directory and set variable:

```
 POSTGRES_USERNAME="postgres" <username>
 POSTGRES_PASSWORD="postgres" <your password>
 POSTGRES_DB="postgres" <your user>
 PORT_DB="5432"
 POSTGRES_HOST="database-2.cgmysk7pochc.us-east-1.rds.amazonaws.com" <localhost> if local
 AWS_REGION="us-east-1"
 AWS_PROFILE="testuser"
 AWS_BUCKET="udagram-frontend22"
 URL="localhost:8080"
 JWT_SECRET="22"

```

## Technologies

- nodejs
- typescript
- express
- jasmine
- angular
- postgres

## Tools

- vs code
- google chrome

## Resources

- udacity
- community slack and toturs
- npmjs.com
- google

## Auther:

**_ Marwan Ahmed(udacity student) _**
