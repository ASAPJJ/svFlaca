//guardar en una constante
const ctrlhome={};
ctrlhome.gethome=(req,res)=>{
    res.send({
        message:"Petición get"
    })
}
ctrlhome.puthome=(req,res)=>{
    res.send({
        message:"Petición put"
    })
}
ctrlhome.posthome=(req,res)=>{
    res.send({
        message:"Petición post"
    })
}
ctrlhome.deletehome=(req,res)=>{
    res.send({
        message:"Petición delete"
    })
}
module.exports=ctrlhome;