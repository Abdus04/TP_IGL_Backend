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
