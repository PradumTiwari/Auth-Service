const validateUserAuth=(req,res,next)=>{
    if(!req.body.email||!req.body.password){
        return res.status(400).json({
            message:"Email and password are required",
            sucess:false,
          data:{},
          err:"Email or Password is missing"
        })
    }

    //If Entered Correctly call the next() function
    next();
}

const validateisAdmin=(req,res,next)=>{
    if(!req.body.id){
        return res.status(400).json({
            message:"ID is required",
            sucess:false,
          data:{},
          err:"ID is missing"
        })
    }
    next();
}

module.exports={
    validateUserAuth,
    validateisAdmin

}