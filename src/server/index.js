require('dotenv').config();
const path = require('path');
const express = require('express');
const server = express();
const http = require('http').Server(server);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require(__dirname+"/../../config/database");

server.set('views', path.join(__dirname, '../../views'));
server.set('view engine', 'ejs');
server.use(express.static(path.join(__dirname, '../../public')));

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

//ROUTER
let routes = require('../routes/index');
let devices = require('../routes/devices');

//HELPERS
const assets = require('../helpers/assets')();
server.locals.assets;

server.use('/', routes);
server.use('/devices', devices);



//MONGO DB
db.on('open', function () {
    console.log('MongoDB is connected');
});

db.on('error', function () {
    console.log('Ops! Something went wrong, mongoDB is broken');
});

let company = mongoose.Schema({
    name: String
});

let Company = mongoose.model('Company', company);

Company.create({
    name: 'Company 1'
}, function (err, company) {
    if(err) {
        console.log('error')
        return
    }

    console.log('Created -> ', company)
});


module.exports = http;