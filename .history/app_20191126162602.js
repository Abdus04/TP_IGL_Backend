const express = require("express");
const sequelize = require("./util/database");

const app = express();
const studentRoutes = require("./routes/acceuil");

app.use(studentRoutes);

sequelize
  .sync()
  .then()
  .catch(err => console.log(err));

app.listen(3001);
