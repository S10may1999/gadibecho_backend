const express=require("express");
const carController=require("../controller/car.controller");


const routes=express.Router();


routes.get("/",carController.getfunction);
routes.post("/carDetails",carController.carDataSave)
routes.post("/updateCar",carController.updateCarDetails)
routes.post("/deleteCar",carController.deleteCarDetails)


module.exports=routes;