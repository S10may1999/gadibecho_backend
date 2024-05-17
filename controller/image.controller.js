const imageUpload=(req,res)=>{
    if(req.file.filename){
        res.status(200).json(
            {
                message:"uploaded successfully !!",
                url:req.file.filename
            }
        )
    }
    else
    {
        res.status(500).json(
            {
                message:"Something went wrong"
            }
        )
    }
}

module.exports={
    upload:imageUpload
};