var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('My name is Julius my Github https://github.com/jukind/DeployToAzure');
});

module.exports = router;
