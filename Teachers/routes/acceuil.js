const express = require("express");

const teacherController = require("../controllers/teacher");

const router = express.Router();
const app = express();

router.get("/teachers", teacherController.getTeachers);
router.get("/teachers/:teacherId", teacherController.getTeacher);
router.post("/add-teacher",teacherController.postAddTeacher);
router.post('/delete-teacher', teacherController.postDeleteTeacher);

module.exports = router;
