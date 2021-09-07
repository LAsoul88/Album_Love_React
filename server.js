/* === External Modules === */

const express = require('express');

// module instance
const app = express();

// PORT
const PORT = 3000;

/* === Internal Modules === */
const controllers = require('./controllers');

/* === Routes === */
app.use('/', controllers.auth);
app.use('/users', controllers.user);
app.use('/albums', controllers.album);

app.listen(PORT, () => console.log(`Listening for some tunes on port:`, PORT));