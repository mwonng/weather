var axios = require('axios');
var Weather = require('../Weather');
var CONST = require('../../const')
class OpenWeatherService extends Weather {
    constructor(props) {
        super();
    }

    async getByCelsius(city) {
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${CONST.ALT_API_KEY}&units=metric`);
        return this.formatResponse(res.data);

    }

    formatResponse(response) {
        const result = {}
        result.wind_speed = response.wind.speed;
        result.temperature_degrees = response.main.temp;
        return result;
    }
}


module.exports = new OpenWeatherService()