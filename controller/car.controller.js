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
    const carDetails={
    uid: req.body.uid,
    cid:Date.now().toString(),
    car_name: req.body.car_name,
    purchase_date: req.body.purchase_date,
    used_in_km: req.body.used_in_km,
    model: req.body.model,
    offer_price: req.body.offer_price
    }
    carModel.Cars.create(carDetails).then((result)=>{
        res.status(201).json({
            message:"Successfully car details saved !!",
            data: result
        })
    }).catch((error)=>{
        res.status(500).json({
            message:"Something went wrong",
            error:error
        })
    })   
}

//update car details urls formate : http://192.168.56.1:3000/cars/updateCar?uid=1715237952866&cid=1715936002699

const updateCarDetails=(req, res)=>{
    const {uid,cid}=req.query;
    carModel.Cars.findOne({where:{uid:uid, cid:cid}}).then((result)=>{
        if(!result)
            {
               return res.status(404).json({
                    message:"No Car Found !!"
                })
            }
            else
            {

             return carModel.Cars.update(req.body,{where:{uid:uid, cid:cid}}).then((updatedData)=>{
                    res.status(202).json({
                        message:"Updated Successfully !!",
                        updated:updatedData
                    })
                }).catch((error)=>{
                    res.status(500).json({
                        message:"Something went wrong please try again !!"
                    })
                })
            }
    }).catch((error)=>{
        res.status(500).json({
            message:"Something went wrong !!",
            error:error.message
        })
    })
}

const deleteCarDetails=(req,res)=>{
    const {uid,cid}=req.query
    carModel.Cars.findOne({where:{uid:uid,cid:cid}}).then((result)=>{
        if(!result){
            res.status(404).json({
                message:"No Car Details Found !!"
            })
        }
        else
        {
            carModel.Cars.destroy({where:{uid:uid,cid:cid}}).then(()=>{
                res.status(200).json({
                    message:"Deleted Successfully !!"
                }).catch((error)=>{
                    res.status(500).json({
                        message:"Something went Wrong !!",
                        error:error.message
                    })
                })
            })
        }
    }).catch((error)=>{
        res.status(500).json({
            message:"Something went Wrong !!",
            error:error.message
        })
    })
}

module.exports={
    getfunction:gettingCarDetails,
    carDataSave:postCarDetails,
    updateCarDetails:updateCarDetails,
    deleteCarDetails:deleteCarDetails
}