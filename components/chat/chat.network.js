const express = require('express');
const response = require('../../network/response');
const controller = require('./chat.controller');
const router = express.Router();

//post que reciba un array de usuarios y cree un nuevo chat
router.post('/', function (req, res){
    controller.createChat(req.body.users)
        .then((chat)=>{
            response.success(req,res,chat,200);
        })
        .catch(error => {
            response.success(req, res , 'Internal error',error);
        })
})

//get donde se pueda listar todos los chat
router.get('/:userId', function(req,res){
    console.log('[chat.network]');
   controller.getAllChat(req.params.userId)
       .then((chatList)=>{
           response.success(req,res,chatList,200);
       })
       .catch(error => {
           response.success(req, res , 'Internal error',error);
       })
});

module.exports = router;