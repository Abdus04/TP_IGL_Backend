const Student = require("../models/student");

exports.getStudents = (req, res) => {
  Student.findAll()
    .then(students => {
      //console.log(students);
      res.json(students);
    })
    .catch(err => console.log(err));
};
