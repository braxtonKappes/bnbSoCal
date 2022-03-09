const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Spot, User } = require('../../db/models');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

// Getting all spots
router.get('/', asyncHandler(async(req, res) => {
    const spots = await Spot.findAll({
        include: [ User ]
    })
    return res.json(spots)
}))

module.exports = router;
