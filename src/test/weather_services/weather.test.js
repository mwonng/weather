var test = require('ava');
var WeatherService = require('../../weather_services/Weather');

const weather = new WeatherService();

test('formate weather from km/h to m/s', t => {
    const speed = 36;
    const expectation = 10;
    t.is(weather.kmhToMeterperhour(speed), expectation)
    t.is(weather.kmhToMeterperhour('36'), expectation)
});