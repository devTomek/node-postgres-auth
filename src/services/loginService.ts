import UserDAO from "../DAO/User/UserDAO";
const jwt = require("jsonwebtoken");
const db = require("../db");
require("dotenv-defaults").config();

async function login(email: string, password: string) {
	const userDAO = new UserDAO(db);
	const user = await userDAO.getUser(email, password);
	const dbEmail = user?.email;
	const dbPassword = user?.password;

	if (email !== dbEmail || password !== dbPassword) {
		return "Unauthorized";
	}

	const secret = process.env.JWT_SECRET;
	return await jwt.sign(user, secret, { expiresIn: "15m" });
}

module.exports = {
	login
};
