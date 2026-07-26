import StorageService from "../StorageService";
import { StorageKeys } from "../../constants/storage";
import { AuthSession } from "../../types";

class SessionService {
	async save(session: AuthSession) {
		await StorageService.save(StorageKeys.TOKEN, session);
	}

	async get(): Promise<AuthSession | null> {
		return await StorageService.get(StorageKeys.TOKEN);
	}

	async clear() {
		await StorageService.remove(StorageKeys.TOKEN);
	}

	async isLoggedIn(): Promise<boolean> {
		const session = await this.get();
		return !!session;
	}
}

export default new SessionService();
