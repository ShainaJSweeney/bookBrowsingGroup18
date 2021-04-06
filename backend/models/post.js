const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true},
  content: { type: String, required: true},
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },
  bookId: { type: String, required: true}
})

module.exports = mongoose.model('review', postSchema); // model
