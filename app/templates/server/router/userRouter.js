const User = require('../model/user');
const uuid = require('node-uuid');
const router =require('express').Router();


router.get('/', function (req, res) {

    console.log('test')
});

module.exports = router;
