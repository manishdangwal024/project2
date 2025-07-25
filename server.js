require("dotenv").config();
const app =require("./src/app");
const ConnectTodb=require("./src/db/db");
ConnectTodb();
app.listen(3000,()=>{
    console.log("Server is running on the server 3000");
});