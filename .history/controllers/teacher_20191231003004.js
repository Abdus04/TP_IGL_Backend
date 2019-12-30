const Teacher = require("../models/teacher");

exports.getTeachers = (req, res) => {
  Teacher.findAll()
    .then(teachers => {
      res.json(teachers);
    })
    .catch(err => console.log(err));
};

exports.getTeacher = (req, res, next) => {
  const teacherId = req.params.teacherId;
  Teacher.findAll({
    where: {
      id: teacherId
    }
  })
    .then((teachers) => {
      res.json(teachers[0]);
    })
    .catch(err => console.log(err));
};

exports.postAddTeacher = (req, res, next) => {
  Teacher.create({
    nom: req.body.nom,
    prenom: req.body.prenom,
    grade: req.body.grade,
    description: req.body.description
  })
    .then()
    .catch(err => console.log(err));
};
exports.postDeleteTeacher = (req, res, next) => {
  const teacherId = req.body.teacherId;
  Teacher.findAll({where: {id: teacherId}})
  .then(teachers => {
    return teachers[0].destroy();
  })
  .catch(err=> console.log(err));
};