const chatModel = require('./chat.model')

async function addChat(chat){
    const newChat = new chatModel(chat);
    try {
        return await newChat.save();
    }catch (error){
        console.log("[chat.store]" + error);
    }
}

async function getAllChat(userId){
    return new Promise((resolve , reject)=>{
        let filter = {}
        if (userId){
            filter = {
                users : userId,
            }
        }
        chatModel.find(filter)
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