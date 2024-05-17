const express=require("express");

const checkAuth=require("../middleware/auth-check")
const imageUpload=require("../controller/image.controller");
const imageUploader=require("../helper/image-upload")

const routes=express.Router();

routes.post("/",checkAuth.auth,imageUploader.upload.single("images"),imageUpload.upload);


module.exports=routes;