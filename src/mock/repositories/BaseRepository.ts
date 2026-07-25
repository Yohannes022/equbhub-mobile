/**
 * ==========================================================
 * Base Repository
 *
 * Every repository extends this class.
 *
 * During MVP:
 * JSON file
 *
 * Production:
 * FastAPI
 * ==========================================================
 */

export default class BaseRepository<T> {
	protected data: T[] = [];

	getAll(): T[] {
		return this.data;
	}

	getById(id: string | number) {
		return this.data.find((item: any) => item.id == id);
	}

	create(item: T) {
		this.data.push(item);

		return item;
	}

	update(id: string | number, values: Partial<T>) {
		const index = this.data.findIndex((item: any) => item.id == id);

		if (index === -1) return null;

		this.data[index] = {
			...this.data[index],
			...values,
		};

		return this.data[index];
	}

	delete(id: string | number) {
		const index = this.data.findIndex((item: any) => item.id == id);

		if (index === -1) return false;

		this.data.splice(index, 1);

		return true;
	}
}
