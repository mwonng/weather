var express = require('express');
var router = express.Router();
var weatherV1 = require('./v1')

// v1 route (http://localhost:8080/v1)
router.use('/v1', weatherV1);

// error page route (http://localhost:8080/error)
router.get('/error', function (req, res) {
    res.send('404 error!');
});

module.exports = router