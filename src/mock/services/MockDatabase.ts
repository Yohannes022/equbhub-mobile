/**
 * ==========================================================
 * Mock Database
 *
 * Temporary in-memory database.
 *
 * Later this file becomes
 * FastAPI requests.
 * ==========================================================
 */

class MockDatabase {
	users: any[] = [];
	equbs: any[] = [];
	memberships: any[] = [];
	rounds: any[] = [];
	payments: any[] = [];
	notifications: any[] = [];
}

export default new MockDatabase();
