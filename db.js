const mongoose = require('mongoose');

const dbConnect = async () => {
    try{
        mongoose.connect('')
        console.log('Base de datos conectada');
    }catch(error){
        console.log('Error al conectar la base de datos', error.message);
    }
}

module.exports= dbConnect;