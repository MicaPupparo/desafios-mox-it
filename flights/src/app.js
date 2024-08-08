const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const sequelize = require('./database/config/database');
const Flight = require('./database/models/Flight');
const port = 3000 || process.env.PORT;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// const quotesRouter = require('./routes/quotes')

(async () => {
  await sequelize.sync();
  app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
  });
})();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.engine('handlebars', engine({
  partialsDir: __dirname + '/views/partials',
}));

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

// app.use('/quotes', quotesRouter);




