const router= require('express').Router();
const {
gethome,
posthome,
puthome,
deletehome
}=require('../controllers/home.controller');

//requiere controladores
router.get('/home',gethome);
router.post('/home',posthome);
router.put('/home',puthome);
router.delete('/home',deletehome);

module.exports=router;
