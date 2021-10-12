const message = require('../components/message/message.network');
const user = require('../components/user/user.network');

function routes(server){
    server.use('/message', message);
    server.use('/user', user);
}

module.exports =  routes ;