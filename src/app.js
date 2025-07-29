const express= require("express")
const authRoutes=require("./routes/auth.routes")
const cookieParser = require("cookie-parser");
const app =express();
app.use('/api/auth',authRoutes)
app.use(express.json())
app.use(cookieParser())
module.exports=app