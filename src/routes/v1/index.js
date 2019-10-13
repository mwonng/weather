var express = require('express');
var router = express.Router();
var WeatherService = require('../../services/WeatherStack');
var WeatherServiceAlt = require('../../services/alter_services/OpenWeatherMap');

var weather = new WeatherService()
var weatherServiceAlt = new WeatherServiceAlt()

router.get('/weather', async function (req, res) {
    try {
        const result = await weather.getByCelsius();
        res.send(result);
    } catch (error) {
        res.send(error);
    }

});

router.get('/open', async function (req, res) {
    console.log("run open")
    try {
        const result = await weatherServiceAlt.getByCelsius();
        res.send(result);
    } catch (error) {
        res.send(error);
    }

});

module.exports = router