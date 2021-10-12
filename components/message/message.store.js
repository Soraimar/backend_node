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

async function getMessages(filterMessage){
    let filter = {}
    if (filterMessage){
        filter =  {user : filterMessage}
    }
    return messageModel.find(filter);
}

async function updateText(id, message) {
    const foundMessage = await messageModel.findOne({_id: id})

    foundMessage.message = message;
    return await foundMessage.save()

}

async function deleteMessage(id){
    try{
        return await messageModel.deleteOne({_id: id})
    }catch (e) {
        console.log('error: '+ e)
    }

}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateText,
    delete : deleteMessage,
    // get
}