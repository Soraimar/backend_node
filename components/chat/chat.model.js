const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// va a relacionar dos usuarios
const chatSchema = new Schema({
    users : [{
        type : Schema.ObjectId,
        ref: 'users',
    }]
})

const model = mongoose.model('chat', chatSchema);
module.exports = model;