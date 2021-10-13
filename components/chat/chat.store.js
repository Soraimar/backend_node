const chatModel = require('./chat.model')

async function addChat(chat){
    const newChat = new chatModel(chat);
    try {
        await newChat.save();
    }catch (error){
        console.log("[chat.store]" + error);
    }
}

module.exports = {
    add: addChat,
}