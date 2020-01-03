const Teacher = require("../models/teacher");

/**
 * a small description.
 * @method
 * @param {Object} req - //description te3 l variable
 * @param {Object} res - //description te3 l variable
 * @param {Object} teachers - //description te3 l variable
 * @throws {NotFoundError} When the users are not found.
 */

exports.getTeachers = (req, res) => {
  Teacher.findAll()
    .then(teachers => {
      res.json(teachers);
    })
    .catch(err => console.log(err));
};

/**
 * a small description.
 * @method
 * @param {Object} req - //description te3 l variable
 * @param {Object} res - //description te3 l variable
   * @param {Object} next - //description te3 l variable

 * @param {Number} teacherId - //description te3 l variable
 * @throws {NotFoundError} When the users are not found.
 */

exports.getTeacher = (req, res, next) => {
  const teacherId = req.params.teacherId;
  Teacher.findAll({
    where: {
      id: teacherId
    }
  })
    .then(teachers => {
      res.json(teachers[0]);
    })
    .catch(err => console.log(err));
};

/**
 * a small description.
 * @method
 * @param {Object} req - //description te3 l variable
 * @param {Object} res - //description te3 l variable
  * @param {Object} next - //description te3 l variable

 * @throws {NotFoundError} When the users are not found.
 */
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

/**
 * a small description.
 * @method
 * @param {Object} req - //description te3 l variable
 * @param {Object} res - //description te3 l variable
  * @param {Object} next - //description te3 l variable

 * @param {Number} teacherId - //description te3 l variable
 * @throws {NotFoundError} When the users are not found.
 */
exports.postDeleteTeacher = (req, res, next) => {
  const teacherId = req.body.teacherId;
  Teacher.findAll({ where: { id: teacherId } })
    .then(teachers => {
      return teachers[0].destroy();
    })
    .catch(err => console.log(err));
};
