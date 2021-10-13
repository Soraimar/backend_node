const store = require('./chat.store')

async function createChat(users){
    return new Promise((resolve ,reject)=>{
        if (!users){
            console.log('[chat.controller] No users');
            return reject('Invalid data');
        }

        const chat = {
            users : users,
        }

        console.log(chat);
        store.add(chat).then(()=> resolve(chat))
    })

}

async function getAllChat(){
    console.log('[chat.controller]');
    return await store.getList();
}

module.exports ={
    createChat,
    getAllChat
}