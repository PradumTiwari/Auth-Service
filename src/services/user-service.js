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


    async signIn(email, plainPassword){
        try {
            //step1-->>>> Find User By Email
            const user = await this.userRepository.getByEmail(email);
            //step2--> Compare Incoming PlainPAssword with  Store USer object Encrypted Password    
            const passwordsMatch = this.checkPassword(plainPassword, user.password);
            if(!passwordsMatch){
                console.log("Password Does Not Match");
                throw {error:"Incorrect Password"};

            }

             //step3--->IF the password Matches we will create a token and return it
             const newJWT=this.createToken({email:user.email,id:user.id});
             //Step 4---> Return the Token
             return newJWT;
        } catch (error) {
            console.log("Something Went Woring In the Service Layer");
            throw error;
        }
    }

    async isAuthenticated(token){
        try {

            const response=this.verifyToken(token);
            if(!response){
                throw {error:"Token Verification Failed"};
            }
            const user=await this.userRepository.getById(response.id);
            if(!user){
                throw {error:"User Not Found with the corresponding Token Exists"};
            }

             return user.id;
            
        } catch (error) {
         console.log("Something Went Woring In the Auth Process");   
         throw error;
        }
    }






 createToken(user){
    try {
        const result=jwt.sign(user,JWT_KEY,{expiresIn:'1d'});
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