const express = require('express');
const path = require('path');
const port = process.env.port || 3000;
const routes = require('./routes');

/* Instantiate Express app */
const app = express();

/* Setup view engine, we are using pug templates*/
app.set('view engine', 'pug');

// url encoded parser
app.use(express.urlencoded({ entended: false }));

// sets the public folder as static in the route 'static'
// __dirname is an environment variable that tells you the absolute path of the directory containing the currently executing file.
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(routes);

// error display when a page is not found or does not exist.
app.use((req, res, next) => {
    const err = new Error(' Your request was not found.');
    err.status = 404;
    next(err);
});

// Error handler for a 404 status or anything else
app.use((err, req, res, next) => {
    if (err.status === 404) {
        console.log(err.message);

        res.status(404)
            .render('page-not-found', { err });
    } else {
        err.message = 'Something went wrong!';
        res.status(err.status || 500);
        res.render('error', { err });
    }
});

app.listen(port, () => {
    console.log('The app is running in local host 3000')
});