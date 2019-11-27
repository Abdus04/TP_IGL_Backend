const express = require("express");

const studentController = require("../controllers/student");

const router = express.Router();
const app = express();

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
