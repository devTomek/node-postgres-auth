import { Request, Response } from "express";
const loginService = require("../services/loginService");
const router = require("express").Router();

router.post("/", async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			res.sendStatus(400);
			return;
		}

		const jwt = await loginService.login(email, password);

		if (jwt === "Unauthorized") {
			res.sendStatus(401);
			return;
		}

		res.send(JSON.stringify(jwt));
	} catch (error) {
		res.sendStatus(500);
		console.error(error);
	}
});

module.exports = router;
