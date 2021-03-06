const store = require('./message.store');

function addMessage(user,message, chat, file){
    return new Promise((resolve, reject ) => {
        if (!user || !chat || !message){
            console.error('[message.Controller] No user or no message')
            return reject('Invalid data');
        }

        let fileUrl = '';
        if (file){
            fileUrl = 'http://localhost:3000/app/files/'+ file.filename;
        }

        const fullMessage = {
            user: user,
            message: message,
            chat : chat,
            file: fileUrl,
            date: new Date(),
        }

        store.add(fullMessage).then(() => resolve(fullMessage));
    });
}

function getMessage(filterUser) {
    return new Promise(((resolve) => {
        resolve(store.list(filterUser));
    }))
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            console.log('[message.Controller] No message or no message id');
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