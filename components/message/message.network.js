const express = require('express');
const response = require('../../network/response');
const controller = require('./message.controller')
const router = express.Router();

router.get('/', function(req, res){
    const filterMessage = req.query.user || null;
    controller.getMessage(filterMessage)
        .then((messageList) => {
            response.success(req, res, messageList , 200)
        })
        .catch(() =>{
            response.error(req,res,'Unexpectd Error ', 400, 'Error en el controlador');
        });
});

router.post('/',function(req,res){

    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) =>{
            response.success(req, res, fullMessage , 201)
        })
        .catch(() => {
            response.error(req,res,'Informacion Invalida', 400, 'Error en el controlador');
        })
});

router.patch('/:id', function (req,res){
    controller.updateMessage(req.params.id , req.body.message)
        .then(data => {
            response.success(req,res, data, 200);
        })
        .catch(() => {
            response.error(req, res , 'error updating message', 500);
        })
})

router.delete('/:id', function (req,res){
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req,res, `Message ${req.params.id} eliminado`, 200)
        })
        .catch(error =>{
            response.error(req, res, 'error interno', 500, error)
        })

})

module.exports = router;