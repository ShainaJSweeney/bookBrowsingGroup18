const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

// const Post = require('../src/app/rating/post')
const Post = require("./models/post")
const app = express();

mongoose
  .connect("mongodb+srv://luis:ZoMWUqo3fLIwrl2O@cluster0.66xps.mongodb.net/Books?retryWrites=true&w=majority"
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
app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added successfully",
      postId: createdPost._id
    });
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "fadf12421l",
      title: "First server-side post",
      content: "This is coming from the server"
    },
    {
      id: "ksajflaj132",
      title: "Second server-side post",
      content: "This is coming from the server!"
    }
  ];
  res.status(200).json({
    message: "Posts fetched successfully!",
    posts: posts
  });
});

module.exports = app;
