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
    }})
    .then(students => {
      res.json(students[0]);
      console.log(students[0]);
    })
    .catch(err => console.log(err));
};

exports.getAddStudent= (req, res, next) => {
    Student.create({
    nom: nom,
    prenom: prenom,
    matricule: matricule,
    year: year,
    section: section,
    group: group
  })
  .then()
  .catch(err=>console.log(err));
}
