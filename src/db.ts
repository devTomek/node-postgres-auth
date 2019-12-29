const { Client } = require("pg");

const clientConfig = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	database: process.env.DB_DATABASE,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT
};

const client = new Client(clientConfig);

const DB = {
	connect: () => client.connect()
};

export default DB;
