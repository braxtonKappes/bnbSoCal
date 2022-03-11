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
    check(`name`)
        .exists({ checkFalsy: true })
        .notEmpty()
        .isLength({ max: 60 })
        .withMessage('Please provide a valid name'),
    check(`price`)
        .exists({ checkFalsy: true })
        .notEmpty()
        .isLength({ max: 9 })
        .withMessage('Please provide a valid price'),
    check(`url`)
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a valid url'),
    handleValidationErrors,
];

// Getting all spots
router.get('/', asyncHandler(async(req, res) => {
    const spots = await Spot.findAll({
        include: [ User, Image ]
    })
    return res.json(spots)
}));

// Getting one spot
router.get('/:id', asyncHandler(async(req, res) => {
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
    const spot = await Spot.create(req.body)
    return res.json(spot)
}));

// Delete a spot
router.delete('/:id',
requireAuth,
asyncHandler(async (req, res) => {
    const element = await Spot.findByPk(req.body)
    await Spot.destroy({
        where: {
            id: element.id
        }
    })
    return res.json(element)
}));

// Edit a spot
router.put('/',
requireAuth,
asyncHandler(async (req, res) => {
    const spotId = req.body.id
    const editedSpot = await Spot.findByPk(spotId)
    await editedSpot.update(req.body)
    return res.json(editedSpot)
}))
module.exports = router;
