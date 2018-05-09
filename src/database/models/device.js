const mongoose = require('mongoose');

let Device = mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    port: {
        type: Number
    },
    type: {
        type: String
    },
    location: {
        type: String
    }
});

module.exports = mongoose.model('Device', Device);