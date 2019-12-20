const db = require("../models");

const app = require("express").Router();



app.get("/", function (req, res) {
 

    db.Exercise.find().then(function (dbExcercises) {
        console.log(dbExcercises)
        res.render("index", { name:"Testing", exercises: dbExcercises }
        );
    
    })


})

module.exports=app;