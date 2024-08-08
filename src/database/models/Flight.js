const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Flight = sequelize.define('Flight', {
  flightNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    field: "flight_number"
  },
  arrival: {
    type: DataTypes.TIME,
    allowNull: false,
    //devuelve solo HH:MM
    get() {
        const time = this.getDataValue('arrival');
        if (time) {
          const [hours, minutes] = time.split(':');
          return `${hours}:${minutes}`;
        }
        return time;
    }
  },
  airline: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports = Flight;