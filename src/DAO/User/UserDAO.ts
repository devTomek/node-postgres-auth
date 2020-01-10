import IUserDAO from "./IUserDAO";

export default class UserDAO implements IUserDAO {
	db: any;

	constructor(db: any) {
		this.db = db;
	}

	getUsers = async () => {
		const res = await this.db.query("SELECT * FROM users");
		const users = await res.rows;

		return users;
	};

	getUser = async (email: string, password: string) => {
		const res = await this.db.query(
			`SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`
		);
		const user = await res.rows[0];

		return user;
	};
}
