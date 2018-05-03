'use strict';
require('dotenv').config();
process.env.PROJECT_PATH = __dirname;
const server = require('./src/server/index');

server.listen(process.env.HTTP_PORT, function(){
    console.log('listening on *:'+process.env.HTTP_PORT);
});