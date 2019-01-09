var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var app = express();
var port = 8083;
var execPhp = require('exec-php');
var router = express.Router();

app.use('/*', cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response) {
  response.setHeader('Content-Type', 'text/plain;charset=utf-8');
  response.send('go to http://localhost:8083/calculations to see the calculations results');
  response.end();
});

app.get('/calculations', function(request, response, next) {
  response.setHeader('Content-Type', 'text/html;charset=utf-8');
  execPhp('web-server/calculations.php', function(error, php, outprint){
    response.send(outprint);
    response.end();
  });
});

app.post('/save-calculation', function(request, response) {
  response.setHeader('Content-Type', 'application/json');

  var expressionSummary = request.body.expressionSummary;
  var expression = request.body.expression;

  execPhp('web-server/save-calculation.php', function(error, php, outprint){

    php.save(expressionSummary, expression, function(err, result, output, printed){
      response.send(JSON.parse(printed))
      response.end();
    });

  });

});

app.use(['/', '/calculations', '/save-calculation'], router);
app.listen(port);

console.log('The PHP service is running at ' + port);
