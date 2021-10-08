const db = require('../../connection'); // importa el archivo de conexión
const messageModel = require('./menssage.model'); // importa el esquema

async function addMessage(message){
    const sms = new messageModel(message); // crea la entidad
    try {
        await sms.save();
        console.log(sms);
    } catch (error) {
        console.log(error);
    }
}

function getMessages(){
    return [];
}

module.exports = {
    add: addMessage,
    list: getMessages,
    // get
    // update
    // delete
}