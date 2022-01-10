const { Sequelize } = require('sequelize')

const dotenv = require('dotenv').config({ path: './config.env'});



const db = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSW,
    database: process.env.DB,
    port: process.env.DB_PORT,
    logging: false,
});

module.exports = { db }
// Promise

