const express = require('express');
const path = require('path');
//const { routes } = require('./routes');
const port = process.env.port || 3000;
const routes = require('./routes');
/* Instantiate Express app */
const app = express();

/* Setup view engine, we are using pug templates*/
app.set('view engine', 'pug');

// url encoded parser
app.use(express.urlencoded({ entended: false }));

// sets the public folder as static in the route 'static'
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(routes);


app.listen(port);