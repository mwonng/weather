var axios = require('axios');

class OpenWeatherService {
    constructor(props) {

    }

    async getByCelsius() {
        const res = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=melbourne,AU&appid=2fe8ba8fddb3c1ef05fdd9aac1b378e7');
        console.log(res.data);
        return this.formatResponse(res.data);

    }

    getAlternativeByCelsius() {

    }

    formatResponse(response) {
        const result = {}
        result.wind_speed = response.wind.speed;
        result.temperature_degrees = response.main.temp;
        return result;
    }
}


module.exports = OpenWeatherService