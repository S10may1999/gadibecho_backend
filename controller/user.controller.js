const model=require("../models/index")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");


const userCreateFucntion=(req,res)=>{
    model.User.findOne({where:{email:req.body.email}}).then(result=>{
        if(result)
        {
                res.status(403).json({
                    message:"User already exist !!"
                })
        }
        else
        {
            bcrypt.genSalt(10,(error,salt)=>{
                bcrypt.hash(req.body.password,salt,(error,hash)=>{
                    const data={
                        uid:Date.now().toString(),
                        full_name:req.body.full_name,
                        email:req.body.email,
                        mobile:req.body.mobile,
                        profile_photo:req.body.profile_photo,
                        password:hash,
                    }
                    model.User.create(data).then(result=>{
                        res.status(201).json({
                            message:"Account created successfully !!",
                            result:result,
                        })
                    }).catch(err=>{
                        res.status(500).json({
                            message:"Something went wrong !!",
                            error:err
                        })
                    })
                })
            })
        }
    }).catch(
        err=>{
            res.status(500).json({
                message:"Something went wrong !!",
                error:err
            })
        }
    )

}

const userAccountLoginFunction=(req,res)=>{
    model.User.findOne({where:{email:req.body.email}}).then(result=>{
        if(result===null){
            res.status(404).json({
                message:"No Account found !! please signup "
            })
        }
        else
        {
            bcrypt.compare(req.body.password,result.password,(error,access)=>{
                if(access){
                    const token=jwt.sign(
                        {
                            email:result.email,
                            uid:result.uid
                        },
                        "secret",
                       function(error,token){
                        res.status(200).json({
                            message:"Account authenticated successfully !!",
                            token:token
                        })
                       }
                    )
                }
            })
        }
    })
}

const userDataGetFunction=(req,res)=>{
    model.User.findAll().then((result) => {
        res.status(200).json({
            message:"Data fected successfully !!",
            data:result
        })
    }).catch((err) => {
        res.status(500).json({
            message:"somthing went wrong !!",
            error:err
        })
    });
}


const userFunction=(req,res)=>{
    console.log(req.body)
    res.status(200).json({
        message:"Account created successfully !!",   
    })
}


module.exports={
    userfunction:userFunction,
    userData:userDataGetFunction,
    newUser:userCreateFucntion,
    signin:userAccountLoginFunction
}