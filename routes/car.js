const express=require("express");
const carController=require("../controller/car.controller");


const routes=express.Router();


routes.get("/",carController.getfunction);


module.exports=routes;