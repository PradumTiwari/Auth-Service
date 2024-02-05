const { JWT_KEY } = require('../config/serverConfig');
const UserRepository=require('../repository/user-repository');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
class UserService{
    constructor(){
        this.userRepository=new UserRepository();

    }

    async create(data){
        try {
            const user=await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something Went Woring In the Service Layer");
           throw error;
        }
    }

 createToken(user){
    try {
        const result=jwt.sign(user,JWT_KEY,{expiresIn:'1h'});
        return result;
    } catch (error) {
        console.log("Something Went Wrong in Token Creation");
        throw error;
        
    }
 }

 verifyToken(token){
    try{
        const result=jwt.verify(token,JWT_KEY);
        return result;
    }
    catch(error){
        console.log("Something Went Wrong in Token Verification",error);
        throw error;
    }
 }

 checkPassword(userInputPassword,encryptedPassword){
    try {
        const result=bcrypt.compareSync(userInputPassword,encryptedPassword);
        return result;
    } catch (error) {
        console.log("Something Went Wrong in Password Verification");
        throw error;
    }
 }
 

}

module.exports=UserService;