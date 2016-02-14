// set up 
var express  = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app  = express();

// configuration
app.use(express.static(path.join(__dirname, '../Client')));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// application
app.get('*', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../Client') });
});


// listen (start app with node server.js) 
app.listen(8080);
console.log("Server running at http://127.0.0.1:8080/");