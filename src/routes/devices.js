const express = require('express');
const router = express.Router();
const Device = require('../database/models/device');

router.get('/',async (req,res) => {
    try{
        Device.find({}, function (err, devices) {
            if(err) {
                return;
            }
            res.render('devices/index',{
                devices: devices
            });
        });
    }catch(error) {
        console.log(error);
        res.redirect('/');
    }
});

router.get('/form',async (req,res) => {
    res.render('devices/form');
});

router.post('/create',async (req,res) => {
    let { id, name, address, port, group } = req.body;
    try{
        Device.create({
            id: id,
            name: name,
            address: address,
            port: port,
            group: group
        }, function (err, device) {
            if(err) {
                return;
            }
            res.redirect('/devices');
        });
    }catch(error) {
        console.log(error);
        res.redirect('/');
    }
});

router.post('/delete',async (req,res) => {
    let { id } = req.body;
    try{
        Device.findOneAndRemove({
            _id: id
        }, function (err) {
            if(err) {
                return;
            }
            res.redirect('/devices');
        });
    }catch(error) {
        console.log(error);
        res.redirect('/login');
    }
});

module.exports = router;