import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TextField from "../TextField";
import Input from "../Form/Input";
import { globalStyles } from "../../styles/globalStyles";
import Form from "../Form/Form";

export default function Inputs() {
	return (
		<View style={styles.container}>
			<TextField>
				<Text style={globalStyles.caption}>Caixas de texto</Text>
				<Text>
					Podemos criar caixas de texto com propósitos e comportamentos
					específicos
				</Text>
				<Input label="Label" placeholder="Placeholder"></Input>
			</TextField>
			<Form></Form>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 10,
	},
});
