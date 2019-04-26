const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookModel = new Schema({
  read: { type: String },
  author: { type: String },
  title: { type: String },
  genre: { type: Boolean, default: false }
});

module.exports = mongoose.model('Book', bookModel);
