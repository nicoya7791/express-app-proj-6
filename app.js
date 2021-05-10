const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

/* Instantiate Express app */
const app = express();

app.use(cookieParser());
/* Setup view engine, we are using pug templates*/
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// url encoded parser
app.use(express.urlencoded({ entended: false }));
// app.use(cookieParser()); not sure if i need cookie parser yet.

// sets the public folder as static in the route 'static'
app.use('/static', express.static('public'));

// root route need to test
app.get('/', (req, res) => {
    res.send('hello from root route');
});

app.listen(3000);