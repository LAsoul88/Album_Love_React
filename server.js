/* === External Modules === */
const express = require('express');
const methodOverride = require('method-override');
require('./config/db.connection');
require('dotenv').config();

// module instance
const app = express();

// PORT
const PORT = 3000;

/* === Internal Modules === */
const controllers = require('./controllers');

/* === App Config === */

app.set("view engine", "ejs");

/* === Middleware === */
app.use(express.static("public"));

app.use(methodOverride("_method"));

app.use(express.urlencoded({
  extended: true
}));



/* === Routes === */
app.use('/', controllers.auth);
app.use('/users', controllers.user);
app.use('/albums', controllers.album);

app.listen(PORT, () => console.log(`Listening for some tunes on port:`, PORT));