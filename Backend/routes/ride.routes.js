const express = require("express");
const router = express.Router()
const { body, query } = require('express-validator');
const authMiddleware = require("../middlewares/auth.middleware");
const rideController = require("../controllers/ride.controller");

router.post("/create", authMiddleware.authUser, [
    body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup Address'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination Address'),
    body('vehicleType').isString().isIn(['auto', 'car', 'moto']).withMessage('vehicleType is required'),
], rideController.createRide);

router.get("/get-fare", authMiddleware.authUser,
    query('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup Address'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination Address'),
    rideController.getFare);


module.exports = router;