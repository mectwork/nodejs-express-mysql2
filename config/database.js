const mysql = require('mysql2');
require('dotenv').config();

const PROD = {
    host: process.env.PROD_DB_HOST,
    database: process.env.PROD_DB_NAME,
    user: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PASS

}

const DEV = {
    host: process.env.DEV_DB_HOST,
    database: process.env.DEV_DB_NAME,
    user: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASS
}

const LOCAL = {
    host: process.env.LOCAL_DB_HOST,
    user: process.env.LOCAL_DB_USER,
    password: process.env.LOCAL_DB_PASS,
    database: process.env.LOCAL_DB_NAME,
    connectionLimit: 50, // this parameter is needed if the createPool() function is used.
    waitForConnections: true,
    queueLimit: 0
}

// create the connection to database using specific enviroment
const connection = mysql.createPool(LOCAL); //mysql.createConnection(LOCAL)

module.exports = connection;
