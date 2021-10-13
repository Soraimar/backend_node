const express = require('express');
const response = require('../../network/response');
const controller = require('./chat.controller');
const router = express.Router();

//post que reciba un array de usuarios y cree un nuevo chat
router.post('/', function (req, res){
    controller.createChat(req.body.users)
        .then((chatList)=>{
            response.success(req,res,chatList,200);
        })
        .catch(error => {
            response.success(req, res , 'Internal error',`Error en el controlador: ${error}`);
        })
})

//get donde se pueda listar todos los chat


module.exports = router;