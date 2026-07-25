import BaseRepository from "./BaseRepository";
import Database from "../services/MockDatabase";

class MembershipRepository extends BaseRepository<any> {
	constructor() {
		super();

		this.data = Database.memberships;
	}
}

export default new MembershipRepository();
