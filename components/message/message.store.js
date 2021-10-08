const db = require('../../connection'); // importa el archivo de conexión
const messageModel = require('./menssage.model'); // importa el esquema

async function addMessage(message){
    const newMessage = new messageModel(message); // crea la entidad
    try {
        await newMessage.save();
        console.log(newMessage);
    } catch (error) {
        console.log(error);
    }
}

async function getMessages(){
    return await messageModel.find();
}

async function updateText(id, message) {
    const foundMessage = await messageModel.findOne({_id: id})

    foundMessage.message = message;
    return await foundMessage.save()

}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateText,
    // get
    // delete
}