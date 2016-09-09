var router = require('express').Router();
var controller = require('../controller/auth.controller.js');

router.get('/facebook', controller.auth.getFacebook);

module.exports = router;
