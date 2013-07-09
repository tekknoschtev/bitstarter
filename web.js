var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var text = new Buffer( fs.readFileSync('index.html') );
    
    var buffer = new Buffer(text, 'utf-8');
    
    response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
