const db = require('mongoose');
db.Promise = global.Promise;

async function connect(url) {
    await db.connect(url,)
        .then(() => {
            console.log('[DB] successfully connected')
        }).catch( error =>
            console.error(error))
}

module.exports = connect;