const express = require("express");

const studentController = require("../controllers/student");
const teacherController = require("../controllers/teacher");

const router = express.Router();
const app = express();

// /admin/add-product => POST
router.post("/add-student", studentController.postAddStudent);

// /admin/students => GET
router.get("/students", studentController.getStudents);


//router.post('/add-student', adminController);
router.get("/students/:studentId", studentController.getStudent);

//router.post('/edit-student', adminController);

//router.post('/delete-student', adminController.postDeleteProduct);

router.get("/teachers", teacherController.getTeachers);

router.get("/teachers/:teacherId", teacherController.getTeacher);

router.post("/add-teacher",teacherController.postAddTeacher);
module.exports = router;
