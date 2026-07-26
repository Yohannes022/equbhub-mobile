import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { router } from "expo-router";

import Button from "../../components/Button";
import AppText from "../../components/Text";
import { Spacing } from "../../theme/spacing";
import AuthService from "../../src/services/auth/AuthService";

export default function LoginScreen() {
	const [phone, setPhone] = useState("0912345678");
	const [loading, setLoading] = useState(false);

	const handleContinue = async () => {
		setLoading(true);

		await AuthService.requestOtp({
			phoneNumber: phone,
		});

		setLoading(false);

		router.push({
			pathname: "/auth/otp",
			params: { phone },
		});
	};

	return (
		<View style={styles.container}>
			<AppText style={styles.title}>Welcome to EqubHub</AppText>

			<AppText style={styles.subtitle}>Phone: {phone}</AppText>

			<Button title="Continue" onPress={handleContinue} loading={loading} />
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
		marginBottom: Spacing.xl,
	},
});
