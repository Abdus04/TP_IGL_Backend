const express = require("express");

const studentController = require("../controllers/student");

const router = express.Router();
const app = express();

// /admin/add-product => GET
router.post("/add-student", studentController.postAddStudent);

// /admin/students => GET
router.get("/students", studentController.getStudents);

// /admin/add-product => POST
//router.post('/add-student', adminController);
router.get("/students/:studentId", studentController.getStudent);

//router.post('/edit-student', adminController);

//router.post('/delete-student', adminController.postDeleteProduct);

module.exports = router;
