import { View, Text } from "react-native";
import React from "react";
import TextField from "../TextField";
import { globalStyles } from "../../styles/globalStyles";
import ButtonNativo from "../Buttons/ButtonNativo";
import CustomButton from "../Buttons/CustomButton";

export default function Buttons() {
  return (
    <View style={globalStyles.container}>
      <TextField>
        <Text style={globalStyles.caption}>Alguns botões simples</Text>
        <Text style={globalStyles.paragraph}>
          É possível utilizar botões nativos (bastante limitados), ou criar
          botões personalizados utilizando o "Pressable"
        </Text>
      </TextField>
      <ButtonNativo isDisabled={false}></ButtonNativo>
      <ButtonNativo isDisabled={true}></ButtonNativo>
      <CustomButton text="Button customizado!" active></CustomButton>
      <CustomButton text="Cor personalizada" color="#676ec3"></CustomButton>
    </View>
  );
}
