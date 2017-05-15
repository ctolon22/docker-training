var express = require('express');
var redis = require('redis');

var port_node = 8000;
var app = express();

/* redis */
var host = 'redis';
var port_redis = process.env.REDIS_PORT || 6379;
var client = redis.createClient(port_redis, host);

app.get('/', function(req, res, next) {
  console.log('Say Hello world');
  var content = 'Hello World\n\n';
	
  client.incr('counter', function(err, result) {
    if (err) {
      console.log(err);
      return next(err);
    }

    content += result;
		console.log(result);

    res.send(content);
  });
});

app.listen(port_node);
console.log('Running with port:' + port_node);
