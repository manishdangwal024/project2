const mongoose= require("mongoose");

const userschema= new mongoose.Schema({
    username:{
        type:String,  // schema level validation
        unique:true,
        required:true
    },
    password:{
        type:String
    }

})
const usermodel= mongoose.model("user",userschema)
module.exports=usermodel