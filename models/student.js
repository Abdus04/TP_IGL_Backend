const Sequelize= require('sequelize');

const sequelize= require('../util/database');

const Student= sequelize.define(
    'student', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nom: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        prenom: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        matricule: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        year: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        section: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        group:{
            type: Sequelize.STRING,
            allowNull: false,
        }
})

module.exports= Student;