const express = require("express");

const studentController = require("../controllers/student");

const router = express.Router();
const app = express();

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader("Access-Control-Allow-Credentials", true);

//   // Pass to next layer of middleware
//   next();
// });
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
