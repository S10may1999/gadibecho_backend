const carModel=require("../models/index");

const gettingCarDetails=(req,res)=>{
    carModel.Cars.findAll().then((result) => {
        res.status(200).json({
            message:"Data fetched successfully !!",
            data:result
        })
        
    }).catch((err) => {
        res.status(500).json({
            message:"Something went wrong !!"
        })        
    });

}


const postCarDetails=(req,res)=>{
    
}


module.exports={
    getfunction:gettingCarDetails,
}