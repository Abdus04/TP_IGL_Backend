const express = require("express");
const sequelize = require("./util/database");
// var cors = require("cors");

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
const studentRoutes = require("./routes/acceuil");

app.use(studentRoutes);
// app.use(cors({ origin: "*" }));

sequelize
  .sync()
  .then()
  .catch(err => console.log(err));

app.listen(3001);
