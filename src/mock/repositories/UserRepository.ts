import BaseRepository from "./BaseRepository";
import Database from "../services/MockDatabase";

class UserRepository extends BaseRepository<any> {
	constructor() {
		super();

		this.data = Database.users;
	}
}

export default new UserRepository();
