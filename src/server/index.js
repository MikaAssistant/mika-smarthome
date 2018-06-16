const env = require('dotenv').config().parsed;
const path = require('path');
const express = require('express');
const server = express();
const http = require('http').Server(server);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');


server.set('views', path.join(__dirname, '../../views'));
server.set('view engine', 'ejs');
server.use(express.static(path.join(__dirname, '../../public')));

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());


//ROUTER
let routes = require('../routes/index');
let devices = require('../routes/devices');
let settings = require('../routes/settings');

//HELPERS
const assets = require('../helpers/assets')();
server.locals.assets;
server.use(function(req,res,next){
    server.locals.path = req.path;
    next();
})

server.use('/', routes);
server.use('/devices', devices);
server.use('/settings', settings);

module.exports = http;