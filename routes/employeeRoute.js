const express = require('express');
const router  = express.Router();
const multer    = require('../middleware/multer')
const empController = require('../controllers/employeeController');

router.post('/login', empController.login);
router.get('/projects', empController.getAllProjects);
router.get('events/:id', empController.getAllEvents);
router.post('/event/:id', multer.single('file') ,empController.addEvent);
router.put('/event/:id', empController.updateEvent);
router.delete('/event/:id', empController.removeEvent);


module.exports = router;