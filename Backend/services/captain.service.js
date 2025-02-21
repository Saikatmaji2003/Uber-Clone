const captainModel = require("../models/captain.model");    

module.exports.createUser=async ({firstname, lastname, email, password, color, plate, capacity, vehicleType})=>{
    if(!firstname || !lastname || !email ||!password || !color || !plate || !capacity || !vehicleType){
        throw new Error('All fildes are required');
        
    }
    const user=captainModel.create({
        fullname:{
            firstname,
            lastname
        },
        password,
        email,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
    }});
    return user;
} 