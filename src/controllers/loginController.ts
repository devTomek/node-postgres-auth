import { Request, Response } from "express";

const router = require("express").Router();

router.get("/", (req: Request, res: Response) => {
	try {
		res.status(200).send("Login");
	} catch (error) {
		res.status(500).send("Internal Server Error");
		console.error(error);
	}
});

module.exports = router;
