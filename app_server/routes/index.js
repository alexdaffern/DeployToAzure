const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlHobby = require('../controllers/ctrlHobby'); // ... for the list of World Cup winners (countries)
const ctrlClass = require('../controllers/ctrlClass'); // ... for the the list of Golden ball winners (players)

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/hobby', ctrlHobby.hobbylist);  // List of World Cup winners (countries)
router.get('/class', ctrlClass.classlist);  // List of Golden ball winners (players)

module.exports = router;
