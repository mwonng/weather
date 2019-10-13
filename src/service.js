var primaryWeather = require('./weather_services/primary_service/WeatherStack');
var provider_list = require('./weather_services/alter_services');
var altWeather = require('./weather_services/alter_services/OpenWeatherMap');
var CONST = require('./const');

class MainService {
    constructor() { }

    /**
     * if you want to change PRIMARY provider or add more, please update this method
     *
     */
    async getFromPrimaryProvider(city) {
        try {
            // get primary data here, please update here if you want update primary provider API call
            const result = await primaryWeather.getByCelsius(city);
            return result
        } catch (e) {
            throw Error('getFromPrimaryProvider error')
        }
    }

    /**
     * if you want to change alternative provider or add more, please update this method
     */
    async getFromAlternativeProviders(city) {
        try {
            const result = await altWeather.getByCelsius(city);
            return result
        } catch (e) {
            throw Error('getFromAlternativeProviders error')
        }
    }

    async getLatestTemp(city) {
        try {
            let res = await this.getFromPrimaryProvider(city);
            if (res === 'error') {
                res = this.getFromAlternativeProviders(city);
            }
            return res
        } catch (e) {
            throw Error('getLatestTemp error')
        }
    }

    isExpired(time) {
        return time + CONST.CATCHED_TIME < Date.now() ? true : false;
    }
}

module.exports = MainService;