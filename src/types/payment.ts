/**
 * ============================================================
 * Payment Model
 * ============================================================
 */

export type PaymentStatus = "pending" | "paid" | "failed";

export interface Payment {
	id: string;

	equbId: string;

	userId: string;

	roundId: string;

	amount: number;

	method: string;

	transactionReference?: string;

	status: PaymentStatus;

	paidAt?: string;
}
