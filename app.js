const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const mongodb = require("mongodb"); // load mongodb

//connect to database
mongoose.connect(config.database, {useNewUrlParser: true, useUnifiedTopology: true});

//this lets us know if its connnected
mongoose.connection.on('connnected', () => {
    console.log('Connected to database '+config.database);
});

//lets us know if there was an error
mongoose.connection.on('error', (err) => {
    console.log('Database error: '+err);
});

const app = express();

const users = require('./routes/users');

//port number
const port = 8000;

//cors middlewaare
app.use(cors());

//SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(express.json());


//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/Users', users);

//index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

//start server
app.listen(port, () => {
    console.log('Server started on port '+port);
});


//index.js
const uri = config.database;
// connect to your MongoDB database through your URI. 
// The connect() function takes a uri and callback function as arguments.
mongodb.MongoClient.connect(uri, (err, client) => {
  // connect to your specific collection (a.k.a database) that you specified at the end of your URI (/database)
  const bookCollection = client.db("BackUp").collection("BooksPart2");
  const userCollection = client.db("BackUp").collection("users");
  const authorCollection = client.db("BackUp").collection("Authors");
  const reviewCollection = client.db("BackUp").collection("reviews");

  // Responds to GET requests with the route parameter being the book id.
  // Returns with the JSON data about the user (if there is a user with that username)
  // Example request: https://mynodeserver.com/myusername
  app.route('/review/:theRequest').get((req, res) => {    
    
    reviewCollection.find({"bookId": req.params.theRequest}).toArray((err, docs) => {
      if (err) {
        res.send("Error in GET req.");
      } else {
        res.send(docs); 
      }
    });
  });

  app.route('/search/:theRequest').get((req, res) => {
    // search the database (collection) for all users with the `id` field being the `id` route paramter
    
    var minStars;
    var sort = "";
    var sortOrder;
    var genre1 = "";
    var bestSeller = false;
    var query = new Object();
    if(req.params.theRequest === "ALL"){
      minStars = 0;
      sort = "title";
      sortOrder = 1;
      genre1 = "ALL";
    }else{
      minStars = parseInt(req.params.theRequest.substr(0,1));
      switch(req.params.theRequest.substr(1,3)){
        case "TIT":
          sort = "title";
          break;
        case "AUT":
          sort = "author";
          break;
        case "VAL":
          sort = "price";
          break;
        case "RAT":
          sort = "averageRating";
          break;
        case "DAT":
          sort = "release";
          break;
        default:
          sort = "title";
          break;
      }
      if(req.params.theRequest.substring(4,5) === "1"){
        sortOrder=1;
      }else{
        sortOrder=-1;
      }
      if(req.params.theRequest.substring(5,6) === "1") bestSeller = true;
      genre1 = req.params.theRequest.substring(6);

    }
    query.averageRating = {$gte:minStars};
    if(bestSeller === true) query.topSeller = bestSeller;
    if(genre1 !== "ALL")query.genre = genre1;
    bookCollection.find(query).sort({[sort]:sortOrder}).toArray((err, docs) => {  //toArray
      if (err) {
        // if an error happens
        res.send("Error in GET req.");
      } else {
        // if all works
        res.send(docs); // send back all books found with the matching id.
      }
    });

  });
  app.route('/genres').get((req, res) => {    
    
    bookCollection.distinct("genre",{},(err, docs) => {
      if (err) {
        res.send("Error in GET req.");
      } else {
        res.send(docs); 
      }
    });
  });
  app.route('/book/:theRequest').get((req, res) => {    
    
    bookCollection.find({"_id": mongodb.ObjectID(req.params.theRequest)}).toArray((err, docs) => {
      if (err) {
        res.send("Error in GET req.");
      } else {
        res.send(docs); 
      }
    });

  });
  app.route('/bookTitle/:theRequest').get((req, res) => {    
    
    bookCollection.find({title: req.params.theRequest}).toArray((err, docs) => {
      if (err) {
        res.send("Error in GET req.");
      } else {
        res.send(docs); 
      }
    });

  });
  app.route('/allAuthors').get((req, res) => {    
    
    authorCollection.find({}).toArray((err, docs) => {
      if (err) {
        res.send("Error in GET req.");
      } else {
        res.send(docs); 
      }
    });

  });
  app.route('/author/:theRequest').get((req, res) => {    
    
    authorCollection.find({"name": req.params.theRequest}).toArray((err, docs) => {
      if (err) {
        res.send("Error in GET req.");
      } else {
        res.send(docs); 
      }
    });

  });
  app.route('/user/:userName/:theRequest').get((req, res) => {
    // search the database (collection) for all users with the `id` field being the `id` route paramter
    
    
    if(req.params.theRequest === "shoppingCart"){
      userCollection.find({"Username": req.params.userName}).toArray((err, docs) => {  //toArray
        if (err) {
          // if an error happens
          res.send("Error in GET req.");
        } else {
          // if all works
          res.send(docs); // send back all books found with the matching id.
        }
      });
    }
    

  });

    // if someone goes to base route, send back they are home.
    app.route('/').get((req, res) => {
      res.send("You are home 🏚.");
    });
  });