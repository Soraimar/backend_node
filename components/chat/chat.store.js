const chatModel = require('./chat.model')

async function addChat(chat){
    const newChat = new chatModel(chat);
    try {
        await newChat.save();
    }catch (error){
        console.log("[chat.store]" + error);
    }
}

async function getAllChat(){
    return new Promise((resolve , reject)=>{
        chatModel.find()
            .populate('users')
            .exec((error, populated)=>{
                if(error){
                    return reject(error);
                }
                resolve(populated);
            })
    })
}

module.exports = {
    add: addChat,
    getList: getAllChat,
}