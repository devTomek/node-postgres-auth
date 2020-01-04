import DB from "./db";

require("dotenv-defaults").config();

const express = require("express");
const app = express();

const serverPort = process.env.SERVER_PORT;
const DBPort = process.env.DB_PORT;

app.listen(serverPort, async () => {
	try {
		console.log(`Server running on port: ${serverPort}`);
		await DB.connect();
		console.log(`DB running on port: ${DBPort}`);
	} catch (error) {
		console.error(error);
	}
});
