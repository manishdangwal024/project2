const express = require("express");
const {registerController,loginController}=require('../controllers/auth.controller')
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/register",registerController );

router.post("/login",loginController);



// router.get("/user", async (req, res) => {
//   const token = req.cookies.tooken;
//   if (!token) {
//     return res.status(401).json({
//       message: "unathorized",
//     });
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = router;
