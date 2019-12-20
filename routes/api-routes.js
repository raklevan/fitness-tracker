const db = require("../models");

const app = require("express").Router();

const Exercise = require("../models/Exercise.js")


// db.Exercise.create({ name: "My Exercises" })
//   .then(dbExercises => {
//     console.log(dbExercises);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });

app.post("/exercises", ({ body }, res) => {
  console.log(body)
  db.Exercise.create(body)
    .then(dbExercises => {
      res.redirect("/");
    })
    .catch(err => {
      res.json(err);
    });
});



app.get("/exercises", (req, res) => {
  db.Exercise.find({})
    .then(dbExercises => {
      res.json(dbExercises);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports= app;