const {User} = require("../models/index");

class UserRepository{

    async create(data){
       try {
        const user =await User.create(data);
        return user;
       } catch (error) {
        console.log("Something went wrong at repository layer..!");
        throw error
    }
    }

    async destroy(userid){
        try {
         await User.destroy({
            where : {
                id : userid
            }
         });
         return true;
        } catch (error) {
         console.log("Something went wrong at repository layer..!");
         throw error
     }
     }


     async getById(userid){
        try {
            const user = await User.findByPk(userid, {
                attributes : ['email' , 'id']
            });
            return user;
        } catch (error) {
            console.log("Something went wrong at repository layer..!");
            throw error
        }
     }

     async getUserByEmail(email){
        try { 
            const user = await User.findOne({
                where : {
                    email : email
                }
            });
            return user;
        } catch (error) {
            console.log("Something went wrong at repository layer..!");
            throw error
        }
     }

}

module.exports = UserRepository;