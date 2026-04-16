import { View, Text, ScrollView, StatusBar, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type ScrollableProps = {
  children: React.ReactNode;
};

export default function Scrollable({ children }: ScrollableProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>{children}</ScrollView>
      </SafeAreaView>
      <StatusBar barStyle="dark-content"></StatusBar>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcf4e6",
    alignItems: "center",
  },
});
