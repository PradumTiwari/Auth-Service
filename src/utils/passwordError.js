class PasswordError extends Error{
    constructor(message,status,suggestions){
        super();
        this.message=message;
        this.status=status;
        this.suggestions=suggestions;
    }
}

module.exports=PasswordError;