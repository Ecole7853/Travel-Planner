const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const location = sequelize.define("location", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = location;
