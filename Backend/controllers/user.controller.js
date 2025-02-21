const userModel = require("../models/user.model");
const userService = require("../services/user.service")
const { validationResult } = require("express-validator")
const blackListTokenModel = require("../models/blackList.model");

//Register
module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { fullname, email, password } = req.body;

    const isUserAlready = await userModel.findOne({ email });

    if (isUserAlready) {
        return res.status(400).json({ message: 'User already exist' });
    }
    const hashPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword
    })

    const token = user.generateAuthToken();
    res.status(201).json({ token, user });
}

//Login
module.exports.loginUser=async (req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const {email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password");

    if(!user){
        return res.status(401).json({message:"Invalid email or password"});
    }

    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:"Invalid email or password"});
    }

    const token = user.generateAuthToken();
    res.cookie("token",token);
    res.status(201).json({ token, user });
}

//Get User Profile
module.exports.getUserProfile=async (req,res,next)=>{
    res.status(200).json(req.user);
};

//Logout
module.exports.logoutUser=async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    res.clearCookie("token");
    // const blackListToken = new blackListTokenModel({token});
    // await blackListToken.save();

    //The above two lines can be written as below

     await blackListTokenModel.create({token});
     
    res.status(200).json({message:"Logout success"});
}