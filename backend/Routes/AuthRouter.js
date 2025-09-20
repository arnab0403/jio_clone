const express = require("express");
const authRouter = express.Router();
const {signUp,login,logout, resetPassword, forgotPassword}=require("../Controller/AuthController");

authRouter
    .post("/signup",signUp)
    .post("/login",login)
    .post("/logout",logout)
    .post("/resetPassword",resetPassword)
    .post("/forgotPassword",forgotPassword)
    
module.exports=authRouter;