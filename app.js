const express=require("express");
const userRoute=require("./routes/user");
const imageRoute=require("./routes/image")
const carRoute=require("./routes/car")

const app=express();



app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use("/uploads",express.static("uploads"))
app.use("/user",userRoute);
app.use("/images",imageRoute);

app.use("/cars",carRoute);


module.exports=app;
