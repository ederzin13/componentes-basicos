import { View, Button, Alert } from "react-native";
import React from "react";

type ButtonProps = {
  isDisabled: boolean;
};

export default function ButtonNativo({ isDisabled }: ButtonProps) {
  return (
    <View>
      <Button
        title="Button nativo"
        color="#1cc4e6"
        disabled={isDisabled}
        onPress={() => Alert.alert("Buttons nativos são bem simples")}
      ></Button>
    </View>
  );
}
