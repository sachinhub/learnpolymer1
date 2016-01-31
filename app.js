var express = require('express');
var app = express();

app.use(express.static('client'));

app.get('/', function(req, res){
  console.log(__dirname);
  res.sendfile(__dirname + '/index.html');
});

app.post('/api/login', function(req, res){
  res.json({ loggedin: true, jtoken : 'ASD021312' });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
