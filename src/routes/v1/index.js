var express = require('express');
var router = express.Router();
var weatherServiceAlt = require('../../weather_services/alter_services/OpenWeatherMap');

var MainService = require('../../Service');
var service = new MainService();

router.get('/weather', async function (req, res) {
    const { city } = req.query;

    const isExpired = service.isExpired(req.app.get('lastFetchTimestamp'))
    if (!isExpired || req.app.get('isPending')) {
        const result = req.app.get('cachedTemp');
        res.send(result);
    } else {
        try {
            req.app.set('isPending', true)
            const result = await service.getLatestTemp(city)
            req.app.set('isPending', false)
            res.app.set('lastFetchTimestamp', Date.now())
            res.app.set('cachedTemp', result)
            res.send(result);
        } catch (error) {
            res.send(req.app.get('cachedTemp'));
        }
    }

});

router.get('/open', async function (req, res) {
    try {
        const result = await weatherServiceAlt.getByCelsius();
        res.send(result);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router