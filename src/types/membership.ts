/**
 * ============================================================
 * Membership Model
 * ============================================================
 */

export type MembershipStatus = "pending" | "approved" | "rejected";

export interface Membership {
	id: string;

	equbId: string;

	userId: string;

	status: MembershipStatus;

	joinedAt: string;

	approvedAt?: string;
}
