const store = require('./message.store');

function addMessage(user,message){
    return new Promise((resolve, reject ) => {
        if (!user || !message){
            console.error('[messageController] No hay usuario o mensaje')
            return reject('Los datos son incorrectos');
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }

        store.addMessage(fullMessage);

        resolve(fullMessage);
    });
}

function getMessage() {
    return new Promise(((resolve, reject) => {
        resolve(store.getMessages());
    }))
}

module.exports = {
    addMessage,
    getMessage,
}