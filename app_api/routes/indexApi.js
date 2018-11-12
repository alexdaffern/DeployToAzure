const express = require('express');
const router = express.Router();

const ctrlApiHobby = require('../controllers/ctrlApiHobby');
const ctrlApiClass = require('../controllers/ctrlApiClass');

// Hobby
router
    .route('/hobby')
    .get(ctrlApiHobby.hobbyList)
    .post(ctrlApiHobby.addHobby);

//  Class
router
    .route('/class')
    .get(ctrlApiClass.classList)
    .post(ctrlApiClass.addClass);

module.exports = router;


