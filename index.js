const express = require("express"); // the library we will use to handle requests
const mongodb = require("mongodb"); // load mongodb

const port = 8000; // port to listen on

const app = express(); // instantiate express
app.use(require("cors")()); // allow Cross-domain requests
app.use(require("body-parser").json()); // automatically parses request data to JSON

// make sure in the free tier of MongoDB atlas when connecting, to
// select version 2.2.* as the node.js driver instead of the default 3.0
// put your URI HERE ⬇
//const uri = "mongodb+srv://OurDatabaseOurDatabase@bookscript.qxdhz.mongodb.net/Books"; // put your URI HERE
const uri = "mongodb://OurDatabase:OurDatabase@bookscript-shard-00-00.qxdhz.mongodb.net:27017,bookscript-shard-00-01.qxdhz.mongodb.net:27017,bookscript-shard-00-02.qxdhz.mongodb.net:27017/Books?ssl=true&replicaSet=atlas-dbfd8y-shard-0&authSource=admin&retryWrites=true&w=majority";
// connect to your MongoDB database through your URI. 
// The connect() function takes a uri and callback function as arguments.
mongodb.MongoClient.connect(uri, (err, client) => {
  // connect to your specific collection (a.k.a database) that you specified at the end of your URI (/database)
  const collection = client.db("BackUp").collection("Books");

  // Responds to GET requests with the route parameter being the book id.
  // Returns with the JSON data about the user (if there is a user with that username)
  // Example request: https://mynodeserver.com/myusername
  app.route('/:id').get((req, res) => {
    // search the database (collection) for all users with the `id` field being the `id` route paramter
    collection.find({ id: req.params.id }).toArray((err, docs) => {  //toArray
      if (err) {
        // if an error happens
        res.send("Error in GET req.");
      } else {
        // if all works
        res.send(docs); // send back all books found with the matching id.
      }
    });
  });
    // if someone goes to base route, send back they are home.
    app.route('/').get((req, res) => {
      res.send("You are home 🏚.");
    });
  });

  // listen for requests
  var listener = app.listen(port, () => {
    console.log("Your app is listening on port " + listener.address().port);
  });
//});


// Api Example
/*
var book = require('./BookInfo');
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());


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
*/




/*
var log = function(req, res, next){ // Declaring a function
  console.log('Inside Server!');
  next();
}
*/