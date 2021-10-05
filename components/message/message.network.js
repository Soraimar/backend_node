const express = require('express');
const response = require('../../network/response');
const controller = require('./message.controller')

const router = express.Router();

router.get('/', function(req, res){

    controller.getMessage()
        .then((messageList) => {
            response.success(req, res, messageList , 200)
        })
        .catch(e =>{
            response.error(req,res,'Unexpectd Error ', 400, 'Error en el controlador');
        });
});

router.post('/',function(req,res){

    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) =>{
            response.success(req, res, fullMessage , 201)
        })
        .catch(e => {
            response.error(req,res,'Informacion Invalida', 400, 'Error en el controlador');
        })
});

module.exports = router;