const {model, schema, models}=require('mongoose');
const productSchema= new schema({
    nombre:{
type: String, 
required: true
    },
    marca:{
type:String,
required:true
    },
    precio:{
type: Number, 
required:true
    }
})
module.exports=models('product',productSchema)