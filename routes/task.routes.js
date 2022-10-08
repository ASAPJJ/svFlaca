const router = require('express').Router();

const { createTask, getTasks} = require('../controllers/task.controller');

const validarJWT=require('../middlewares/validarJWT');

//crear nueva tarea
router.post('/task', [
    validarJWT
], createTask);

router.get('/task', [
    validarJWT
], getTasks);

module.exports = router;