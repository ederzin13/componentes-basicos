import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { globalStyles } from "../../styles/globalStyles";

type CustomButtonProps = {
  text: string;
  color?: string;
  active?: boolean;
};

export default function CustomButton({
  text,
  color,
  active, // = false,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.customButton,
        { backgroundColor: color ? color : "#5d513b" },
      ]}
    >
      <Pressable
        onPress={() => {
          if (active) {
            Alert.alert("No lugar do Button, use o Pressable!");
          }
        }}
      >
        <Text style={globalStyles.whiteText}>{text}</Text>
      </Pressable>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  customButton: {
    padding: 15,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
