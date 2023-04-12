const UserService = require("../services/user-service");

const userservice = new UserService();

const create = async (req,res)=>{
    try {
        const user = await userservice.create({
            email : req.body.email,
            password : req.body.password
        })
        return res.status(201).json({
            data : city,
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

module.exports = {
    create
}
