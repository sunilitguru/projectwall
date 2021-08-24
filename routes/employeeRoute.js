const express = require('express');
const router = express.Router();
const empController = require('../controllers/employeeController');

router.post('/login', empController.login);
router.get('/projects', empController.getAllProjects);
router.get('events/:id', empController.getAllEvents);
router.post('/event/:id', empController.addEvent);
router.put('/event/:id', empController.updateEvent);
router.delete('/event/:e_id/:p_id', empController.removeEvent);


module.exports = router;