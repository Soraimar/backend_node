const userStore = require('./user.store');
const {Promise} = require("mongoose");

async function addUser(user, mail){
    if (!user || !mail ){
        console.error('[message.Controller] unspecified user')
        return Promise.reject('Invalid data');
    }

    const newUser = {
        user: user,
        mail : mail,
        dateOfCreation : new Date(),
        active: true,
    }
    return await userStore.add(newUser);
}

async function listUsers(){
    return await userStore.list();
}

module.exports = {
    addUser,
    listUsers,
}