// backend feature 5 -Luis Socarras
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose") // require mongoose package

const Review = require("./models/post")

const app = express();


mongoose
  .connect("mongodb+srv://JoseSerpa:sLsmIoJCMNgsMgr9@bookscript.qxdhz.mongodb.net/BackUp?retryWrites=true&w=majority", { useFindAndModify: false }
)
  .then(() => {
  console.log("Connected to database!");
})
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});


// post request
app.post("/api/BooksPart2/", (req, res, next) => {
  //console.log(req.params.id); // added to try finding book id

  const post = new Review({
    title: req.body.title,
    content: req.body.content,
    rating: req.body.rating,
    bookId: req.body.bookId,
    name: req.body.name
  });


  post.save().then(createdPost => {
    res.status(201).json({
      message: "Review added successfully",
      postId: createdPost._id
    });
  });
});


//mongoose.set('useFindAndModify', false);

/*

app.post("/api/BooksPart2/", (req, res, next) => {
  //console.log(req.params.id);
  const post = new Review({
    title: req.body.title,
    content: req.body.content,
    rating: req.body.rating,
    bookId: req.body.bookId,
  });
  console.log({id:  req.body.bookId});
  book.findOneAndUpdate({id:  req.body.bookId} , { $addToSet: { reviews: post}}, function (err){
    if (err){
      console.log(err);
    } else {
      console.log("Successfully added to reviews. Review for " +  req.body.bookId)
    }
  })


});

*/   //{ bookId: req.params.id }
app.get("/api/BooksPart2/reviews", (req, res, next) => {
 console.log("searching reviews for " + req.params.bookId )
  Review.find({  bookId: 9 }).then(documents => {
    console.log(documents);
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

module.exports = app;
