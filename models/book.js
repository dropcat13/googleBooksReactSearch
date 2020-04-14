const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: [{ type: String, required: true }],
  synopsis: String,
  id: { type: String, required: true, unique: true},
  img: { type: String}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
