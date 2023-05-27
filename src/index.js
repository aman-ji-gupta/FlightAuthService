const express = require("express");
const bodyParser = require("body-parser");

const {PORT , JWT_KEY} = require("../src/config/serverConfig");
const ApiRoutes = require("./routes/index");

const UserService = require("./services/user-service");
const userser = new UserService();

 //create the express object
 const app = express();

const setupAndStartServer = async ()=>{
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT,async ()=>{
          console.log(`server started at port ${PORT}`);
        // const res =  userser.createToken({ name : "aman" , id : 1});
        // console.log(res);

        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW1hbiIsImlkIjoxLCJpYXQiOjE2ODUxODgxOTV9.RuupoEFDmOW70DUoFWU3QjspSMvUG4LYTYUaGaH9luI";
        const res = userser.verifyToken(token);
        console.log(res);
    });
}

setupAndStartServer();