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

module.exports = router;