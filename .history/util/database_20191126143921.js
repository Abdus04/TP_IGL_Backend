const Sequelize = require('sequelize');

const sequelize = new Sequelize("tp-igl","root","tpigl",{
    dialect: "mysql",
    host: 'localhost'
});

module.exports= sequelize;