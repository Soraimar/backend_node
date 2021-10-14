const express = require('express');
const controller = require('./user.controller')
const response = require("../../network/response");
const router = express.Router();

router.post('/', function (req,res){

    controller.addUser(req.body.user, req.body.mail)
        .then(data =>{
            response.success(req, res, data , 201)
        })
        .catch(error => {
            response.error(req,res,'Internal error', 500, error);
        })

});

router.get('/', function(req,res){

    controller.listUsers()
        .then(data =>{
            response.success(req, res, data , 201)
        })
        .catch(error => {
            response.error(req,res,'Internal error', 500, error);
        })
});

module.exports = router;

