const express = require('express');

const studentController = require('../controllers/student');

const router = express.Router();

// /admin/add-product => GET
//router.get('/add-student', studentController);

// /admin/students => GET
router.get('/students', studentController.getStudents);

// /admin/add-product => POST
//router.post('/add-student', adminController);
//router.get('/edit-student/:studentId', adminController);

//router.post('/edit-student', adminController);

//router.post('/delete-student', adminController.postDeleteProduct);

module.exports = router;