# Weather

## GOAL

Create an HTTP Service that reports on Melbourne weather. This service will source its information from either of the below providers:

1. weatherstack (primary):
curl "h​ttp://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=Melbourne​"

    Documentation: ​https://weatherstack.com/documentation


2. OpenWeatherMap (failover):
curl "http://api.openweathermap.org/data/2.5/weather?q=melbourne,AU&appid=2326504fb9b100bee 21400190e4dbe6d"

    Documentation: ​https://openweathermap.org/current


## Spec/Requirement

* can hardcode Melbourne as a city
* should return JSON format response with temperature in degrees Celsius and wind speed
* provide auto switch between primary and alternative
* scalability and reliability
* can be catched in 3 seconds
* extendible

## Concerns

* during get a response from a request, if there is another request coming
* multiple providers possibility


## Expected Output

Calling the service via curl (​http://localhost:8080/v1/weather?city=melboune)​ should output the following JSON payload

```json
{
    "wind_speed": 20,
    "temperature_degrees": 29
}
```