const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Flight = sequelize.define("Flight", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  flightNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field: "flight_number",
    validate: {
      is: /^[A-Z]{2,4} [0-9]{4}$/i,
    }
  },
  arrival: {
    type: DataTypes.TIME,
    allowNull: false,
    //devuelve solo HH:MM
    get() {
        const time = this.getDataValue(arrival);
        if (time) {
          const [hours, minutes] = time.split(':');
          return `${hours}:${minutes}`;
        }
        return time;
    }
  },
  airline: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  delayed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    validate: {
      isIn: [["true", "false"]]
    }
  }
});

module.exports = Flight;