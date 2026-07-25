/**
 * ============================================================
 * Round Model
 * ============================================================
 */

export interface Round {
	id: string;

	equbId: string;

	roundNumber: number;

	winnerId?: string;

	totalPool: number;

	startedAt: string;

	completedAt?: string;

	status: "pending" | "completed";
}
