// de esta forma son los import de JS
const express = require('express');
const bodyParser = require('body-parser');

const router = require('./network/router');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
router(app);

app.use('/app', express.static('public'));

app.listen(3000);

console.log('La aplicacion esta escuchando en el puerto http://localhost:3000');