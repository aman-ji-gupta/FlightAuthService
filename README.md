# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- create a `.env` file in the root directory and add the following envrionment variable
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json
```
{
  "development": {
    "username": "<YOUR_DB_LOGIN_USERNAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
 
}

```
- Once you've addedd your db config as listed above, go to the src folder from your terminal and execut `npx sequelize db:create`

-  ` npx sequelize model:generate --name User --attributes email:string,password:string
`
- `npx sequelize db:migrate`