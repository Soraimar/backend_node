const list = []; //aqui se guardan todos los mensajes

function addMessage(message){
    list.push(message);
}

function getMessages(){
    return list;
}

module.exports = {
    addMessage,
    getMessages,
}