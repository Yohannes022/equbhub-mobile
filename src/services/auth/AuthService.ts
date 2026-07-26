import SessionService from "./Session";
import UserRepository from "../../mock/repositories/UserRepository";
import { AUTH } from "../../constants/auth";
import { generateId } from "../../utils/id";
import { LoginPayload, VerifyOtpPayload, User, AuthSession } from "../../types";

class AuthService {
	async requestOtp(payload: LoginPayload) {
		// MVP: simulate OTP sending
		console.log("Mock OTP sent to", payload.phoneNumber);

		return {
			success: true,
			message: "OTP sent successfully",
		};
	}

	async verifyOtp(payload: VerifyOtpPayload) {
		if (payload.code !== AUTH.OTP_CODE) {
			return {
				success: false,
				message: "Invalid OTP code",
			};
		}

		let user = UserRepository.getAll().find(
			(u: User) => u.phoneNumber === payload.phoneNumber,
		) as User | undefined;

		if (!user) {
			const now = new Date().toISOString();

			user = {
				id: generateId(),
				phoneNumber: payload.phoneNumber,
				fullName: "",
				language: "en",
				isVerified: true,
				role: "member",
				joinedEqubs: [],
				createdEqubs: [],
				createdAt: now,
				updatedAt: now,
			};

			UserRepository.create(user);
		}

		const session: AuthSession = {
			userId: user.id,
			phoneNumber: user.phoneNumber,
			token: AUTH.SESSION_TOKEN_PREFIX + user.id,
		};

		await SessionService.save(session);

		return {
			success: true,
			message: "Login successful",
			data: user,
		};
	}

	async logout() {
		await SessionService.clear();

		return {
			success: true,
			message: "Logged out successfully",
		};
	}

	async currentUser(): Promise<User | null> {
		const session = await SessionService.get();

		if (!session) return null;

		const user = UserRepository.getById(session.userId) as User | undefined;

		return user || null;
	}
}

export default new AuthService();
