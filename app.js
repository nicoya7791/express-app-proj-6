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

// error display when a page is not found or does not exist.
app.use((req, res, next) => {
    const err = new Error('The found Monkeys in Mars!. And the page you are looking for does not exist.');
    err.status = 404;
    next(err);
});

// Error handler
app.use((err, req, res, next) => {
    // set local var error = err
    res.locals.error = err;
    res.status(err.status);

    // render an error templet.
    res.render('error');
});

app.listen(port, () => {
    console.log('The app is running in local host 3000')
});