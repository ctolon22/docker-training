var express = require('express');
var redis = require('redis');

var port = 8000;
var app = express();

/* redis */
var host = 'redis';
var port = process.env.REDIS_PORT || 6379;
var client = redis.createClient(port, host);

app.get('/', function(req, res) {
  console.log('Say Hello world');
  var content = 'Hello World\n\n';
	
  client.incr('counter', function(err, result) {
    if (err) {
      return next(err);
    }

    content += result;
		console.log(result);

    res.send(content);
  });
});

app.listen(port);
console.log('Running with port:' + port);