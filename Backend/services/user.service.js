const userModel=require("../models/user.model");

module.exports.createUser=async ({firstname,lastname,email,password})=>{
    if(!firstname || !email ||!password){
        throw new Error('All fildes are required');
        
    }
    const user=userModel.create({
        fullname:{
            firstname,
            lastname
        },
        password,
        email
    })
    return user;
} 