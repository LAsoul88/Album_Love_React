/* === External Modules === */
const express = require('express');
const methodOverride = require('method-override');
require('./config/db.connection');

// module instance
const app = express();

// PORT
const PORT = 3000;

/* === Internal Modules === */
const controllers = require('./controllers');


/* === Middleware === */
app.use(express.static("public"));

app.use(methodOverride("_method"));


/* === Routes === */
app.use('/', controllers.auth);
app.use('/users', controllers.user);
app.use('/albums', controllers.album);

app.listen(PORT, () => console.log(`Listening for some tunes on port:`, PORT));