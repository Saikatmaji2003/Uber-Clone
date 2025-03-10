const ridesService = require('../services/ride.service');
const { validationResult } = require('express-validator');
const mapService = require('../services/maps.service');
const { sendMessageToSocketId } = require('../socket');
const rideModel = require('../models/ride.model');

// Create a new ride request
module.exports.createRide = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { userId, pickup, destination, vehicleType } = req.body;
    // console.log(pickup, destination, vehicleType)
    try {
        const ride = await ridesService.createRide({ user: req.user._id, pickup, destination, vehicleType });
        res.status(201).json(ride);

        // Send notification to driver about the new ride
        const pickupCoordinates = await mapService.getAddressCoordinate(pickup)
        // console.log(pickupCoordinates)
        const captainsInradious = await mapService.getCaptainsInTheRadius(pickupCoordinates.ltd, pickupCoordinates.lng, 5000)
        ride.otp = " "
        captainsInradious.map(async (captain) => {
            // console.log(captain)
            // console.log(ride)
            sendMessageToSocketId(captain.socketId, {
                    event: 'new-ride',
                    data: ride
                })
        })
        //  console.log(captainsInradious)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get fare

module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { pickup, destination } = req.query;
    try {
        const fare = await ridesService.getFare(pickup, destination);
        res.status(200).json(fare);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}