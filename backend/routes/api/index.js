const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js')

router.use('/spots', spotsRouter)
router.use('/session', sessionRouter);
router.use('/users', usersRouter);


module.exports = router;
