import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function ToggleSwitch() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text>Aceite os termos!</Text>
      <Switch value={checked} onValueChange={setChecked}></Switch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
