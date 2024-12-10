const express=require("express");
const router=express.Router();
const {body}=require("express-validator");
const userController=require("../controllers/user.controller");

router.post("/register",[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name mustbe at least 3 charecters long'),
    body('password').isLength({min:6}).withMessage('Password  mustbe at least 6 charecters long')
],userController.registerUser)


module.exports = router; 