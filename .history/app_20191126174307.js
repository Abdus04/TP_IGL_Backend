const express = require("express");
const sequelize = require("./util/database");
var cors = require("cors");

const app = express();

const studentRoutes = require("./routes/acceuil");

app.use(studentRoutes);
app.use(cors);

sequelize
  .sync()
  .then()
  .catch(err => console.log(err));

app.listen(3001);
