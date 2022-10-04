const {model, schema}=require('moongose');
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
},{timestamps: true,
  versionkey:false});
  
module.exports=model('product',productSchema)