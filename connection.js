const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://telegram:telegram@cluster0.ietrd.mongodb.net/telegram?retryWrites=true&w=majority');
}
