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
        .isInt({
            min: 1,
            max: 5,
        })
        .withMessage('Please provide a valid rating'),
    check(`review`)
        .exists({ checkFalsy: true })
        .notEmpty()
        .isLength({
            min: 1,
            max: 500 })
        .withMessage('Please provide a valid review'),
    handleValidationErrors,
];

// Get all reviews for spot
router.get('/spots/:id/reviews',
asyncHandler(async(req, res) => {
    const paramId = req.params.id * 1;
    const reviews = await Review.findAll({
        where: {
            spotId: paramId
        }
    })
    return res.json(reviews)
}));

// Add a review
router.post('/spots/:id/reviews',
requireAuth,
reviewValidations,
asyncHandler(async (req, res) => {
    const spotId = req.params.id * 1;
    const { userId, review, rating } = req.body;
    const newReview = await Review.create({ userId, spotId, rating, review });
    return res.json(newReview)
}));

// Edit a review
router.put('/reviews/:id',
reviewValidations,
requireAuth,
asyncHandler(async (req,res) => {
    const reviewId = req.params.id * 1;
    const { rating, review } = req.body;

    const newReview = await Review.findByPk(reviewId);
    await newReview.update({ rating, review })
    const updatedReview = await Review.findByPk(reviewId)
    return res.json(updatedReview)
}));

// Delete a review
router.delete('/reviews/:id',
requireAuth,
asyncHandler(async (req, res) => {
    const id = req.params.id * 1;
    const review = await Review.findByPk(id)
    await review.destroy()
    return res.json(id)
}));

module.exports = router;
