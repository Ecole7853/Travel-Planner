const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const trip = sequelize.define("trip", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  trip_budget: {
    type: DataTypes.INTEGER,
  },
  traveller_amount: {
    type: DataTypes.INTEGER,
  },
  traveller_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "travellers",
      key: "id",
    },
  },
  location_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "locations",
      key: "id",
    },
  },
});

module.exports = trip;
