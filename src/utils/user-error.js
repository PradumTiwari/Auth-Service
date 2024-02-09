const AppErrors=require('./error-handler');
class UserError extends AppErrors{
    constructor({message,explaination,statusCode}){
       
        this.message=message;
        this.explaination=explaination;
        this.name="UserError";
        this.statusCode=statusCode;
        super();
    }
}


module.exports=UserError;