import BaseRepository from "./BaseRepository";
import Database from "../services/MockDatabase";

class EqubRepository extends BaseRepository<any> {
	constructor() {
		super();

		this.data = Database.equbs;
	}
}

export default new EqubRepository();
