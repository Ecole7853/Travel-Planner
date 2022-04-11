const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const traveller = sequelize.define("traveller", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

module.exports = traveller;
