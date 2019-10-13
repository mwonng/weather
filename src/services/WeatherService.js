var axios = require('axios');

class Weather {
    constructor() {
    }

    async getByCelsius() {
        const res = await axios.get('http://api.weatherstack.com/current?access_key=30871e7437d50a93e989561bb3a4c5e8&query=Melbourne');
        return this.formatResponse(res.data);
    }

    formatResponse(response) {
        let result = {};
        result.wind_speed = response.current.wind_speed;
        result.temperature_degrees = response.current.temperature;
        return result;
    }

    kmhToMeterperhour(kmh) {
        console.log("kmh =>", kmh);
        return Number(kmh) * 1000 / 3600
    }
}


module.exports = Weather