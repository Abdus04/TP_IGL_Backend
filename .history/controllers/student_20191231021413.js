const Student = require("../models/student");

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

exports.getStudentsYear = (req, res, next) => {
  const studentYear = req.params.studentYear;
  Student.findAll({
    where: {
      year: studentYear
    }
  })
    .then(students => {
      res.json(students);
      console.log(students);
    })
    .catch(err => console.log(err));
};

exports.getStudentsSection = (req, res, next) => {
  const studentSection = req.params.studentSection;
  console.log(studentSection);

  Student.findAll({
    where: {
      section: studentSection
    }
  })
    .then(students => {
      res.json(students);
      console.log(students);
    })
    .catch(err => console.log(err));
};

exports.getStudentsGroup = (req, res, next) => {
  const studentGroup = req.params.studentGroup;
  Student.findAll({
    where: {
      group: studentGroup
    }
  })
    .then(students => {
      res.json(students);
      console.log(students);
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

exports.postDeleteStudent = (req, res, next) => {
  const studentId = req.body.studentId;
  console.log("hey");
  Student.findAll({ where: { id: studentId } })
    .then(students => {
      return students[0].destroy();
    })
    .catch(err => console.log(err));
};
