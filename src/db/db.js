const mongoose= require("mongoose");
function COnnectToDb(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Connected to mongodb");
    })
    .catch((error)=>{
        console.log("error in connecting to database",error);
    })
}
module.exports=COnnectToDb;