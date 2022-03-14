const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Spot, User, Image, Review } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const hostFormValidations = [
    check(`address`)
        .exists({ checkFalsy: true })
        .notEmpty()
        .isLength({ max: 42 })
        .withMessage('Please provide a valid address'),
    check(`city`)
        .exists({ checkFalsy: true })
        .notEmpty()
        .isLength({ max: 50 })
        .withMessage('Please provide a valid city'),
    check(`country`)
        .exists({ checkFalsy: true })
        .notEmpty()
        .isLength({ max: 42 })
        .withMessage('Please provide a valid country'),
    check(`state`)
        .exists({ checkFalsy: true })
        .notEmpty()
        .isLength({ max: 15 })
        .withMessage('Please provide a valid state'),
    check(`name`)
        .exists({ checkFalsy: true })
        .notEmpty()
        .isLength({ max: 60 })
        .withMessage('Please provide a valid name'),
    check(`price`)
        .exists({ checkFalsy: true })
        .notEmpty()
        .isLength({
            min: 1,
            max: 9 })
        .isInt()
        .withMessage('Please provide a valid price'),
    check(`url`)
        .exists({ checkFalsy: true })
        .notEmpty()
        .isURL()
        .withMessage('Please provide a valid url'),
    handleValidationErrors,
];

// Getting all spots
router.get('/',
asyncHandler(async(req, res) => {
    const spots = await Spot.findAll({
        include: [ User, Image ]
    })
    return res.json(spots)
}));

// Getting one spot
router.get('/:id',
asyncHandler(async(req, res) => {
    const spotId = req.params.id * 1;
    const spot = await Spot.findByPk(spotId, {
        include: [ Image, User, Review ]
    })
    return res.json(spot)
}));

// Add a spot
router.post('/',
requireAuth,
hostFormValidations,
asyncHandler(async (req, res) => {
    const { url, userId, address, city, state, country, name, price } = req.body;
    const spot = await Spot.create({ userId, address, city, state, country, name, price });
    const img = await Image.create({ spotId: spot.id, url })
    return res.json({ spot, img })
}));

// Delete a spot
router.delete('/:id',
requireAuth,
asyncHandler(async (req, res) => {
    const id  = req.params.id * 1;
    const spot = await Spot.findByPk(id)
    await spot.destroy()
    return res.json(id)
}));

// Edit a spot
router.put('/',
hostFormValidations,
requireAuth,
asyncHandler(async (req, res) => {
    const id = req.body.spotId
    const { url, address, city, state, country, name, price } = req.body;
    const selectedSpot = await Spot.findByPk(id)
    const selectedImg = await Image.findOne({
        where: {
            spotId: id
        }
    });
    await selectedSpot.update({ address, city, state, country, name, price });
    await selectedImg.update({ url })

    const spot = await Spot.findByPk(id, {
        include: [ User, Image ]
    })
    return res.json(spot)
}))

module.exports = router;
