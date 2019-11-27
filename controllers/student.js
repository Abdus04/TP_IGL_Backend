const Student = require("../models/student");

exports.getStudents = (req, res) => {
  // Student.create({
  //   nom: 'rezgui',
  //   prenom: 'abdelkader',
  //   matricule: 151515,
  //   year: '1cs',
  //   section: 'A',
  //   group: '2'
  // })
  // .then()
  // .catch(err=>console.log(err));
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
