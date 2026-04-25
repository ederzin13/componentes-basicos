import { View, Text } from "react-native";
import React from "react";
import TextField from "../TextField";
import Input from "../Form/Input";
import { globalStyles } from "../../styles/globalStyles";

export default function Inputs() {
	return (
		<View>
			<TextField>
				<Text style={globalStyles.caption}>Caixas de texto</Text>
				<Text>
					Podemos criar caixas de texto com propósitos e comportamentos
					específicos
				</Text>
				<Input></Input>
			</TextField>
		</View>
	);
}
