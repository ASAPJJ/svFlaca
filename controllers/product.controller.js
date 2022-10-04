const ctrlproduct={};
ctrlproduct.getproduct=(req,res)=>{
    res.send({
        message:"Petición get"
    })
}
ctrlproduct.putproduct=(req,res)=>{
    res.send({
        message:"Petición put"
    })
}
ctrlproduct.postproduct=(req,res)=>{
    res.send({
        message:"Petición post"
    })
}
ctrlproduct.deleteproduct=(req,res)=>{
    res.send({
        message:"Petición delete"
    })
}
module.exports=ctrlproduct;