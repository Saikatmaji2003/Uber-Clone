const captainModel = require("../models/captain.model");
const blackListTokenModel = require("../models/blackList.model");
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
        const existingUser = await captainModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: "Captain already exists" });
        }

        const hashPassword = await captainModel.hashPassword(password);

        const captain = await captainService.createUser(
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
        const token = captain.generateAuthToken();
        res.status(201).json({ token, captain });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

//Login a captain
module.exports.login = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { email, password } = req.body;
        const captain = await captainModel.findOne({ email }).select("+password");

        if (!captain) {
            return res.status(400).json({ error: "Invalid email or password" });
        }
        const validPassword = await captain.comparePassword(password);
        if (!validPassword) {
            return res.status(400).json({ error: "Invalid email or password" });
        }
        const token = captain.generateAuthToken();
        res.cookie("token", token);
        res.status(200).json({ token, captain });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

//Get captain profile
module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json({ captain: req.captain });
};

//Logout a captain
module.exports.logout = async (req, res) => {
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    await blackListTokenModel.create({ token });
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successfully" });
}