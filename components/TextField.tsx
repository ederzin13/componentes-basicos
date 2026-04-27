import { View, Text, StyleSheet } from "react-native";
import React from "react";

type TextFieldProps = {
  children: React.ReactNode;
  center?: boolean;
  color?: string;
};

export default function TextField({ children, center, color }: TextFieldProps) {
  return (
    <View
      style={[
        styles.textFieldContainer,
        center && { alignItems: "center", justifyContent: "center" },
        color ? { backgroundColor: color } : { backgroundColor: "#eae2d5" },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  textFieldContainer: {
    padding: 15,
    gap: 5,
    borderRadius: 5,
    width: 300,
  },
});
