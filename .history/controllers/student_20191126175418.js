const express = require("express");
const app = express();

const Student = require("../models/student");

exports.getStudents = (req, res) => {
  app.use(cors({ origin: "*" }));

  Student.findAll()
    .then(students => {
      //console.log(students);
      res.json(students);
    })
    .catch(err => console.log(err));
};
