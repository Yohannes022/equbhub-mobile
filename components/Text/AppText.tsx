import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";

import { FontSize, FontWeight } from "../../theme/typography";

interface Props extends TextProps {
	children: React.ReactNode;
}

export default function AppText({ children, style, ...props }: Props) {
	return (
		<Text style={[styles.text, style]} {...props}>
			{children}
		</Text>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: FontSize.md,
		fontWeight: FontWeight.regular,
	},
});
