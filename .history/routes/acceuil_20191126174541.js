const express = require("express");

const studentController = require("../controllers/student");

const router = express.Router();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// /admin/add-product => GET
//router.get('/add-student', studentController);

// /admin/students => GET
router.get("/students", studentController.getStudents);

// /admin/add-product => POST
//router.post('/add-student', adminController);
//router.get('/edit-student/:studentId', adminController);

//router.post('/edit-student', adminController);

//router.post('/delete-student', adminController.postDeleteProduct);

module.exports = router;
