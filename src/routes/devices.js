const express = require('express');
const router = express.Router();
const db = require(__dirname+"/../../config/database");

router.get('/',async (req,res) => {
    try{
        let devices = db.get('devices').value();
        res.render('devices/index',{
            devices: devices
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
        db.get('devices')
        .push({
            id: id,
            name: name,
            address: address,
            port: port,
            group: group
        }).write();
        res.redirect('/devices');
    }catch(error) {
        console.log(error);
        res.redirect('/');
    }
});

router.post('/delete',async (req,res) => {
    let { id } = req.body;
    try{
        db.get('devices').remove({ id: id }).write()
        res.redirect('/devices');
    }catch(error) {
        console.log(error);
        res.redirect('/login');
    }
});

module.exports = router;