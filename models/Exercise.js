const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  exercise: String,
  time: Date.now()
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Book;
