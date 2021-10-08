const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    user: String,
    message: String,
    date: Date
});

const carro = mongoose.model('messages', messageSchema);
module.exports = carro;