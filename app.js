var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(express.static('public'));

app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/api/login', function(req, res){
  console.log(req.body);
  console.log(req.body.username);
  console.log(req.body.password);
  res.json({ loggedin: true, jtoken : 'ASD021312' });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
