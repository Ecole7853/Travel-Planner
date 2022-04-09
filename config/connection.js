//looks in our node modules, for a folder related to the "" and loading needed library
const sequelize = require("sequelize");
//this requires out enviroment variable
require("dotenv").config();
//making our connection variable, and passing our enviroment variables, and our port
const connection = new sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);
//making this file available to require
module.exports = connection;
