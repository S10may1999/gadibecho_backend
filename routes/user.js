const express=require("express");
const userController=require("../controller/user.controller")
const authMiddleware=require("../middleware/auth-check")

const routes=express.Router();

routes.get("/",authMiddleware.auth,userController.userData);
routes.post("/new-user",userController.newUser);
routes.post("/user-login",userController.signin);
routes.post("/test",userController.userfunction);

module.exports=routes;