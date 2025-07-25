const express= require("express")
const authRoutes=require("./routes/auth.routes")

const app =express();
express.Router('/auth',authRoutes)
app.use(express.json())
app.use("cookie-parser")
module.exports=app