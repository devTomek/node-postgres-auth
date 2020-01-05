export {};

const DB = require("./db");
const router = require("./router");
const bodyParser = require("body-parser");

require("dotenv-defaults").config();

const express = require("express");
const app = express();

const serverPort = process.env.SERVER_PORT;
const DBPort = process.env.DB_PORT;

app.use(bodyParser.json());
app.use("/api", router);

app.listen(serverPort, async () => {
	try {
		console.log(`Server running on port: ${serverPort}`);

		await DB.client.connect();
		console.log(`DB running on port: ${DBPort}`);
	} catch (error) {
		console.error(error);
	}
});
