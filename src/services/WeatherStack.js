var axios = require('axios');
var Weather = require('./WeatherService');
class WeatherStackService extends Weather {

    async getByCelsius() {
        const res = await axios.get('http://api.weatherstack.com/current?access_key=30871e7437d50a93e989561bb3a4c5e8&query=Melbourne?units=m');
        return this.formatResponse(res.data);
    }

    formatResponse(response) {
        let result = {};
        result.wind_speed = this.kmhToMeterperhour(response.current.wind_speed);
        result.temperature_degrees = response.current.temperature;
        console.log("result", result);
        return result;
    }
}


module.exports = WeatherStackService