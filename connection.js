const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/telegram', {
        "authSource": "admin",
        "user": "brandDiscountsUser",
        "pass": "brandDiscountsPassword"
    });
}
