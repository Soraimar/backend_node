const express = require('express');
const dbConnect = require('./dataBase');
require('dotenv').config({path:".env"})

const router = require('./network/router');

dbConnect(process.env.MONGODB_URL).then(() => console.log("[db] successfully connected"));

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//cargamos el servidor a las rutas para que "prenda"
router(app);

app.use('/app', express.static('public'));

app.listen(PORT, () =>{
    console.log(`La app está escuchando en http://localhost:${PORT}`);
});