import BaseRepository from "./BaseRepository";
import Database from "../services/MockDatabase";

class RoundRepository extends BaseRepository<any> {
	constructor() {
		super();

		this.data = Database.rounds;
	}
}

export default new RoundRepository();
