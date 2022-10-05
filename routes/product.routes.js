const router= require('express').Router();
const {
getproduct,
postproduct,
putproduct,
deleteproduct
}=require('../controllers/product.controller');

//requiere controladores
router.get('/product',getproduct);
router.post('/product',postproduct);
router.put('/product',putproduct);
router.delete('/product',deleteproduct);

module.exports=router;
