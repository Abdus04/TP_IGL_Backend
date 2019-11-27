const Student = require("../models/student");

exports.getStudents = (req, res) => {
  Student.create({
    nom: "Chergui",
    prenom: "Yacine",
    matricule: 1515,
    year: "1cs",
    section: "A",
    group: "2"
  })
    .then()
    .catch(err => console.log(err));
  Student.findAll()
    .then(students => {
      console.log(students);
      res.json(students);
    })
    .catch(err => console.log(err));
};
