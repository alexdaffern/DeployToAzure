const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlHobbies = require('../controllers/ctrlHobbies'); // ... for the list of World Cup winners (countries)
const ctrlClasses = require('../controllers/ctrlClasses'); // ... for the the list of Golden ball winners (players)

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/hobbies', ctrlHobbies.winnerlist);  // List of World Cup winners (countries)
router.get('/classes', ctrlClasses.winnerlist);  // List of Golden ball winners (players)

module.exports = router;
