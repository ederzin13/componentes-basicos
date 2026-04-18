import { View, TextInput } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../styles/globalStyles";

export default function Input() {
  const [value, setValue] = useState("");

  return (
    <View style={globalStyles.inputContainer}>
      <TextInput
        placeholder="Digite alguma coisa"
        onChangeText={(text) => {
          setValue(text);
        }}
      ></TextInput>
    </View>
  );
}
