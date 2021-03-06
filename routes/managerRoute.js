const express = require('express');
const router = express.Router();
const managerController = require('../controllers/managerController');


router.put('/project/status/:id', managerController.changeProjectStatus);


module.exports = router;