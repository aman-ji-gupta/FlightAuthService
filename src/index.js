const  express = require("express");

const {PORT} = require("../src/config/serverConfig");

const setupAndStartServer = async ()=>{

    //creating express object
    const app = express();

    app.listen(PORT,()=>{
        console.log(`server started at port ${PORT}`);
    })
}

setupAndStartServer();