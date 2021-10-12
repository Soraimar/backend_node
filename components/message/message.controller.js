const store = require('./message.store');

function addMessage(user,message){
    return new Promise((resolve, reject ) => {
        if (!user || !message){
            console.error('[message.Controller] No hay usuario o mensaje')
            return reject('Invalid data');
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }

        store.add(fullMessage);

        resolve(fullMessage);
    });
}

function getMessage(filterMessage) {
    return new Promise(((resolve) => {
        resolve(store.list(filterMessage));
    }))
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            console.log('[message.Controller] No hay mensaje o id');
            return reject('Data inconsistente')
        }

        const result = await store.update(id, message)

        resolve(result);
    })
}

function deleteMessage(id) {
    return new Promise(async (resolve, reject) =>{
        if (!id){
            console.log('[message.Controller] Id no especificado');
            return reject('Id invalid')
        }
        store.delete(id)
            .then(()=>{
                resolve();
            })
            .catch(e=>{
                reject(e);
            })
    });
}


module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage,
}