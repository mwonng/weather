# Weather

visit https://weather.wonng.com/v1/weather?city=melbourne for testing
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

### Expected Output

Calling the service via `curl ​http://localhost:8080/v1/weather?city=melboune`​ should output the following JSON payload

```json
{
    "wind_speed": 20,
    "temperature_degrees": 29
}
```

### My concerns

* during get a response from putting a request (usually 30-100ms), if there is another request incoming. Do we need to handling as new request or using cache?
* multiple providers possibility, we can actually have more than one alternative provide

## Install & requirement
please run this app using node and version >= 12.5.0

1. Install node, if you don't know how to do , please refer to [install guide](https://nodejs.org/en/download/package-manager/)
2. After installation, check your node and npm version
```bash
$ node -v   # v12.11.1
$ npm -v    # 6.11.3
```
3. locate this repo root folder and run:
```bash
$ npm install   # or yarn by your preference
```

### Development
If you are going to run on a develop environment, please run
```bash
$ npm run dev
```
or yarn by your preference
```bash
$ yarn dev
```

#### Run it and try
run get response by using iTerm or Terminal
```bash
curl ​http://localhost:8080/v1/weather?city=melboune
```

or open your browser to enter in address bar `http://localhost:8080/v1/weather?city=melboune` and enter

### Production
Most case in production, you should use [PM2](http://pm2.keymetrics.io/) or other production process manager to start your service.

if you just simulate production, you can run
```bash
$ node index.js
```
Note: running on a production should be managed by PM2 or other production process manager.

#### Run it and try
run get response by using iTerm or Terminal
```bash
curl ​http://YOUR_DOMAIN:PORT/v1/weather?city=melboune
```

or open your browser to enter in address bar `http://YOUR_DOMAIN:PORT/v1/weather?city=melboune` and enter