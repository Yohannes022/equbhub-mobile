import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import AppText from "../components/Text";
import { useAuthContext } from "../src/store/AuthContext";
import { Spacing } from "../theme/spacing";

export default function HomeScreen() {
	const { user, logout } = useAuthContext();

	return (
		<View style={styles.container}>
			<AppText style={styles.title}>Home</AppText>

			<AppText style={styles.subtitle}>Phone: {user?.phoneNumber}</AppText>

			<Button title="Logout" onPress={logout} />
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
