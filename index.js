var book = require('./BookInfo');
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors())

app.route('/api/books').get((req, res) => {
  res.send({
    books: [{ ID: '1' }, {Title: 'Harry Potter, Half Blood Prince.'}, {Author: 'JK Rowling'}, 
    {Ratingarr: ['Rohan ', 5]}, {Price: 6.98}, {Genre: 'Suspense'}, {Publisher: 'Scholastic'}, {ReleaseInfo: 'June 26, 1997'}],
  })
})

app.route('/api/books/:name').get((req, res) => {
  const requestedBookName = req.params['name'];
  res.send({name: requestedBookName})
  })

const bodyParser = require('body-parser')                      //posting an object at endpoint
app.use(bodyParser.json())
  app.route('/api/books').post((req, res) => {
  res.send(201, req.body)
  })

app.route('/api/books/:name').put((req, res) => {                 //changing object at endpoint
  res.send(200, req.body)
})

app.route('/api/books/:name').delete((req, res) => {              // deleting object at endpoint
  res.sendStatus(204)
}) 

app.listen(8000, function () {
  console.log("Listening to port 8000!");
});





/*
var log = function(req, res, next){ // Declaring a function
  console.log('Inside Server!');
  next();
}
*/