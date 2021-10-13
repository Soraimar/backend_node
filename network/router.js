const message = require('../components/message/message.network');
const user = require('../components/user/user.network');
const chat = require('../components/chat/chat.network');

function routes(server){
    server.use('/message', message);
    server.use('/user', user);
    server.use('/chat', chat);
}

module.exports =  routes ;