const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js');
const imagesRouter = require('./images.js');
const reviewsRouter = require('./reviews.js');

router.use('/spots', spotsRouter);
router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/images', imagesRouter);
router.use('/reviews', reviewsRouter);


module.exports = router;
