const {User}=require('../models/index')

class UserRepository{

     async create(data){
        try {
            const user=await User.create(data);
            return user;
            
        } catch (error) {
            console.log("Something Went Woring In the Repository Layer");
            throw error;
        }
     }

     async destroy(userId){
        try {
            await User.destroy({
                where:{id:userId}
            });
        } catch (error) {
            console.log("Something Went Woring In the Repository Layer");
            throw error;
        }
     }
}

module.exports = UserRepository;