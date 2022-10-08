const {iniciarSesion} = require('../controllers/auth.controller');

const router = require('express').Router();

router.post('/login', iniciarSesion)

module.exports = router;