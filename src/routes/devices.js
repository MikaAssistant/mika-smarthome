const express = require('express');
const router = express.Router();
// const db = require("../database/database");

router.get('/',async (req,res) => {
    try{
        res.render('devices/index');
    }catch(error) {
        console.log(error);
        res.redirect('/');
    }
});

// router.get('/form',async (req,res) => {
//     res.render('users/form');
// });
//
// router.post('/create',async (req,res) => {
//     let { name, login, password } = req.body;
//     try{
//         await db.usuarios().create(name,login,password);
//         res.redirect('/users');
//     }catch(error) {
//         console.log(error);
//         res.redirect('/login');
//     }
// });
//
// router.get('/edit/:id',async (req,res) => {
//     try{
//         let user = await db.usuarios().find(req.params.id);
//         res.render('users/edit',{
//             user: user
//         });
//     }catch(error) {
//         console.log(error);
//         res.redirect('/login');
//     }
// });
//
// router.post('/update',async (req,res) => {
//     let { id, name, login, password } = req.body;
//     try{
//         if( password !== '' ){
//             await db.usuarios().update(id,name,login,password);
//         }else{
//             await db.usuarios().update(id,name,login);
//         }
//         res.redirect('/users');
//     }catch(error) {
//         console.log(error);
//         res.redirect('/login');
//     }
// });
//
// router.post('/delete',async (req,res) => {
//     let { id } = req.body;
//     try{
//         let user = await db.usuarios().del(id);
//         res.redirect('/users');
//     }catch(error) {
//         console.log(error);
//         res.redirect('/login');
//     }
// });

module.exports = router;