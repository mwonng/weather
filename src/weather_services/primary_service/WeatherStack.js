var axios = require('axios');
var Weather = require('../Weather');
var CONST = require('../../const');

class WeatherStackService extends Weather {
    constructor() {
        super();
    }

    async getByCelsius(city) {
        try {
            const res = await axios.get(`http://api.weatherstack.com/current?access_key=${CONST.PRIMARY_API_KEY}&query=${city}`);
            return this.formatResponse(res.data);
        } catch (e) {
            // please keep return error string to catch the error if primary service not response or other errors.
            return 'error';
        }
    }

    formatResponse(response) {
        let result = {};
        result.wind_speed = this.kmhToMeterperhour(response.current.wind_speed);
        result.temperature_degrees = response.current.temperature;
        return result;
    }
}


module.exports = new WeatherStackService()