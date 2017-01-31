var express = require('express');
var alsong = require('alsong');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
  response.render('pages/index');
});

//cors filter
app.use(function (request, response, next) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  response.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

//get lyrics by artist && title
app.get('/lyrics/:artist/:title', function (request, response) {
  alsong(request.params.artist, request.params.title).then((lyrics) => {
    lyrics ? response.send(200, lyrics) : response.send(404)
  });
});

//get lyrics by file
app.post('/lyrics/:file', function (request, response) {
  alsong(request.params.file).then((lyrics) => {
    lyrics ? response.send(200, lyrics) : response.send(404)
  });
});


app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});


