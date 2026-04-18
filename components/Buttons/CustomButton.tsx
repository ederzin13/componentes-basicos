import {
  Alert,
  ColorValue,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { globalStyles } from "../../styles/globalStyles";

type CustomButtonProps = {
  text: string;
  color?: string;
};

export default function CustomButton({ text, color }: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={[
        globalStyles.customButton,
        { backgroundColor: color ? color : "#5d513b" },
      ]}
    >
      <Pressable
        onPress={() => Alert.alert("No lugar do Button, use o Pressable!")}
      >
        <Text style={globalStyles.whiteText}>{text}</Text>
      </Pressable>
    </TouchableOpacity>
  );
}
