const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');


// root route need to test. Pass project.json
router.get('/', (req, res, next) => {
    res.render('index', { projects });
});

// about page route 
router.get('/about', (req, res, next) => {

    res.render('about');
});

//create dynamic route to pass the projects

router.get('/project/:id', (req, res, next) => {
    const { id } = req.params;
    // find a project in projects array with id === to id passed in the route. example: '/projects/1' return project index 1.
    const project = projects[id]
    console.log(project.project_name);
    res.render('project', { project });
});

//- each project in projects         
//- a.(href=`/project/${id}`)
//- img.thumbnail(src=`${project.image_url}`)






module.exports = router;