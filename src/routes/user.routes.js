const router = require('express').Router();

const {
    getUser,
    postUser,
    putUser,
    deleteUser,
} = require('../controllers/user.controllers');
const esAdmin = require('../middlewares/es-admin');
const validarJWT = require('../middlewares/validar-jwt');
const user = require('../models/user');

//rutas

//ruta para obtener usuarios
router.get('/user',[
    validarJWT,
    esAdmin,
], getUser);

//crear usuario
router.post('/user',[
    validarJWT
], postUser);

//editar usuario, usa ID
router.put('/user/:id', [
    validarJWT
], putUser);

//eliminar usuario, usa ID
router.delete('/user', [], deleteUser);

module.exports = router;