const Student = require("../models/student");
const express = require("express");

const app = express();
var router = express.Router();

var bodyParser = require("body-parser");

exports.getStudents = (req, res) => {
  Student.findAll()
    .then(students => {
      console.log(students);
      res.json(students);
    })
    .catch(err => console.log(err));
};

exports.getStudent = (req, res, next) => {
  const studentId = req.params.studentId;
  Student.findAll({
    where: {
      id: studentId
    }
  })
    .then(students => {
      res.json(students[0]);
      console.log(students[0]);
    })
    .catch(err => console.log(err));
};

exports.postAddStudent = (req, res, next) => {
  Student.create({
    nom: req.body.nom,
    prenom: req.body.prenom,
    matricule: req.body.matricule,
    year: req.body.year,
    section: req.body.section,
    group: req.body.group
  })
    .then()
    .catch(err => console.log(err));
};
