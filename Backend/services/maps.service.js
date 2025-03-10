const axios = require('axios')
const captainModel= require("../models/captain.model")

//getAddress coordinates
module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);

        // console.log("Google Maps API Response:", response.data); 

        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng

            }
        }
        else {
            throw new Error("Unable to fetch coordinates");
        }
    }
    catch (error) {
        console.log(error);
        throw error
    }
}

//getDistance and time
module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://routes.googleapis.com/directions/v2:computeRoutes`;

    const requestBody = {
        origin: {
            address: origin,
        },
        destination: {
            address: destination,
        },
        travelMode: "DRIVE",
    };

    try {
        const response = await axios.post(url, requestBody, {
            headers: {
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': apiKey,
                'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters',
            },
        });

        // console.log("Routes API Response:", JSON.stringify(response.data, null, 2));

        if (response.data.routes && response.data.routes.length > 0) {
            const route = response.data.routes[0];

            // Convert distance from meters to kilometers
            const distanceKm = (route.distanceMeters / 1000).toFixed(2);

            // Convert duration from seconds to days, hours, and minutes
            const durationSeconds = parseInt(route.duration.replace('s', ''));
            const durationText = formatDuration(durationSeconds);

            return {
                distance: {
                    text: `${distanceKm} km`,
                    value: route.distanceMeters, // Distance in meters
                },
                duration: {
                    text: durationText, // Human-readable duration (e.g., "1 day 2 hours")
                    value: durationSeconds, // Duration in seconds
                },
                status: 'OK',
            };
        } else {
            throw new Error('No routes found');
        }
    } catch (err) {
        console.error("Error in getDistanceTime:", err.message);
        return {
            distance: null,
            duration: null,
            status: 'ERROR',
            message: err.message,
        };
    }
};

// Helper function to format duration
// helper function of getDistance and time
function formatDuration(durationSeconds) {
    const days = Math.floor(durationSeconds / (3600 * 24));
    const hours = Math.floor((durationSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((durationSeconds % 3600) / 60);

    let durationString = '';
    if (days > 0) {
        durationString += `${days} day${days > 1 ? 's' : ''} `;
    }
    if (hours > 0) {
        durationString += `${hours} hour${hours > 1 ? 's' : ''} `;
    }
    if (minutes > 0) {
        durationString += `${minutes} minute${minutes > 1 ? 's' : ''}`;
    }

    return durationString.trim();
}


//getCompleteSuggestion
module.exports.getCompleteSuggestion = async (input) => {
    if (!input) {
        throw new Error('query is required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;
    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            return response.data.predictions
            // return response.data.predictions.map(prediction => prediction.description).filter(value => value);
        } else {
            throw new Error('Unable to fetch suggestions');
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}


//getCaptains in radius
module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {

    // radius in km

    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [ [ ltd, lng ], radius / 6371 ]
            }
        }
    });

    return captains;


}