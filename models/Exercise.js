const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  exercise: {
    type: String,},
    
  time: {
    type: Date,
    default: Date.now
  },

  duration: {

    type: Number,
    default:0
  }

  });

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
