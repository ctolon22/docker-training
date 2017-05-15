var express = require('express');

var port = 8000;
var app = express();

app.get('/', function(req, res) {
  console.log('Say Hello world');
  var content = 'Hello World\n\n';
	
	res.send(content);
});

app.listen(port);
console.log('Running with port:' + port);