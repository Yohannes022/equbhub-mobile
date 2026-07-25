import React from "react";
import {
	TouchableOpacity,
	Text,
	StyleSheet,
	ActivityIndicator,
} from "react-native";

import { Colors } from "../../theme/colors";
import { Radius, Spacing } from "../../theme/spacing";
import { FontSize, FontWeight } from "../../theme/typography";

interface Props {
	title: string;
	onPress: () => void;
	loading?: boolean;
	disabled?: boolean;
}

export default function Button({
	title,
	onPress,
	loading = false,
	disabled = false,
}: Props) {
	return (
		<TouchableOpacity
			style={[styles.button, disabled && styles.disabled]}
			disabled={disabled || loading}
			onPress={onPress}
		>
			{loading ? (
				<ActivityIndicator color="#fff" />
			) : (
				<Text style={styles.text}>{title}</Text>
			)}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		height: 52,
		borderRadius: Radius.md,
		backgroundColor: Colors.brand,
		justifyContent: "center",
		alignItems: "center",
	},

	disabled: {
		opacity: 0.5,
	},

	text: {
		color: "#fff",
		fontSize: FontSize.md,
		fontWeight: FontWeight.semibold,
	},
});
