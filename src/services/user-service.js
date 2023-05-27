const UserRepository = require("../repository/user-repository");
const jwt = require("jsonwebtoken");
const {JWT_KEY} = require("../config/serverConfig")
const bcrypt = require("bcrypt");

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

    checkPassword(userInputPlainPassword , encryptedpassword){
        try {
            return bcrypt.compareSync(userInputPlainPassword,encryptedpassword)
        } catch (error) {
            console.log("Something went wrong in password comparision : " , error);
            throw error;
        }
    }

    async signin(email , plainPassword){

        try {
            
        //step->1 find the user with the given email
        const user = await this.userRepository.getUserByEmail(email);

        //step -> 2 compare the password
        const isMatch = this.checkPassword(plainPassword,user.password);
        
        if(!isMatch){
            console.log("Password doesnt match");
            throw {error : "Invalid password"};
        }

        //step -> 3 If password matched then create a token and send it to the user
        const newJwt = this.createToken({email : user.email , id : user.id});
        return newJwt;

        } catch (error) {
            console.log("Something went wrong in the signin process");
            throw error;
        }
    }

}

module.exports = UserService;
