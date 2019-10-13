var axios = require('axios');
var CONST = require('../const')

class Weather {
    constructor() { }

    /**
     * define your API call here, and return the data from response
     * overwrite if you want to update your provider API call
     */
    async getByCelsius() {
        try {
            const res = await axios.get(`http://api.weatherstack.com/current?access_key=${CONST.PRIMARY_API_KEY}`);
            return this.formatResponse(res.data);
        } catch (e) {
            // please keep return error string to catch the error if primary service not response or other errors.
            return 'error';
        }
    }

    /**
     * formate the response as you want, if need, please overwrite with ur own sub-class
     * @param {Object} response
     */
    formatResponse(response) {
        let result = {};
        result.wind_speed = response.current.wind_speed;
        result.temperature_degrees = response.current.temperature;
        return result;
    }

    /**
     * format convert helper for convert data in formatResponse function
     * e.g.
     *      from km/h to m/s
     *      Celsius to Fahrenheit
     * @param {Number} kmh
     */
    kmhToMeterperhour(kmh) {
        return Math.round((Number(kmh) * 1000 / 3600) * 100) / 100
    }
}


module.exports = Weather