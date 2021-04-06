const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose") // require mongoose package

const Review = require("./models/post")
const book = require("./models/book")
const app = express();
// password ZoMWUqo3fLIwrl2O
mongoose
  //.connect("mongodb+srv://luis:ZoMWUqo3fLIwrl2O@cluster0.66xps.mongodb.net/Books?retryWrites=true&w=majority"
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

*/

app.get("/api/BooksPart2", (req, res, next) => {
  Review.findById({ _id: req.params.id }).then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

module.exports = app;
