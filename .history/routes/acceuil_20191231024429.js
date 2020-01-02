const express = require("express");

const studentController = require("../controllers/student");
const teacherController = require("../controllers/teacher");

const router = express.Router();
const app = express();

router.post("/add-student", studentController.postAddStudent);
router.get("/students", studentController.getStudents);
router.get("/students/:studentId", studentController.getStudent);
router.get("/students/year/:studentYear", studentController.getStudentsYear);
router.get(
  "/students/section/:studentSection",
  studentController.getStudentsSection
);
router.get("/students/group/:studentGroup", studentController.getStudentsGroup);
router.post("/delete-student", studentController.postDeleteStudent);

router.get("/teachers", teacherController.getTeachers);
router.get("/teachers/:teacherId", teacherController.getTeacher);
router.post("/add-teacher", teacherController.postAddTeacher);
router.post("/delete-teacher", teacherController.postDeleteTeacher);

module.exports = router;
