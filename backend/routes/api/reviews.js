const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Review } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const reviewValidations = [
    check(`rating`)
        .exists({ checkFalsy: true })
        .notEmpty()
        .isLength({ max: 9 })
        .withMessage('Please provide a valid price'),
    check(`review`)
        .exists({ checkFalsy: true })
        .notEmpty()
        .isLength({ max: 500 })
        .withMessage('Please provide a valid review '),
    handleValidationErrors,
];

// Get all reviews for spot
router.get('/',
asyncHandler(async(req, res) => {
    const reviews = await Review.findAll()
    return res.json(reviews)
}));

// Add a review
router.post('/',
requireAuth,
reviewValidations,
asyncHandler(async (req, res) => {
    const { spotId, userId, review, rating } = req.body;
    const newReview = await Review.create({ userId, spotId, rating, review });
    return res.json({ newReview })
}));

// Edit a review
router.put('/:id',
requireAuth,)
asyncHandler(async (req,res) => {
    const { rating, review } = req.body;

})

// Delete a review
router.delete('/:id',
requireAuth,
asyncHandler(async (req, res) => {
    const { id } = req.body;
    const review = await Review.findByPk(id)
    await Review.destroy({
        where: {
            id: review.id
        }
    })
    return res.json(review)
}));

module.exports = router;
