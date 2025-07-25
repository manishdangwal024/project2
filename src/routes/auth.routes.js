const express = require("express")
const usermodel= require("../model/user.model")
const jwt =require(json-web-token)
const router = express.Router();



router.post("/register",async(req,res)=>{
    const {username,password}=req.body;

    const existingUSer=await usermodel.findOne({
        username
    })
    if(existingUSer){
        return res.status(409).json({
            message:"username already exist"
        })
    }

    const user = await usermodel.create({
        username,password
    })
    const token = jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET)
    res.cookie('token',token)
    res.status(201).json({
        messagee:"user registerd successfully",
        user
    })

})









module.exports=router

