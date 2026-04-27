import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Input from "./Input";
import CustomButton from "../Buttons/CustomButton";
import Switch from "./Switch";

export default function Form() {
	return (
		<View style={styles.container}>
			<Text style={styles.formTitle}>Preencha o formulário</Text>
			<Input placeholder="Patrick Star" label="Nome completo"></Input>
			<Input placeholder="Fenda do biquíni" label="Cidade"></Input>
			{/* <Switch></Switch> */}
			<CustomButton text="Enviar" color="#3f3f3f"></CustomButton>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		// justifyContent: "flex-start",
		backgroundColor: "#ffffff",
		borderRadius: 20,
		padding: 10,
		gap: 15,
	},

	formTitle: {
		fontSize: 20,
		fontWeight: "600",
	},
});
