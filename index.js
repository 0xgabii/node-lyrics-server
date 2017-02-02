var express = require('express');
var lyrics = require("lyric-get");
var app = express();

//cors filter
app.use(function (request, response, next) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  response.setHeader('Access-Control-Max-Age', '3600');
  response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  response.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
  response.render('pages/index');
});

//get lyrics by artist && title
app.get('/lyrics/:artist/:title', function (request, response) {
  lyrics.get(request.params.artist, request.params.title, (err, res) => {
    !err || res != 'not found' ? response.send(200, res) : response.send(404)
  });
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});


