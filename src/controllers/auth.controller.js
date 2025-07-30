const userModel=require("../model/user.model")
const jwt =require("jsonwebtoken")
const bcrypt=require('bcryptjs')

async function registerController(req,res){
    const {username,password}=req.body

    const isUserAlreadyExist=await userModel.findOne({
        username
    })
    if(isUserAlreadyExist){
        return res.status(400).json({message:"useralready exist"})
    }

    const user =await userModel.create({
        username,
        password:await bcrypt.hash(password,10)
    })

    const token =jwt.sign({id:userModel._id},process.env.JWT_SECRET)
    res.cookie("token",token)
    return res.status(201).json({message:"user registered successfully"})
}


async function loginController(req,res) {
    const {username,password}=req.body
    const user=await userModel.findOne({
        username
    })
    if(!user){
        return res.status(400).json({message:"user not found"})
    }
    const isPasswordValid=await bcrypt.compare(password,user.password)

    if(!isPasswordValid){
        return res.status(400).json({message:"Invalid Password"})
    }

    const token =jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)
    res.cookie("token",token)
    res.status(200).json({
        message:"user logged in successfully",
        user:{
            username:user.username,
            id:user._id
        }

    })
}

module.exports={
    registerController,
    loginController
}