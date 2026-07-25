import React from "react";
import { View, StyleSheet, ViewProps } from "react-native";

import { Radius, Spacing } from "../../theme/spacing";

import { Colors } from "../../theme/colors";

export default function Card({ style, ...props }: ViewProps) {
	return <View {...props} style={[styles.card, style]} />;
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: Colors.surface,
		padding: Spacing.lg,
		borderRadius: Radius.lg,
	},
});
