import BaseRepository from "./BaseRepository";
import Database from "../services/MockDatabase";

class PaymentRepository extends BaseRepository<any> {
	constructor() {
		super();

		this.data = Database.payments;
	}
}

export default new PaymentRepository();
