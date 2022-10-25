const app = require('../app');

const router = require('express').Router();

router.use('/post', require('./api/post'));

router.use('/autor', require('./api/autor'));


module.exports = router;