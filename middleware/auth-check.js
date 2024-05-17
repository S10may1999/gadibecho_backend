const jwt =require("jsonwebtoken");

const checkAuth=(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(" ")[1];
        const decode=jwt.verify(token,"secret");   
        req.userData=decode;
        next();
    }
    catch(error)
    {   
        res.status(500).json({
            message:"invalid Web token or Expired !!",
        })
    }
}


module.exports={
    auth:checkAuth
};