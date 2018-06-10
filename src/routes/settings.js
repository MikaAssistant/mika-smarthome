const express = require('express');
const router = express.Router();
const db = require(__dirname+"/../../config/database");

router.get('/dialogflow',async (req,res) => {
    try{
        let dialogflow = db.get('settings.dialogflow').value();
        res.render('settings/dialoflow',{
            dialogflow: dialogflow
        });
    }catch(error) {
        console.log(error);
        res.redirect('/');
    }
});

router.post('/dialogflow',async (req,res) => {
    let { client_token } = req.body;
    try{
        db.set('settings.dialogflow.client_token', client_token).write();
        res.redirect('/settings/dialogflow');
    }catch(error) {
        console.log(error);
        res.redirect('/');
    }
});

router.get('/hgweather',async (req,res) => {
    try{
        let hgweather = db.get('settings.hgweather').value();
        res.render('settings/hgweather',{
            hgweather: hgweather
        });
    }catch(error) {
        console.log(error);
        res.redirect('/');
    }
});

router.post('/hgweather',async (req,res) => {
    let { api_key, latitude, longitude } = req.body;
    try{
        db.set('settings.hgweather.api_key', api_key).write();
        db.set('settings.hgweather.latitude', latitude).write();
        db.set('settings.hgweather.longitude', longitude).write();
        res.redirect('/settings/hgweather');
    }catch(error) {
        console.log(error);
        res.redirect('/');
    }
});

module.exports = router;