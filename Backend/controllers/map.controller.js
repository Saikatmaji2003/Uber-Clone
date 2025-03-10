const mapsService = require('../services/maps.service')
const { validationResult } = require('express-validator')

// ltd and lng
module.exports.getCoordinates = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { address } = req.query
    try {
        const coordinates = await mapsService.getAddressCoordinate(address);

        res.status(200).json(coordinates);
    }
    catch (error) {
        res.status(404).json({ message: "Coordinates not found" });
    }
}

//get distance and time
module.exports.getDistanceTime = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { origin, destination } = req.query
    try {
        const distanceTime = await mapsService.getDistanceTime(origin, destination);
        res.status(200).json(distanceTime);
    }
    catch (error) {
        res.status(404).json({ message: "Coordinates not found" });
    }
}

//get suggestion
module.exports.getCompleteSuggestion = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { input } = req.query
    try {
        const suggestions = await mapsService.getCompleteSuggestion(input);
        res.status(200).json(suggestions);
    }
    catch (error) {
        res.status(404).json({ message: "Coordinates not found" });
    }
}