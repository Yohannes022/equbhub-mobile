import AsyncStorage from "@react-native-async-storage/async-storage";

class StorageService {
	async save(key: string, value: any) {
		await AsyncStorage.setItem(key, JSON.stringify(value));
	}

	async get(key: string) {
		const value = await AsyncStorage.getItem(key);

		if (!value) return null;

		return JSON.parse(value);
	}

	async remove(key: string) {
		await AsyncStorage.removeItem(key);
	}

	async clear() {
		await AsyncStorage.clear();
	}
}

export default new StorageService();
