var express = require('express');
var http = require('http');
var app = express();

// Set up port
app.set('port', process.env.PORT || 5000);

// Set up server

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});