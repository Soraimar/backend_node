/*
Archivo para con metodos de respuestan que ayudad a tener una misma nomesclatura en la respuesta al cliente
*/

function success(req , res, message, status){
    //si el status no viene se asignara 200 por defecto
    res.status(status || 200).send({
        'error': '',
        'body' : message
    });
}

function error(req , res, error, status, details){
    console.log("[response error] " + details);

    res.status(status || 500).send({
        'error' : error,
        'body' : ''
    })
}

module.exports = {success, error}