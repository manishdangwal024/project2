const express= require("express")
const router= express.Router()
const authMiddleware=require("../middleware/auth.middleware")
const multer = require("multer")
const upload =multer({storage:multer.memoryStorage()})
router.post('/',
    authMiddleware,
    upload.single('imgae'),
      createPostController)  // authmiddleware  req.user=user ka data contoller 
module.exports=router;