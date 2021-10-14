const store = require('./chat.store')

async function createChat(users){
    if (!users || !Array.isArray(users)){
        console.log('[chat.controller] No users');
        return Promise.reject('Invalid data');
    }

    const chat = {
        users : users,
    }

    return await store.add(chat)
}

async function getAllChat(userId){
    return await store.getList(userId);
}

module.exports ={
    createChat,
    getAllChat
}