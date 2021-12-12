const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const session = require('express-session');
const app = express();
const SequelizeStore = require('connect-session-sequelize')(session.Store);

require('dotenv').config();

const helpers = require('./utils/helpers');

const routes = require('./controllers');
const sequelize = require("./config/connection");
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({helpers});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sess = {
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{},
    store: new SequelizeStore({
      db: sequelize,
    })
  }
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () =>{console.log(`Serving at http://localhost:${PORT}`)})
});