const messageModel = require('./menssage.model');

async function addMessage(message){
    const newMessage = new messageModel(message); // crea la entidad
    try {
        await newMessage.save();
        console.log(newMessage);
    } catch (error) {
        console.log(error);
    }
}

async function getMessages(filterUser){
    return new Promise((resolve, reject) =>{
        let filter = {}
        if (filterUser !== null){
            filter =  {user : filterUser}
        }
        messageModel.find(filter)
            .populate('user') // se le indica lo que es lo que populara
            .populate('chat')
            .exec((error, populated)=>{ //se debe indicar que se ejecute
                if(error){
                    return reject(error);
                }
                resolve(populated);
            })
    })
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