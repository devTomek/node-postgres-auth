async function login(email: string, password: string) {
	if (email !== "emailDB" || password !== "passworddB") {
		return "Unauthorized";
	}

	return "jwt";
}

module.exports = {
	login
};
