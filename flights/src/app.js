const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const sequelize = require('./database/config/database');
// const Flight = require('./database/models/Flight');
const port = 3000 || process.env.PORT;

const homeRoute = require('./routes/homeRoute');
const flightCreateRoute = require('./routes/flightCreateRoute');
const flightDeleteRoute = require("./routes/flightDeleteRoute");
const flightSelectRoute = require("./routes/flightSelectRoute")
const flightModifyRoute = require("./routes/flightModifyRoute");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Configuración del motor de vistas
app.engine('handlebars', engine({
  defaultLayout: 'main', 
  layoutsDir: path.join(__dirname, 'views/layouts'), 
  partialsDir: path.join(__dirname, 'views/partials') 
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Montaje de rutas
app.use('/', homeRoute);
app.use('/alta', flightCreateRoute);
app.use("/baja", flightDeleteRoute);
app.use("/seleccionar", flightSelectRoute);
app.use("/modificar", flightModifyRoute);

(async () => {
  await sequelize.sync();
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
})();