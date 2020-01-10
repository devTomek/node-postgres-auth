interface IUser {
	id: number;
	email: string;
	password: string;
}

export default interface IUserDAO {
	getUsers: () => Promise<IUser[]>;
	getUser: (email: string, password: string) => Promise<IUser>;
}
