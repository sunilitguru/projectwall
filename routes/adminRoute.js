const express = require('express');
const router  = express.Router();
const multer  = require('../middleware/multer');
const adminController = require('../controllers/adminController');


router.post('/create/user',adminController.registerEmployee);
router.post('/addProject',multer.single('icon'),adminController.addProject);


module.exports = router;