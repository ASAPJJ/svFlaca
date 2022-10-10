const user = require('../models/user');
const bcrypt = require('bcrypt');
const ctrluser = {};

//Controlador para obtener todos los usuarios de la base de datos.
ctrluser.getusers = async (req, res) => {
    //Se realiza consulta de todos los documentos en la base de datos.
    const users = await user.find();

    //Devolucion de los datos de usuario en un arreglo
    return res.json(users)
};

//Aca se crea un nuevo usuario en la base de datos
ctrluser.postuser = async (req, res) =>{
    //Se obtienen los datos enviados por metodo POST
    const {username, password: passwordRecibida, email} = req.body;

    //Encriptacion de la contraseña
    const newPassword= bcrypt.hashSync(passwordRecibida, 10);

    //Instancia un nuevo documento de mongoDB para luego ser guardado
    const newuser = new user ({
        username,
        password: newPassword,
        email
    });

    //Se alamacena en la base de datos de forma asincronica .save()

    const user = await newuser.save();

    return res.json({
        msg: 'Usuario creado',
        user
    });
};

//Controlador para actualizar usuario, se usa ID de usuario
ctrluser.putuser = async(req, res) => {

    const userId = req.params.id;

    //otraData serian el resto de datos de mi esquema
    const { username, email, isActive, role, ...otraData} = req.body;
    
    const data = {username, email, isActive, role};

    try{
        const dataUpdated = await user.findByIdAndUpdate(userId, data, {new: true});
        
        return res.json({
            msg: 'Usuario actualizado',
            dataUpdated
        })
    }catch(error){
        return res.status(500).json({
            msg: 'Error al actualizar'
        })
    }
};

//Eliminar usuario, usa ID
<<<<<<< HEAD:controllers/user.controller.js
ctrluser.deleteuser = async (req, res) => {
    return res.json({
        msg: ''
    })
=======
ctrlUser.deleteUser = async (req, res) => {

    const userId=req.params.id;

    try{
        const deleteTask = await Task.findByIdAndDelete(userId)
        const deleteUser = await User.findByIdAndDelete(userId)
        return res.json({
            msg: 'Usuario borrado y sus tareas',
            deleteUser,
            deleteTask
        })
    }catch(error){
        return res.json({
            msg: 'Error al borrar',
            deleteUser,
            deleteTask
        })
    }


>>>>>>> bfeff16 ((Ahora si funciona bien el borrar usuario) TE BORRE FEDERICO PELUCHE):src/controllers/user.controllers.js
}

module.exports = ctrluser;