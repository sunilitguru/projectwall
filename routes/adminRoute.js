const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router.post('/create/user',adminController.registerEmployee);
router.post('/addProject',adminController.addProject);


module.exports = router;