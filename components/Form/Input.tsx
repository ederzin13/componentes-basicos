import { View, TextInput, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../styles/globalStyles";

type InputProps = {
	label?: string;
	placeholder?: string;
	error?: boolean;
};

export default function Input({ label, placeholder, error }: InputProps) {
	const [value, setValue] = useState("");

	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<View style={[styles.input, error && { borderColor: "#f46f51" }]}>
				<TextInput
					placeholder={placeholder}
					{...(error && { placeholderTextColor: "#f46f51" })}
					onChangeText={(text) => {
						setValue(text);
					}}
				></TextInput>
			</View>
			{error && <Text style={styles.errorText}>Existe um erro!</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 5,
	},

	label: {
		fontWeight: "bold",
	},

	input: {
		height: 50,
		width: 200,
		borderWidth: 1,
		borderColor: "#b0b0b0",
		borderRadius: 5,
		justifyContent: "center",
	},

	errorText: {
		color: "#f46f51",
	},
});
