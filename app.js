

//Librerias instaladas
const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
require('ejs');

const dbConnect = require('./db');// conexion

//Iniciando express y conectando la base de datos
const app= express();
dbConnect();

//config de port
const port = 3000 | 4000;

//comprension de json
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//middlwares
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

//Archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Motor de plantillas ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Importacion de futuras rutas
app.use(require('./routes/product.routes'))


//config del puerto
app.listen(port, ()=> console.log(`Servidor escuchando en: ${port}`));
