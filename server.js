/* === External Modules === */
const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo');
require('./config/db.connection');
require('dotenv').config();

// module instance
const app = express();

// PORT
const PORT = 3000;

/* === Internal Modules === */
const controllers = require('./controllers');

// App Config
app.set("view engine", "ejs");

// Session Controller
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: 'mongodb://localhost:27017/albumlove'
    }),
    secret: 'so secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2
    }
  })
);

/* === Middleware === */

app.use((req, res, next) => {
  res.locals.user = req.session.currentUser;
  return next();
});

app.use(express.static("public"));


app.use(express.urlencoded({
  extended: true
}));

app.use(methodOverride("_method"));
app.use(require('./utils/logger'));


/* === Routes === */
app.use('/', controllers.auth);
app.use('/albums', controllers.album);
// app.use('/comments', controllers.comment);
app.use('/users', controllers.user);

app.listen(PORT, () => console.log(`Listening for some tunes on port:`, PORT));