export function isPhoneNumber(phone: string) {
	return /^[0-9]{9,15}$/.test(phone);
}
