const UserRepository = require("../repository/user-repository");
const jwt = require("jsonwebtoken");
const {JWT_KEY} = require("../config/serverConfig")

class UserService{

    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
       try {
        const user = await this.userRepository.create(data);
        return user;
       } catch (error) {
        console.log("Something went wrong at the service layer..!");
        throw error;
        }
    }

    async destroy(id){
        try {
         await this.userRepository.destroy(id);
         return true;
        } catch (error) {
         console.log("Something went wrong at the service layer..!");
         throw error;
        }
     }

    
    createToken(user){
        try {
            const result = jwt.sign(user,JWT_KEY,{expiresIn : '2d'});
            return result;
            
        } catch (error) {
            console.log("Something went wrong in token creation" , error);    
            throw error;
        }
    }

    verifyToken(token){
        try {
            const result = jwt.verify(token,JWT_KEY);
            return result;
            
        } catch (error) {
            console.log("Something went wrong in token Validation" , error);
            throw error;    
        }
    }

}

module.exports = UserService;
