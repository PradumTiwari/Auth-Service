const {StatusCodes}=require('http-status-codes');

class AppErrors extends Error{
    constructor(name,message,explaination,statusCode){
       this.message="Something went wrong",
       this.explaination="Something Went Wrong",
       this.name="AppErrr",
       this.statusCode=StatusCodes.INTERNAL_SERVER_ERROR
    }

  





}


module.exports=AppErrors;