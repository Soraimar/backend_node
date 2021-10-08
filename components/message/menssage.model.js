const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    user: String,
    message: {
        type: String,
        required : true,
    },
    date: Date,
});

const model = mongoose.model('messages', messageSchema);
module.exports = model;