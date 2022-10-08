const router = require('express').Router();

const {
    getuser,
    postuser,
    putuser,
    deleteuser,
} = require('../controllers/user.controller');
//const esAdmin = require('../middlewares/es-admin');
const validarJWT = require('../middlewares/validarJWT');
const user = require('../models/user');

//rutas


//ruta para obtener usuarios
router.get('/user',[
    validarJWT,
  //  esAdmin,
], getuser);

//crear usuario
router.post('/user',[
    validarJWT
], postuser);

//editar usuario, usa ID
router.put('/user/:id', [
    validarJWT
], putUser);

//eliminar usuario, usa ID
router.delete('/user', [], deleteUser);

module.exports = router;