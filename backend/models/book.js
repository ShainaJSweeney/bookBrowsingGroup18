const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true},
  content: { type: String, required: true},
  author: { type: String},
  genre: {type: String},
  coverage: {Object},
  topSeller: {type: Boolean},
  reviews: [Object],
  price: {type: Number},
  release: {type: Date},
  averageRating: {type: Number},
  info: { type: String},
  id: { type: String, required: true},
  publisher: { type: String}

})


module.exports = mongoose.model('Book', postSchema); // model
