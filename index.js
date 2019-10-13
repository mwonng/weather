var express = require('express');
var app = express();
var routes = require('./src/routes')
var port = process.env.PORT || 8080;


app.use(express.json());
app.use(routes);

app.listen(port);
console.log('localhost on port ' + port);