const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    user: {
        type : Schema.ObjectId,
        ref: 'users',
    },
    message: {
        type: String,
        required : true,
    },
    date: Date,
});

const model = mongoose.model('messages', messageSchema);
module.exports = model;