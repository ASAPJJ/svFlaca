const mongoose = require('mongoose');

const dbConnect = async () => {
    //conexión al mongo atlas
    try{
        mongoose.connect('mongodb://localhost:27017/pruebadb')
        console.log('Base de datos conectada');
    }catch(error){
        console.log('Error al conectar la base de datos', error.message);
    }
}
module.exports= dbConnect;
