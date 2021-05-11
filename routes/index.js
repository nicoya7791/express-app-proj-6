const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');


// root route need to test. Pass project.json
router.get('/', (req, res) => {
    res.render('index', projects);
});

// about page route 
router.get('/about', (req, res) => {

    res.render('about');
});

//create dynamic route to pass the projects

router.get('projects:id', (req, res) => {


});




module.exports = router;