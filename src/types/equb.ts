/**
 * ============================================================
 * Equb Model
 * ============================================================
 */

export type EqubFrequency = "daily" | "weekly" | "biweekly" | "monthly";

export interface Equb {
	id: string;

	creatorId: string;

	name: string;

	description?: string;

	contributionAmount: number;

	maxMembers: number;

	currentMembers: number;

	frequency: EqubFrequency;

	currentRound: number;

	isPublic: boolean;

	inviteCode?: string;

	paymentAccount: string;

	status: "open" | "running" | "completed";

	createdAt: string;

	updatedAt: string;
}
