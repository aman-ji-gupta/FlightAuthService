const express = require("express");
const bodyParser = require("body-parser");

const {PORT} = require("../src/config/serverConfig");
const ApiRoutes = require("./routes/index");

//const UserRepository = require("./repository/user-repository");
//const userrepo = new UserRepository();

 //create the express object
 const app = express();

const setupAndStartServer = async ()=>{
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT,async ()=>{
          console.log(`server started at port ${PORT}`);
       //  const data = await userrepo.getById(1);
         console.log(data);
    });
}

setupAndStartServer();