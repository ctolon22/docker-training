var express = require('express');
var os = require('os');

var port = 8000;
var app = express();

app.get('/', function(req, res) {
  console.log('Say Hello world');
  var content = '<p>Hello World</p>';
  content += '<p>Host: ' + os.hostname() + '</p>';
	
	res.send(content);
});

app.listen(port);
console.log('Running with port:' + port);