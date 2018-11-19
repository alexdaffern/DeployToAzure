const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlHobby = require('../controllers/ctrlHobby');
const ctrlClass = require('../controllers/ctrlClass');

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/hobby', ctrlHobby.hobbylist);
router.get('/class', ctrlClass.classlist);

router
    .route('/hobby/add')
    .get(ctrlHobby.showForm)
    .post(ctrlHobby.addData);

module.exports = router;
