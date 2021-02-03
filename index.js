var greet = require('./greetings');
var express = require('express');
var app = express();
var log = function(req, res, next){ // Declaring a function
  console.log('Inside Server!');
  next();
}
app.get('/', function (req, res) {
  res.send(greet.hello_world);
});
app.use(log);
app.get('/mars', function (req, res) {
    res.send(greet.hello_mars);
});
app.listen(3000, function () {
  console.log("Listening to port 3000!");
});