import { View, Text, StyleSheet } from "react-native";
import React from "react";

type TextFieldProps = {
	children: React.ReactNode;
};

export default function TextField({ children }: TextFieldProps) {
	return <View style={styles.textFieldContainer}>{children}</View>;
}

const styles = StyleSheet.create({
	textFieldContainer: {
		padding: 15,
		gap: 5,
		backgroundColor: "#eae2d5",
		borderRadius: 5,
		width: 300,
	},
});
