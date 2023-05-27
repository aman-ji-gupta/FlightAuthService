const UserService = require("../services/user-service");

const userservice = new UserService();

const create = async (req,res)=>{
    try {
        console.log(req.body);
        const user = await userservice.create(req.body)
        return res.status(201).json({
            data : user,
            success : true,
            message : "successfully created a User",
            err : {}
        })
    } catch (error) {
        console.log(error);
    return res.status(500).json({
        data : {},
        success : false,
        message : "Not able to create a User",
        err : error
    })
    }
}

const signin = async (req , res) => {
    try {
        const user = await userservice.signin(req.body.email , req.body.password);
        return res.status(200).json({
            data : user,
            success : true,
            message : "successfully signin User",
            err : {}
        })
        
    } catch (error) {
        console.log(error);
    return res.status(500).json({
        data : {},
        success : false,
        message : "Not able to Sign in",
        err : error
    })
    }
}


const isAuthenticated = async (req,res)=>{
    try {
        const token = req.headers['x-access-token'];
        const response = await userservice.isAuthenticated(token);
        return res.status(200).json({
            data : response,
            success : true,
            message : "User is authenticated and the token is valid..!",
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            data : {},
            success : false,
            message : "Something went wrong",
            err : error
        })
    }
}

module.exports = {
    create,
    signin,
    isAuthenticated
}
