import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../styles/globalStyles";

type TextFieldProps = {
  children: React.ReactNode;
};

export default function TextField({ children }: TextFieldProps) {
  return <View style={globalStyles.textFieldContainer}>{children}</View>;
}
