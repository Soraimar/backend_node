const express = require('express');
const multer = require('multer');
const response = require('../../network/response');
const controller = require('./message.controller');
const router = express.Router();

const upload = multer({
    dest : 'public/files/'
})

router.post('/', upload.single('file') ,function(req,res){

    console.log(req.file)
    controller.addMessage(req.body.user, req.body.message, req.body.chat, req.file)
        .then((data) =>{
            response.success(req, res, data , 201)
        })
        .catch((error) => {
            response.error(req,res,'Internal error', 500, error);
        })
});

router.get('/', function(req, res){
    const filterUser= req.query.user || null;
    controller.getMessage(filterUser)
        .then((messageList) => {
            response.success(req, res, messageList , 200)
        })
        .catch((error) =>{
            response.error(req,res,'Unexpectd Error ', 400, error);
        });
});

router.patch('/:id', function (req,res){
    controller.updateMessage(req.params.id , req.body.message)
        .then(data => {
            response.success(req,res, data, 200);
        })
        .catch((error) => {
            response.error(req, res , 'error updating message', 500,error);
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