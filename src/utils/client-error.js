const AppError=require('./error-handler');
const {StatusCode}=require('http-status-codes');
class ClientError extends AppError{
    constructor(error){
        let errorName=error.name;
        let explaination=[];
        error.errors.forEach((err)=>{
            explaination.push(err.message);
        })

      

        super(errorName,"Not Able to validate the data sent in request",explaination,StatusCode.BAD_REQUEST )
    }
}

module.exports=ClientError;