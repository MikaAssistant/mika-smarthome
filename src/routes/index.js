const express = require('express');
const router = express.Router();
// const db = require("../database/database");
// const dockerService = require('../services/dockerService');

router.get('/', function(req, res) {
    res.render('dashboard');
});

module.exports = router;