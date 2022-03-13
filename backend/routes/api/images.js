const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Image } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


// const hostFormValidations = [
//     check(`url`)
//         .exists({ checkFalsy: true })
//         .notEmpty()
//         .isURL()
//         .withMessage('Please provide a valid url'),
//     handleValidationErrors
// ];

// // Add an image
// router.post('/',
// requireAuth,
// hostFormValidations,
// asyncHandler(async (req, res) => {
//     const { spotId, url } = req.body;
//     const img = await Image.create({ spotId, url })
//     return res.json(img)
// }));

// Edit an image
router.put('/:id',
requireAuth,
asyncHandler(async (req, res) => {

    const spotId = req.params.id * 1;
    const selectSpot = await Spot.findOne({
        include: {
            model: Image
        },
        where: {
            id: spotId
        }
    });
    await Spot.update(req.body, {
        where: { id: spotId },
        returning: true,
        plain: true,
    })
    return res.json(selectSpot)
}))

module.exports = router;
