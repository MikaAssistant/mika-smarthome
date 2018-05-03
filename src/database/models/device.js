const mongoose = require('mongoose');

let Device = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    port: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Device', Device);