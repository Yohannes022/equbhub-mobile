import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

import Button from "../../components/Button";
import AppText from "../../components/Text";
import { Spacing } from "../../theme/spacing";
import AuthService from "../../src/services/auth/AuthService";

export default function OtpScreen() {
	const { phone } = useLocalSearchParams<{ phone: string }>();

	const [code, setCode] = useState("123456");
	const [loading, setLoading] = useState(false);

	const handleVerify = async () => {
		setLoading(true);

		const result = await AuthService.verifyOtp({
			phoneNumber: phone,
			code,
		});

		setLoading(false);

		if (result.success) {
			router.replace("/home");
		} else {
			alert(result.message);
		}
	};

	return (
		<View style={styles.container}>
			<AppText style={styles.title}>Verify OTP</AppText>

			<AppText style={styles.subtitle}>Phone: {phone}</AppText>

			<AppText style={styles.subtitle}>OTP: {code}</AppText>

			<Button title="Verify" onPress={handleVerify} loading={loading} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: Spacing.xl,
	},
	title: {
		fontSize: 28,
		marginBottom: Spacing.md,
	},
	subtitle: {
		marginBottom: Spacing.md,
	},
});
