const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

//Register a new captain
module.exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { fullname, email, password, vehicle } = req.body;
        const existingUser = await captainModel.findOne({email});

        if (existingUser) {
            return res.status(400).json({ error: "Captain already exists" });
        }

        const hashPassword = await captainModel.hashPassword(password);

        const user = await captainService.createUser(
            {
                firstname: fullname.firstname,
                lastname: fullname.lastname,
                email,
                password: hashPassword,
                color: vehicle.color,
                plate: vehicle.plate,
                capacity: vehicle.capacity,
                vehicleType: vehicle.vehicleType
            });
        const token = user.generateAuthToken();
        res.status(201).json({token, user});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

