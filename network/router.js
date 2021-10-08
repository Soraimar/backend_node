const message = require('../components/message/message.network')

function routes (server){
    server.use('/message', message)
}

module.exports =  routes ;