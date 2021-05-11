const express = require('express');
const path = require('path');
const { projects } = require('./data/data.json');
const port = process.env.port || 3000;
/* Instantiate Express app */
const app = express();

/* Setup view engine, we are using pug templates*/
app.set('view engine', 'pug');

// url encoded parser
app.use(express.urlencoded({ entended: false }));

// sets the public folder as static in the route 'static'
app.use('/static', express.static(path.join(__dirname, 'public')));

// root route need to test
app.get('/', (req, res) => {
    console.log(projects[0]);
    res.render('index', projects);
});

// about page route 
app.get('/about', (req, res) => {

    res.render('about');
});


app.listen(port);