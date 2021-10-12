const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    user: String,
    mail : String,
    dateOfCreation : Date,
    active: Boolean,
});

const model = mongoose.model('users', messageSchema);
module.exports = model;