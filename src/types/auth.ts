export interface LoginPayload {
	phoneNumber: string;
}

export interface VerifyOtpPayload {
	phoneNumber: string;
	code: string;
}

export interface AuthSession {
	userId: string;
	phoneNumber: string;
	token: string;
}
