import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../styles/globalStyles";
import ButtonNativo from "./ButtonNativo";

export default function Title() {
  return (
    <View>
      <Text style={globalStyles.title}>Componentes nativos</Text>
    </View>
  );
}
