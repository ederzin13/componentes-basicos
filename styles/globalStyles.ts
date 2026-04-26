import { StyleSheet } from "react-native";

//todos os estilos do app ficam aqui
export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fcf4e6",
		alignItems: "center",
		gap: 20,
	},

	title: {
		padding: 20,
		fontSize: 30,
		fontWeight: "bold",
	},

	whiteText: {
		color: "#fcf4e6",
	},

	caption: {
		fontSize: 20,
		fontWeight: "heavy",
	},

	paragraph: {
		fontSize: 15,
	},
});
