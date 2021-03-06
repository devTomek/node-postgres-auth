const { Client } = require("pg");
require("dotenv-defaults").config();

const clientConfig = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	database: process.env.DB_DATABASE,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT
};

const db = new Client(clientConfig);

module.exports = db;
