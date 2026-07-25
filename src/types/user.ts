/**
 * ============================================================
 * User Model
 * ============================================================
 */

export type UserRole = "member" | "admin";

export interface User {
	id: string;

	phoneNumber: string;

	fullName: string;

	profileImage?: string;

	bio?: string;

	language: "en" | "am";

	isVerified: boolean;

	role: UserRole;

	joinedEqubs: string[];

	createdEqubs: string[];

	createdAt: string;

	updatedAt: string;
}
