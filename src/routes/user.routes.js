const router = require('express').Router();

const {
    getUsers,
    postUser,
    putUser,
    deleteUser,

} = require('../controllers/user.controllers');
const esAdmin = require('../middlewares/es-admin');
const validarJWT = require('../middlewares/validar-jwt');

//rutas

//ruta para obtener usuarios
router.get('/user',[
    validarJWT,
    esAdmin
], getUsers);

//crear usuario
router.post('/user', postUser);

//editar usuario, usa ID
router.put('/user/:id', [
    validarJWT
], putUser);

//eliminar usuario, usa ID
router.delete('/user', [
    validarJWT
], deleteUser);

module.exports = router;