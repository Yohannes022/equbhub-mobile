import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import { Colors } from "../../theme/colors";

export default function Loading() {
	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color={Colors.brand} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
