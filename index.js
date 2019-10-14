var express = require('express');
var app = express();
var routes = require('./src/routes')
var port = process.env.PORT || 8080;

app.set('cachedTemp', {});
app.set('isPending', false);
app.set('lastFetchTimestamp', 0);

app.use(express.json());
app.use(routes);
app.get('*', function (req, res) {
    res.status(404).send('Error found')
});
app.listen(port);
console.log('localhost on port ' + port);