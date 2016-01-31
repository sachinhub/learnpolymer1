var express = require('express');
var app = express();

app.use(express.static('public'));

app.use('/bower_components',  express.static(__dirname + '/bower_components'));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/api/login', function(req, res){
  res.json({ loggedin: true, jtoken : 'ASD021312' });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
