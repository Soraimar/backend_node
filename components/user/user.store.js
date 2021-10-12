const userModel = require('./user.model');

async function addUser(user){
    const newUser = new userModel(user); // crea la entidad
    try {
        console.log(newUser);
        return await newUser.save();
    } catch (error) {
        console.log(error);
    }
}

async function listUsers(){
    return userModel.find();
}

module.exports = {
    add : addUser,
    list: listUsers,
}