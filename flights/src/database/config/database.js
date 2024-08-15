const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'src/database/database.sqlite'
});

async function testConnection() {
    try {
      await sequelize.authenticate();
      console.log('La conexion se ha establecido correctamente.');
    } catch (error) {
      console.error('No se ha podido conectar a la base de datos: ', error);
    }
  }
  
testConnection();

module.exports = sequelize;