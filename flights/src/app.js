const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const sequelize = require("./database/config/database");
const port = 3000 || process.env.PORT;

const homeRoute = require("./routes/homeRoute");
const createFlightRoute = require("./routes/createFlightRoute");
const deleteFlightRoute = require("./routes/deleteFlightRoute");
const selectFlightRoute = require("./routes/selectFlightRoute")
const modifyFlightRoute = require("./routes/modifyFlightRoute");

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', engine({
  defaultLayout: 'main', 
  layoutsDir: path.join(__dirname, 'views/layouts'), 
  partialsDir: path.join(__dirname, 'views/partials') 
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use('/', homeRoute);
app.use('/create', createFlightRoute);
app.use("/delete", deleteFlightRoute);
app.use("/select", selectFlightRoute);
app.use("/modify", modifyFlightRoute);

(async () => {
  await sequelize.sync();
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
})();